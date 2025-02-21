import React from 'react'
import Navbar from '@/components/Navbar'
import Tabs from '@/components/Tabs'
import Footer from '@/components/Footer'
const page = ({params }) => {
  return ( 
  <>
      <Navbar />
      <Tabs />
 {params.slug} 
    <Footer/>
    </>
  )
}

export default page