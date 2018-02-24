import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import UserIcon from 'material-ui/svg-icons/social/group';
import authClient from './authClient';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';

import myApiRestClient from './restClient';

 //**       <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />*/ 
const App = () => (
    <Admin authClient={authClient} restClient={myApiRestClient('https://86g0is69mk.execute-api.eu-west-3.amazonaws.com/dev')}>
        <Resource name="app-user" list={UserList} icon={UserIcon}/>
    </Admin>
);

export default App;