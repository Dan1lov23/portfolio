import "./contactCart.css";

import {Link} from "react-router-dom";

export default function ContactCart({name, link}:{name:string, link:string}) {
    return (
        <>
            <div className="contactCart">
                <Link to={link}>
                    <p>{name}</p>
                </Link>
            </div>
        </>
    )
}