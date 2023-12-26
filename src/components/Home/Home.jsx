import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Hello i am Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;