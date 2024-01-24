
import { useContext } from "react";
import EventDetails from "../Components/EventDetails";
import Header from "../Components/Header";
import Ships from "../Components/Ships";
import CardSkeleton from "../Components/CardSkeleton";




const Home = () => {
    return (
        <div>
            <Header/>
            <EventDetails/>
            <Ships/>
        </div>
    );
};

export default Home;