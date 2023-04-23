import { Layout } from '@/componets/layouts'
import { Inter } from 'next/font/google'
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { itemApi } from '@/api';
import { Item } from '@/interfaces';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const inter = Inter({ subsets: ['latin'] })
import Box from '@mui/material/Box';
import { ItemCard } from '@/componets/products';

export default function HomePage({products}) {

  return (
    <Layout title={'My shop Jhomar'}>
      <Box sx={{
          display: 'flex',
          flexWrap:'wrap',
          justifyContent: 'space-between',
          p: 1,
          m: 1,
        }}>
        {
          products.map((item)=>(
            <ItemCard item={item}/>
          ))
        }
      </Box>
    
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const {data} = await itemApi.get('')
  console.log(data)

  const products: Item[] = data.map( (item, i) => ({
    ...item,
    id: i+1,
  }))

  return {
    props: {
      products: products
    }, // will be passed to the page component as props
  }
}