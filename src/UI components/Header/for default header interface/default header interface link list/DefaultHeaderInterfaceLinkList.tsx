import "./defaultHeaderInterfaceLinkList.css";

import DefaultHeaderInterfaceLink from "../default header interface link/DefaultHeaderInterfaceLink.tsx";

export default function DefaultHeaderInterfaceLinkList() {

    const linksArray = [
        {link: "Обо мне", position: 0},
        {link: "Технологии", position: 850},
        {link: "Проекты", position: 1460},
        {link: "Контакты", position: 10000}
    ]

    return (
        <>
            <div className="defaultHeaderInterfaceLinkList">
                {linksArray.map((link:any, index:number) => (
                    <div key={index}>
                        <DefaultHeaderInterfaceLink link={link.link} position={link.position}/>
                    </div>
                ))}
            </div>
        </>
    )
}