import { Outlet } from "react-router-dom";
import Navbar from "../Component/Shared/Navbar/Navbar";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="px-5 sm:px-[10%] my-10 min-h-[75vh]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;