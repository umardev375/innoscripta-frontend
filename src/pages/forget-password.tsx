import Head from 'next/head'
import React from 'react'
import ForgetPasswordModule from '../modules/forgetpasswordmodule/forgetpassword'

const forget = () => {
  return (
    <>
      <Head>
        <title>Match Heroes | Forget password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ForgetPasswordModule />
    </>
  )
}

export default forget