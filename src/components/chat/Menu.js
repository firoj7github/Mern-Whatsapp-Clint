import React from 'react'
import { Box, Dialog, styled } from '@mui/material'
import MenuHeader from './MenuHeader'
import SearchMenu from './SearchMenu'

function Menu() {
    return (
        <Box>
        <MenuHeader></MenuHeader>
        <SearchMenu></SearchMenu>
        </Box>
    )
}

export default Menu
