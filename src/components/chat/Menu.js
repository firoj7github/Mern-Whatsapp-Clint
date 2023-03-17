import React, { useState } from 'react'
import { Box, Dialog, styled } from '@mui/material'
import MenuHeader from './MenuHeader'
import SearchMenu from './SearchMenu'
import Conversation from './Conversation'

function Menu() {

    const [text, setText] = useState('');
    return (
        <Box>
        <MenuHeader></MenuHeader>
        <SearchMenu setText={setText}/>
        <Conversation text={text}/>
        </Box>
    )
}

export default Menu
