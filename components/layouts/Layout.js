import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui'

export const Layout = ({title = 'My shop', children}) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title> {title} </title>
            </Head>
            <Navbar/>
            <Box sx={{padding: '10px 20px', display: 'flex',  flexDirection:"row"}}>
                {children}
            </Box>
        </Box>
    )
}
