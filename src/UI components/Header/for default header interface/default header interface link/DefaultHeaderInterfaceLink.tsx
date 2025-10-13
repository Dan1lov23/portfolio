import "./defaultHeaderInterfaceLink.css";

export default function DefaultHeaderInterfaceLink({link, position}:{link:string, position:number}) {

    const changePositionFunction = () => {
        window.scrollTo({ top: position, behavior: 'smooth' });
    }

    return (
        <>
            <div className="defaultHeaderInterfaceLink" onClick={() => changePositionFunction()}>
                <p>{link}</p>
            </div>
        </>
    )
}