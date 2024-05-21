import React, {useState} from "react";

import "../../Styles/home.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import DevicesContainer from "../Devices/DevicesContainer";
import FAB from "../FAB/FAB";
import DeviceModalContainer from "../DeviceModal/DeviceModalContainer";

const Home = () => {
    const [isModalOpened, setIsModalOpened] = useState(false)

    return (
        <div className="Home">
            <Navbar></Navbar>
            <Search></Search>
            <DevicesContainer></DevicesContainer>
            <FAB 
                setIsModalOpened={setIsModalOpened}
            ></FAB>
            <DeviceModalContainer
                isModalOpened={isModalOpened}
                setIsModalOpened={setIsModalOpened}
            ></DeviceModalContainer>
        </div>
    );
};

export default Home;
