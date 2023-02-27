import { Box, Dialog, styled } from '@mui/material'
import React from 'react'
import EmptyChat from './EmptyChat';
import Menu from './Menu';
const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};
const Component = styled(Box)`
    display: flex;
`;
    
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

function ChatDailog() {
    return (
        <Dialog
        open={true}
        hideBackdrop={true}
        maxWidth={'md'}
        PaperProps={{ sx: dialogStyle }}
        >
           <Component>
           <LeftComponent>
            <Menu></Menu>
           </LeftComponent>
           <RightComponent>
            <EmptyChat></EmptyChat>
           </RightComponent>
           </Component>
        </Dialog>
    )
}

export default ChatDailog
