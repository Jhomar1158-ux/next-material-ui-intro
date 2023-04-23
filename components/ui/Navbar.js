import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton>
                    <SettingsInputSvideoIcon/>
                </IconButton>
                <Typography>Productos</Typography>
                <IconButton>
                    <ShoppingCartIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
