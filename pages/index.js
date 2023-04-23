
import { Layout } from '@/components/layouts'
import MediaCard from '@/components/ui/Card'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant='h3'>My Shop</Typography>
      <Layout>
        {data ? (
          <ul>
            {data.map((item) => (
              <MediaCard
              key={item.id}
              id = {item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              />
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </Layout>
    </div>
  )
}
