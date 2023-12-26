import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

     const users = useLoaderData();
     console.log(users);
    return (
        <div>
            <h2>Our Users : {users.length}</h2>
            <p>All our users are here</p>
            {
                users.map( user => <User key={user.id} user={user}></User> )
            }
        </div>
    );
};

export default Users;