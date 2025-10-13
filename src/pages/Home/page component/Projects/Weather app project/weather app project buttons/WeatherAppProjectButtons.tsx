import "./weatherAppProjectButtons.css";

import ShowCodeButton from "../../../../../../UI components/for projects cart/show code button/ShowCodeButton.tsx";
import ShowAppButton from "../../../../../../UI components/for projects cart/show app button/ShowAppButton.tsx";

export default function WeatherAppProjectButtons() {
    return (
        <>
            <div className="weatherAppProjectButtons">
                <ShowCodeButton link={"https://github.com/Dan1lov23/weather-app-on-React"}/>
                <ShowAppButton link={"http://109.194.51.67/~sv/weather%20app/dist/"}/>
            </div>
        </>
    )
}