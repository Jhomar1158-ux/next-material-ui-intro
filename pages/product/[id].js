import { Layout } from '@/components/layouts'
import { Product } from '@/components/ui'
import { getItems } from '@/services/storeService'
import { Box, Typography } from '@mui/material'

export default function ProductPage({productInfo}){

    return (
        <div>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                }}>
            <Typography variant='h3' color='common.black'>My Shop</Typography>
            </Box>
            <Layout>
                <Product item={productInfo}/>
            </Layout>
    </div>
    )
}

export async function getPathsFromIds() {
    const products = await getItems()

    const ids = products.map(((product) => {
        return {
            params: {
                id: (product.id).toString(),
            }
        }
    }))

    return ids
}

export async function getItemData(id){
    const items = await getItems()
    const product = items.find((item) => item.id === id);
    return {
        id,
        data: product,
    };
}

export async function getStaticPaths(){
    let pathsData = await getPathsFromIds()

    return {
        paths: pathsData,
        fallback: false,
    }
}

export async function getStaticProps({params}){
    const id = parseInt(params.id);
    const productInfo = await getItemData(id);
    return {
        props:{
            productInfo
        }
    }

}