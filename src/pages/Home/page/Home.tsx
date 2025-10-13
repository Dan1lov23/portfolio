import "./home.css";

import Header from "../../../UI components/Header/header/Header.tsx";
import AboutMe from "../page component/About me/about me/AboutMe.tsx";
import Technologies from "../page component/Technologies/technologies/Technologies.tsx";
import WeatherAppProject from "../page component/Projects/Weather app project/weather app project/WeatherAppProject.tsx";
import PasswordManagerProject from "../page component/Projects/Password manager project/password manager project/PasswordManagerProject.tsx";
import Contacts from "../page component/Contacts/contacts/Contacts.tsx";

export default function Home() {
    return (
        <>
            <div className="home">
                <Header/>
                <AboutMe/>
                <Technologies/>
                <WeatherAppProject/>
                <PasswordManagerProject/>
                <Contacts/>
            </div>
        </>
    )
}