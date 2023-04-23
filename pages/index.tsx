import { Layout } from '@/componets/layouts'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <Layout title={'My shop Jhomar'}>
      <button>Hola</button>
    </Layout>
  )
}
