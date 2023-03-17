import React, { useContext, useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/material';
import ChatBoxFooter from './ChatBoxFooter';
import { UserAccount } from '../../context/UserProvider';
import { getMessage, newMessages } from '../../service/api';
import MessageShow from './MessageShow';



const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const Component = styled(Box)`
    height: 77vh;
    overflow-y: scroll;
`;
const Container = styled(Box)`
    padding: 1px 80px;
`;
function ChatMessage({persion, conversation}) {

    const [value, setValue]=useState();
    const {account}= useContext(UserAccount);
    const [messages, setMessage] = useState([]);
    const scrollRef = useRef();

    useEffect(()=>{
        const getMessageDetails = async()=>{
               let data = await getMessage(conversation._id);
               console.log(data);
               setMessage(data);
        }
        conversation._id && getMessageDetails();
    },[persion._id, conversation._id])

    const sendText =async(e)=>{
        let code = e.keyCode || e.which;
        if(code === 13) {
           let message = {
            senderId: account.sub,
            receiverId: persion.sub,
            conversationId: conversation._id,
           
            type: 'text',
            text: value
           }
           await newMessages(message);

            setValue('');
         }
    }
    return (
        <Wrapper>
         <Component>
         {
                    messages && messages.map(message => (
                        <Container ref={scrollRef}>
                            <MessageShow message={message} />
                        </Container>
                    ))
                }
         </Component>
         <ChatBoxFooter value={value} setValue={setValue} sendText={sendText}/>
        </Wrapper>
    )
}

export default ChatMessage
