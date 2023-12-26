import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} =  user;
    const userStyle = {
        border: '2px solid',
        padding: '10px',
        margin: '5px'
    };
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{phone}</h4>
            <Link to={`/user/${id}`}>Show details</Link>
        </div>
    );
};

export default User;