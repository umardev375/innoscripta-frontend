import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import DashboardModule from '../modules/dashboardmodule/DashboardModule'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title> Inscripta| Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DashboardModule />
    </div>
  )
}

export default Home
