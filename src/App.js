import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';
import UserIcon from 'material-ui/svg-icons/social/group';
import authClient from './authClient';
import { PostList, PostEdit, PostCreate } from './posts';
import { UserList, UserEdit, UserCreate} from './users';
import myApiRestClient from './restClient';

 //**       <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} />*/ 
 //**       restClient={myApiRestClient('https://hjk29jqlfh.execute-api.eu-west-3.amazonaws.com/dev')} */
const App = () => (
    <Admin authClient={authClient} restClient={jsonServerRestClient('https://hjk29jqlfh.execute-api.eu-west-3.amazonaws.com/dev')} >
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} remove={Delete} icon={UserIcon}/>
    </Admin>
);

export default App;