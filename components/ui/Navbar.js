import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsInputSvideoIcon from '@mui/icons-material/SettingsInputSvideo';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: 1,
                m: 1,
            }}> 
                <Link href={'/'}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        maxWidth: 300,
                        p: 1,
                        m: 1,
                    }}>
                        <IconButton>
                            <SettingsInputSvideoIcon/>
                        </IconButton>
                        <Typography variant='h5' color='common.white'>Logo</Typography>
                    </Box>
                </Link>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: 300,
                    p: 1,
                    m: 1,
                }}>
                    <Typography>Productos</Typography>
                    <IconButton>
                        <ShoppingCartIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
