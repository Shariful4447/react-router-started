import { Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1>Hello i am Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;