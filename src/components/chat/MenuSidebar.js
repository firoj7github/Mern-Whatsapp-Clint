import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';
import Showdower from '../../dawer/Showdower';


const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;

function MenuSidebar() {
    // const [openDrawer, setOpenDrawer] = useState(false);
    // const toogleDower=()=>{
    //     setOpenDrawer(true)
    // }
    const [open, setOpen] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleClose = () => {
        setOpen(null);
    };
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }


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
                <MenuOption onClick={() => { handleClose(); toggleDrawer()}}>Profile</MenuOption>
                
               
            </Menu>
            <Showdower open={openDrawer} setOpen={setOpenDrawer} />

        </>
        
    )
}

export default MenuSidebar
