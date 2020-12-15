import Head from 'next/head'
import Store from './../app/store'
import { FoodList } from './../app/components/modules'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Fridge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Store>
        <FoodList />
      </Store>
    </>
  )
}
