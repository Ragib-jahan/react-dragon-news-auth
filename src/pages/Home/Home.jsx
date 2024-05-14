
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";


const Home = () => {
    return (
        <div className="border">
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-poppins">THis is home</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 text-center">
                    <h2 className="text-4xl">News Coming Soon...</h2>
                </div>
                <div className="md:col-span-1 text-end">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;