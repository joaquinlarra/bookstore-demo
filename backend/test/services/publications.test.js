const request = require('supertest');
const assert = require('assert');
const app = require('../../src/app');
const faker = require('faker');

describe('\'publications\' service', () => {
  it('registered the service', () => {
    const service = app.service('publications');

    assert.ok(service, 'Registered the service');
  });
});

describe('GET /publications', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/publications')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});


describe('Get an author id to create a publication', function() {
  it('respond with json', function(done) {
    request(app) 
      .get('/authors')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, result) { // UPDATE
        if (err) return done(err);
        const author = result.body.data[0];
        describe('POST /publications', function() {
          it('create Publication with authorId previously selected', function(done) {
            let randomTitle = faker.lorem.sentence();
            let randomBody = faker.lorem.paragraph(); 
            request(app)
              .post('/publications')
              .send({title: randomTitle, body: randomBody, publishDate: '1891-12-30', authorId: author.id})
              .set('Accept', 'application/json')
              .expect(201)
              .end(function(err) {
                if (err) return done(err, result);
                describe('GET /publications', function() {
                  it('get recently created publication by author', function(done) {
                    request(app)
                      .get(`/publications?author_id=${author.id}&$limit=1&$sort[id]=-1`)
                      .set('Accept', 'application/json')
                      .expect('Content-Type', /json/)
                      .expect(200)
                      .end(function(err,result) {
                        const publication = result.body.data[0];

                        describe('UPDATE /publications', function() {
                          it('update publication recently created', function(done) {
                            randomTitle = faker.lorem.sentence();
                            randomBody = faker.lorem.paragraph(); 
                            request(app)
                              .put(`/publications/${publication.id}`)
                              .send({title: randomTitle, body: randomBody, publishDate: '1891-12-31', authorId: author.id})
                              .set('Accept', 'application/json')
                              .expect(200)
                              .end(function(err) {
                                if (err) return done(err);
                                done();
                              });
                          });
                        });

                        describe('PATCH /publications', function() {
                          it('patch publication recently created', function(done) {
                            const randomTitle2 = faker.lorem.sentence();        
                            request(app)
                              .patch(`/publications/${publication.id}`)
                              .send({title: randomTitle2})
                              .set('Accept', 'application/json')
                              .expect(200)
                              .end(function(err) {
                                if (err) return done(err);
                                done();
                              });
                          });
                        });

                        describe('DELETE /publications', function() {
                          it('delete publication recently created', function(done) {
                            randomTitle = faker.lorem.sentence();
                            randomBody = faker.lorem.paragraph(); 
                            request(app)
                              .delete(`/publications/${publication.id}`)
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

        done();
      });
  });
});