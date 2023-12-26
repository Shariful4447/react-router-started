import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    // const {name} =user;
    return (
        <div>
            <h2>Details about user: {user.name}</h2>
        </div>
    );
};

export default UserDetails;