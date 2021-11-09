import Head from 'next/head'

import Header from '../components/header'
import Feed from '../components/feed'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      
      < Header/>
      <Feed />
      <Modal />
       </div>
  )
}
