import React, { useContext } from 'react'
import { Box, Dialog, styled } from '@mui/material'
import { UserAccount } from '../../context/UserProvider'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuSidebar from './MenuSidebar';


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

function MenuHeader() {
    const {account}= useContext(UserAccount);
    return (
        <>
        <Component>
           <Image src={account.picture} alt="Picture"></Image>
           <Wrapper>
                    <ChatIcon></ChatIcon>
                    <MenuSidebar></MenuSidebar>
                    
                </Wrapper>
        </Component>
        </>
    )
}

export default MenuHeader
