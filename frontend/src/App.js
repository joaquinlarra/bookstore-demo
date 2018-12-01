import React, { Component } from 'react';
import './App.css';
import PeopleIcon from '@material-ui/icons/People';
import BookIcon from '@material-ui/icons/Book';
import feathersClient from './feathersClient';
import { restClient } from 'ra-data-feathers';
import { Admin, Resource, ListGuesser } from 'react-admin';
// import { Admin, Resource } from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';

const dataProvider = restClient(feathersClient,{});
// const App = () => <Admin dataProvider={dataProvider} />;



const App = () => (
    <Admin dataProvider={restClient(feathersClient)}>
        <Resource name="authors" list={ListGuesser} icon={PeopleIcon} />
        <Resource name="publications" list={ListGuesser} icon={BookIcon} />
    </Admin>
);

export default App;