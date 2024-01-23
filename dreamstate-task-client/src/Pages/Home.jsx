
import { useContext } from "react";
import EventDetails from "../Components/EventDetails";
import Header from "../Components/Header";
import Ships from "../Components/Ships";
import CardSkeleton from "../Components/CardSkeleton";
import { AuthContext } from "../api/Auth/AuthProvider";



const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return (
            <CardSkeleton/>
        )
    }
    return (
        <div>
            <Header/>
            <EventDetails/>
            <Ships/>
        </div>
    );
};

export default Home;