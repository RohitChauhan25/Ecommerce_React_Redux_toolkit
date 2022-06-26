import React from 'react'
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Mainbody from '../Components/Mainbody';
import Navbar from '../Components/Navbar';
import Topbar from '../Components/Topbar';


export default function Home() {
  return (
    <>
     <Topbar/>
    <Navbar />
    <Mainbody />
    <Footer />
    </>
  )
}
