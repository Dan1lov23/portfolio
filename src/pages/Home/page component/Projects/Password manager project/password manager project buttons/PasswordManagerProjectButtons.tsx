import "./passwordManagerProjectButtons.css";

import ShowCodeButton from "../../../../../../UI components/for projects cart/show code button/ShowCodeButton.tsx";
import ShowAppButton from "../../../../../../UI components/for projects cart/show app button/ShowAppButton.tsx";

export default function PasswordManagerProjectButtons() {
    return (
        <>
            <div className="passwordManagerProjectButtons">
                <ShowCodeButton link={"https://github.com/Dan1lov23/password-manager-V3-frontend"}/>
                <ShowAppButton link={"http://109.194.51.67/~sv/weather%20app/dist/"}/>
            </div>
        </>
    )
}