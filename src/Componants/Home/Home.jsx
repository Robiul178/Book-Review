import Books from "../Books/Books";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
                <Books></Books>
            </div>
        </div>
    );
};

export default Home;