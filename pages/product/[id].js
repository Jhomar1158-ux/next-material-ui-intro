import { Layout } from '@/components/layouts'
import { Product } from '@/components/ui'
import { getItems } from '@/services/storeService'
import { Typography } from '@mui/material'

export default function ProductPage({productInfo}){
    console.log('--------------------')
    console.log(productInfo)
    console.log('PRODUCT INFO')
    return (
        <div>
            <Typography variant='h3'>My Shop</Typography>
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
    console.log('------------------PARAMS ------------------')
    console.log(params)
    console.log(params.id)
    console.log('----------------------------------------')

    const productInfo = await getItemData(id);
    return {
        props:{
            productInfo
        }
    }

}