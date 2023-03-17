import { useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert, Person } from '@mui/icons-material';



import { UserAccount } from '../../context/UserProvider';

// import { defaultProfilePicture } from '../../layouts/data';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
    
const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatBoxHeader = ({ persion }) => {  

    

    const url = persion.picture;
    
    
    const {account}= useContext(UserAccount);

    return (
        <Header>
            <Image src={url} alt="display picture" />     
            <Box>
                <Name>{persion.name}</Name>
                <Status>online</Status>    
            </Box>   
            <RightContainer>
                <Search />
                <MoreVert />    
            </RightContainer> 
        </Header>
    )
}

export default ChatBoxHeader;

