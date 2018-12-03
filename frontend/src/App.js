import React, { Component } from 'react';
import './App.css';
import PeopleIcon from '@material-ui/icons/People';
import BookIcon from '@material-ui/icons/Book';
import feathersClient from './feathersClient';
import { restClient } from 'ra-data-feathers';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { AuthorList, AuthorEdit, AuthorCreate } from './resources/authors';
import { PublicationList, PublicationEdit, PublicationCreate } from './resources/publications';

const App = () => (
    <Admin dataProvider={restClient(feathersClient)}>
        <Resource name="authors" list={AuthorList} edit={AuthorEdit} create={AuthorCreate} icon={PeopleIcon} />
        <Resource name="publications" list={PublicationList} edit={PublicationEdit} create={PublicationCreate} icon={BookIcon} />
    </Admin>
);

export default App;