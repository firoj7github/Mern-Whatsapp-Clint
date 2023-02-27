import React, { useContext } from 'react'
import LoginDailog from './account/LoginDailog'
import {AppBar, Toolbar, styled, Box} from '@mui/material';
import { UserAccount } from '../context/UserProvider';
import ChatDailog from './chat/ChatDailog';

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 205px;
    box-shadow: none;
`;
const Component = styled(Box)`

    height: 100vh;
    background: #DCDCDC;
`;

function Massanger() {
    const { account } = useContext(UserAccount);
    return (
        <Component>
            {account ? 
            <>
            <Header>
               <Toolbar>
               </Toolbar>
            </Header>
            <ChatDailog/>
            </>
            :
            <>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        
      <LoginDailog></LoginDailog>
      </>
             }
        </Component>
        
    )
}

export default Massanger


