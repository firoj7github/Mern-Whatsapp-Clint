import React, { useContext } from 'react'


import { styled, Box, Typography } from "@mui/material";
import { UserAccount } from '../../context/UserProvider';
import { setConversation } from '../../service/api';



const Component = styled(Box)`
    height: 45px;
    display: flex;
    padding: 13px 0;
    cursor: pointer;
    
`;
    
const Image = styled('img') ({
    width: 30,
    height: 30,
    objectFit: 'cover',
    borderRadius: '50%',
    padding: '0 14px'
});

const Container = styled(Box)`
    display: flex;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    margin-left: auto;
    color: #00000099;
    margin-right: 20px;
    
`;

const Text = styled(Typography)`
    display: block;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`;



function ConversationShow({user}) {
    const url = user.picture;
    
    const { setPersion} = useContext(UserAccount);
    const { account} = useContext(UserAccount);
    const showUser =async()=>{
        setPersion(user);
      const data=  await setConversation({ senderId: account.sub, receiverId: user.sub });
      
    }

    return (
        <Component onClick={()=>showUser()}>
            <Box>
                <Image src={url}/>
            </Box>
            <Box style={{width: '100%'}}>
                <Container>
                    <Typography>{user.name}</Typography>
                    
                </Container>
                <Box>
                    
                </Box>
            </Box>
        </Component>
    )
}

export default ConversationShow
