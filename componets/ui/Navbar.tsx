import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { useRouter } from 'next/router';
export const Navbar = () => {
    const router = useRouter();

    const onClick = () => {
        router.push('/');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Typography variant='h4' color='common.black' sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background:'#fff',
                        p:2,
                }}>My Shop</Typography>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <Box onClick={onClick} sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        maxWidth: 300,
                        p: 1,
                        m: 1,}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <FitbitIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            LOGO
                        </Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        maxWidth: 300,
                        p: 1,
                        m: 1,}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <ShoppingCartIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Productos
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
