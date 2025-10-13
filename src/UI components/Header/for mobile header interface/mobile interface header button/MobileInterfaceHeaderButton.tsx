import "./mobileInterfaceHeaderButton.css";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import {useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function MobileInterfaceHeaderButton() {

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: '100%', height: '100%' }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>

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