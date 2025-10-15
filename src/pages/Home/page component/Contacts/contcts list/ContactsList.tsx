import "./contactsList.css";

import ContactCart from "../contact cart/ContactCart.tsx";

export default function ContactsList() {

    const contactsArray = [
        {name: "github", link: "https://github.com/Dan1lov23/"},
        {name: "linkedin", link: "https://www.linkedin.com/in/"},
        {name: "twitter", link: "https://twitter.com/"},
        {name: "telegram", link: "http://t.me/@kicgv"},
    ]

    return (
        <>
            <div className="contactsList">
                {contactsArray.map((contact, index) => (
                    <div key={index}>
                        <ContactCart name={contact.name} link={contact.link}/>
                    </div>
                ))}
            </div>
        </>
    )
}
