import "./header.css";


import DefaultHeaderInterface from "../for default header interface/default header interface/DefaultHeaderInterface.tsx";
import MobileHeaderInterface from "../for mobile header interface/mobile header interface/MobileHeaderInterface.tsx";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="defaultInterfaceH">
                    <DefaultHeaderInterface/>
                </div>
                <div className="mobileInterfaceH">
                    <MobileHeaderInterface/>
                </div>
            </div>
        </>
    )
}
