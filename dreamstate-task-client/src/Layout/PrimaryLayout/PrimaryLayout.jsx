import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const PrimaryLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default PrimaryLayout;