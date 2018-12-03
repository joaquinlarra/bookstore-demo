import React from 'react';
import {UrlField, EmailField, DateInput, Filter, ImageInput, ImageField, DateField, List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

// const PostFilter = (props) => (
//   <Filter {...props}>
//       <TextInput label="Search" source="q" alwaysOn />
//       <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
//           <SelectInput optionText="name" />
//       </ReferenceInput>
//   </Filter>
// );

const PublicationsUrlField = ({ record = {}, source }) =>
    <a href={`/#/publications?filter={"authorId":${record.id}}`}>
        View
    </a>;


export const AuthorList = (props) => (
  <List {...props}>
      <Responsive
          small={
              <SimpleList
                  primaryText={record => record.name}
                  secondaryText={record => {
                      return `${record.email}`
                    }}
              />
          }
          medium={
              <Datagrid>
                  <TextField source="name" />
                  <EmailField source="email" />
                  <DateField source="createdAt" showTime />
                  <PublicationsUrlField />
                  <EditButton />
              </Datagrid>
          }
      />
  </List>
);

const AuthorTitle = ({ record }) => {
  return <span>Author {record ? `"${record.name}"` : ''}</span>;
};

export const AuthorEdit = (props) => (
  <Edit title={<AuthorTitle />} {...props}>
    <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" type="email" />
        <DateInput source="dob" />
    </SimpleForm>
  </Edit>
);

export const AuthorCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="email" type="email" />
        <DateInput source="dob" />
      </SimpleForm>
  </Create>
);