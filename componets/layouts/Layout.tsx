import Head from 'next/head'
import {FC} from 'react'
import { Navbar } from '../ui/Navbar'


interface Props {
    children?: React.ReactNode
    title: string
}

export const Layout: FC<Props> = ({children, title}) => {
    return (
        <>
            <Head>
                <title> { title || 'My Shop'} </title>
                <meta name='author' content='Jhomar Astuyauri'/>
                <meta name='description' content={`Tienda de productos | ${title}`}/>
                <meta name='keywords' content={`${title}, Productos, producto, item, items, tienda, e-commerce, marketplace`}/>
            </Head>
            <Navbar/>
            <main>
                {children}
            </main>
        </>
    )
}
