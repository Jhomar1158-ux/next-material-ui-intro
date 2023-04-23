import { itemApi } from '@/api'
import { Layout } from '@/componets/layouts'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';

export default function ProductPage({item}) {

    return (
        <Layout title='Producto'>
            <Card sx={{ m:2 , display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        p: 1,
                    }} 
                    key={item.id}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="500"
                image={item.image}
                />
                <Box  sx={{ display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">{item.price}</Button>
                        <Button size="small" disabled>Add to cart!</Button>
                    </CardActions>
                </Box>
            </Card>
        </Layout>
    )
}

export async function getPathsFromIds() {
    const {data} = await itemApi.get('')
    const ids = data.map(((product) => {
        return {
            params: {
                id: (product.id).toString(),
            }
        }
    }))

    return ids
}

export const getStaticPaths: GetStaticPaths = async (context) => {
    let pathsData = await getPathsFromIds()
    return {
        paths: pathsData,
        fallback: false, 
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const id = params?.id
    const {data} = await itemApi.get(`/${id}`)
    return {
        props: {
            item: data
        }
    }
}