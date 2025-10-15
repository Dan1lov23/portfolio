import "./mobileInterfaceHeaderButton.css";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import {useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';

import MobileHeaderInterfaceLink from "../mobile header interface link/MobileHeaderInterfaceLink.tsx";

export default function MobileInterfaceHeaderButton() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const linksArray = [
        {link: "Обо мне", position: 100},
        {link: "Технологии", position: 1000},
        {link: "Проекты", position: 2100},
        {link: "Контакты", position: 1000},
    ]

    const DrawerList = (
        <Box
            sx={{ width: '100%', height: '100%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {linksArray.map((link, index) => (
                    <div key={index}>
                        <MobileHeaderInterfaceLink link={link.link} position={link.position} onClose={toggleDrawer(false)}/>
                    </div>
                ))}
            </List>
        </Box>
    );

    return (
        <div className="mobileInterfaceHeaderButton">
            <button onClick={toggleDrawer(true)}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <Drawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        width: '100%',
                        height: '100vh',
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </div>
    );
}