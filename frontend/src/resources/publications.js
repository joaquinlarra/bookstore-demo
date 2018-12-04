import React from 'react';
import { DateInput, DateTimeInput, Filter, ImageInput, ImageField, DateField, List, Responsive, SimpleList, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';


const FullNameField = ({ record }) => <span><b>{record.name}</b> <small>{record.email}</small></span>;

const PublicationsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Title" source="title" />
        <ReferenceInput label="Author" source="authorId" reference="authors">
            <SelectInput optionText={<FullNameField />} />
        </ReferenceInput>
    </Filter>
);

export const PublicationList = (props) => (
  <List {...props} filters={<PublicationsFilter />}>
      <Responsive
          small={
              <SimpleList
                  primaryText={record => record.title}
              />
          }
          medium={
              <Datagrid>
                  <TextField source="title" />
                  <ReferenceField label="Author" source="authorId" reference="authors">
                      <FullNameField/>
                  </ReferenceField>
                  <DateField source="publishDate" showTime/>
                  <EditButton />
              </Datagrid>
          }
      />
  </List>
);

const PublicationTitle = ({ record }) => {
  return <span>Publication {record ? `"${record.name}"` : ''}</span>;
};

export const PublicationEdit = (props) => (
  <Edit title={<PublicationTitle />} {...props}>
      <SimpleForm>
        <TextField source="id" />
        <TextInput source="title" />
        <ReferenceInput label="Author" source="authorId" reference="authors">
            <SelectInput optionText={<FullNameField />} />
        </ReferenceInput>
        <LongTextInput source="body" />
        <DateTimeInput source="publishDate" showTime/>
      </SimpleForm>
  </Edit>
);

export const PublicationCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <ReferenceInput label="Author" source="authorId" reference="authors">
            <SelectInput optionText={<FullNameField />} />
        </ReferenceInput>
        <LongTextInput source="body" />
        <DateTimeInput source="publishDate" />
      </SimpleForm>
  </Create>
);