const request = require('supertest');
const assert = require('assert');
const app = require('../../src/app');
const faker = require('faker');

describe('\'authors\' service', () => {
  it('registered the service', () => {
    const service = app.service('authors');

    assert.ok(service, 'Registered the service');
  });
});

describe('GET /authors', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/authors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();

describe('POST /authors', function() {
  it('create author', function(done) {
    request(app)
      .post('/authors')
      .send({name: randomName, email: randomEmail, dob: '1892-12-30'})
      .set('Accept', 'application/json')
      .expect(201)
      .end(function(err) {
        if (err) return done(err);
        describe('Get recently created  author', function() {
          it('get author created in previous step', function(done) {
            request(app)
              .get(`/authors?email=${randomEmail}`)
              .set('Accept', 'application/json')
              .expect('Content-Type', /json/)
              .expect(200)
              .end(function(err, result) { // UPDATE
                if (err) return done(err);
                const author = result.body.data;
                const newRandomName = faker.name.findName();
                const newRandomEmail = faker.internet.email();
                describe('UPDATE /authors', function() {
                  it('update created author', function(done) {
                    request(app)
                      .put(`/authors/${author[0].id}`)
                      .send({name: newRandomName, email: newRandomEmail, dob: '1892-12-31'})
                      .set('Accept', 'application/json')
                      .expect(200)
                      .end(function(err) {
                        if (err) return done(err);
                        done();
                      });
                  });
                });
        
                const newRandomName2 = faker.name.findName();
                describe('PATCH /authors', function() {
                  it('patch created author', function(done) {
                    request(app)
                      .patch(`/authors/${author[0].id}`)
                      .send({name: newRandomName2})
                      .set('Accept', 'application/json')
                      .expect(200)
                      .end(function(err) {
                        if (err) return done(err);
                        done();
                      });
                  });
                });
        
                describe('DELETE /authors', function() {
                  it('delete created author', function(done) {
                    request(app)
                      .delete(`/authors/${author[0].id}`)
                      .set('Accept', 'application/json')
                      .expect(200)
                      .end(function(err) {
                        if (err) return done(err);
                        done();
                      });
                  });
                });
                done();
              });
          });
        });
        done();
      });
  });
});


