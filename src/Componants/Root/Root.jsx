import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-[1300px] mx-auto p-6">
                <Header></Header>
                <Outlet></Outlet>

            </div>
            <div >
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;