import "./mobileHeaderInterfaceLink.css";

export default function MobileHeaderInterfaceLink({link, position}:{link:string, position:number}) {

    const changePositionFunction = () => {
        window.scrollTo({ top: position, behavior: 'smooth' });
    }

    return (
        <>
            <div className="mobileHeaderInterfaceLink" onClick={() => changePositionFunction()}>
                <p>{link}</p>
            </div>
        </>
    )
}