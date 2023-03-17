import React, {useContext, useEffect, useState } from 'react'
import { getUser } from '../../service/api';
import { Box, Divider, styled} from '@mui/material';
import ConversationShow from './ConversationShow';
import { UserAccount } from '../../context/UserProvider';

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

function Conversation({text}) {

    const [users, getUsers] = useState();

    useEffect(()=>{
        const fetchData=async()=>{
            const data = await getUser();
            let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            getUsers(fiteredData);
            // getUsers(data);
        }
        fetchData();
    },[text])

    const {account}= useContext(UserAccount);
    return (
        
        <Box >
        {
                users && users.map((user, index) => (
                    
                 user.sub !== account.sub &&  
                 <>
                 <ConversationShow user={user} />
                 <StyledDivider></StyledDivider>
                 </>     
                
                            
                     
                ))
            }              
        </Box>
        
    )
}

export default Conversation
