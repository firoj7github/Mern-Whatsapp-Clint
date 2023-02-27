import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';


const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

function MenuSidebar() {
    const [open, setOpen] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClose = () => {
        setOpen(null);
    };
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    return (
        <>
        <MoreVertIcon onClick={handleClick} />
        <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption >Profile</MenuOption>
                <MenuOption >My Account</MenuOption>
                <MenuOption >Logout</MenuOption>
               
            </Menu>

        </>
        
    )
}

export default MenuSidebar
