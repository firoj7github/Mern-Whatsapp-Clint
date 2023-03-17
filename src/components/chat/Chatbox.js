import React, { useContext, useEffect, useState } from 'react'
import { UserAccount } from '../../context/UserProvider'
import { getConversation, setConversation } from '../../service/api';
import ChatBoxHeader from './ChatBoxHeader'
import ChatMessage from './ChatMessage'

function Chatbox() {



  const {persion}= useContext(UserAccount);
  const {account}= useContext(UserAccount);
  
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
        let data = await getConversation({ senderId: account.sub, receiverId: persion.sub });
        console.log(data);
        setConversation(data);
    }
    getConversationDetails();
}, [persion.sub]);
    return (
        <>
          <ChatBoxHeader persion={persion}/>
          <ChatMessage persion={persion} conversation={conversation}/>
        </>
    )
}

export default Chatbox
