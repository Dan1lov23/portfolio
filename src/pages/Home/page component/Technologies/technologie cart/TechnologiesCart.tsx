import "./technologiesCart.css";

export default function TechnologiesCart({imgSrc, name}:{imgSrc:string, name:string}) {
    return (
        <>
            <div className="technologiesCart">
                <img src={imgSrc}/>
                <p>{name}</p>
            </div>
        </>
    )
}