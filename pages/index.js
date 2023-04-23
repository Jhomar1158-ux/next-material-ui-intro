
import { Layout } from '@/components/layouts'
import MediaCard from '@/components/ui/Card'
import { getItems } from '@/services/storeService'
import { Box, Typography} from '@mui/material'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function HomePage({items}) {
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
        {items ? (
          <Box sx={{
            padding: '20px', 
            margin: '0 0 15px 0',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%' 
        }}>
            {items.map((item) => (
              (<MediaCard
              key={item.id}
              id = {item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              />)
            ))}
          </Box>
        ) : (
          <p>Loading...</p>
        )}
      </Layout>
    </div>
  )
}


export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}