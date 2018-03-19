import React from 'react';
import { List, Datagrid, EmailField, TextField, TextInput, Filter} from 'admin-on-rest';
import { Create, Edit, required, SimpleForm, DisabledInput,  EditButton } from 'admin-on-rest';


const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const UserTitle = ({ record }) => {
    return <span>Post {record ? `"${record.username}"` : ''}</span>;
};

export const UserList = (props) => (
    <List title="All users" {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <EditButton />
        </Datagrid>
    </List>
);


export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="street" />
            <TextInput source="city" />
            <TextInput source="zipcode" />
            <TextInput source="phone" />
            <TextInput source="website" />
        </SimpleForm>
    </Create>
);

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" validate={required} />
            <TextInput source="username" validate={required}/>
            <TextInput source="email" validate={required}/>
            <TextInput source="street" />
            <TextInput source="city" />
            <TextInput source="zipcode" />
            <TextInput source="phone" />
            <TextInput source="website" />
        </SimpleForm>
    </Edit>
);