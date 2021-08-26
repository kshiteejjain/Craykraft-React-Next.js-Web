import Head from 'next/head'
import Banner from './Banner'
import About from './About'
import Expertise from './Expertise'
import Portfolio from './Portfolio'
import Team from './Team'
import { useState } from 'react'



export default function Home() {
  const [modal, showModal] = useState(true);

  const playVideo = () => {
    showModal(true);
  }
  const closeModal = () =>{
    showModal(!showModal);
  }


  return (
    <>
      <Head>
        <title>CrayKraft Pictures</title>
        <meta name="description" content="CrayKraft Pictures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Banner showModal={playVideo} />
        <About />
        <Expertise />
        <Portfolio />
        <Team />
        
        {modal ? (
        <>
        <div className="overlay"></div>
        <div className="full-modal">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
            <button type="button" className="close" aria-label="Close" onClick={closeModal}><span aria-hidden="true">×</span></button>
          </div>
          <iframe src='https://www.youtube.com/embed/54X5orue5vQ' frameBorder='0'allow='autoplay; encrypted-media' allowFullScreen title='video'/>
        </div>
        </>
      ) : (
        null
      )}


        
      </div>
      </>
  )
}
