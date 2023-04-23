import { Box } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui'

export const Layout = ({title = 'My shop', children}) => {
    return (
            <Box sx={{ width: '100%'  }}>
                <Head>
                    <title> {title} </title>
                </Head>
                <Navbar/>
                <Box>
                    {children}
                </Box>
            </Box>
    )
}
