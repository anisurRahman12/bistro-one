import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navber from "../pages/Shared/Footer/Navber/Navber";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;