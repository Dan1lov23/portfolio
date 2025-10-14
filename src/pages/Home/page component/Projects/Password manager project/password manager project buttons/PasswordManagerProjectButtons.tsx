import "./passwordManagerProjectButtons.css";

import ShowCodeButton from "../../../../../../UI components/for projects cart/show code button/ShowCodeButton.tsx";
import ShowAppButton from "../../../../../../UI components/for projects cart/show app button/ShowAppButton.tsx";

export default function PasswordManagerProjectButtons() {
    return (
        <>
            <div className="passwordManagerProjectButtons">
                <ShowCodeButton link={"https://github.com/Dan1lov23/password-manager-V3-frontend"}/>
                <ShowAppButton link={"https://password-manager-v3-frontend.onrender.com"}/>
            </div>
        </>
    )
}
