import "./projectSlider.css";

import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function ProjectSlider({imgArray}:{imgArray:any}) {

    const [imgSrc, setImgSrc] = useState(imgArray[0]);

    const changeImgFunction = () => {
        for (let a = 0; a < imgArray.length; a++) {
            if (imgSrc === imgArray[imgArray.length - 1]) {
                setImgSrc(imgArray[0]);
            } else if (imgSrc === imgArray[a]) {
                setImgSrc(imgArray[a + 1]);
            }
        }
    }

    const prevImgFunction = () => {
        for (let a = 0; a < imgArray.length; a++) {
            if (imgSrc === imgArray[0]) {
                setImgSrc(imgArray[imgArray.length - 1]);
            } else if (imgSrc === imgArray[a]) {
                setImgSrc(imgArray[a - 1]);
            }
        }
    }

    return (
        <>
            <div className="projectSlider">
                <p onClick={() => prevImgFunction()}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </p>
                <div className="mainImg">
                    <img src={imgSrc} onClick={() => changeImgFunction()}/>
                </div>
                <p onClick={() => changeImgFunction()}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </p>
            </div>
        </>
    )
}