import Head from 'next/head'
import Image from 'next/image'
import portfolio1 from '../public/portfolio1.jpg'
import portfolio2 from '../public/portfolio2.jpg'
import portfolio3 from '../public/portfolio3.jpg'
import playIcon from '../public/play.svg'

import Link from 'next/link'



export default function Portfolio(){
    return(
        <>
            <Head>
                <title>Portfolio - CrayKraft Pictures</title>
            </Head>
            <section className="portfolio" id="Portfolio">
                <div className="container">
                    <h2>Awards Winning Latest Work</h2>
                    <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec <br />consequata congue id sem. Maece nasma lesuada faucibus finibus. Donec</p>
                   <div className="left">
                       <div className="portfolio-list">
                            <Image src={portfolio1} alt="CASIOTONE - CASIO" placeholder="blur" />
                            <div className="portfolio-detail">
                                <Image src={playIcon} alt="Play" className="play"  />
                                <h3>CASIOTONE - CASIO</h3>
                            </div>
                       </div>
                       <div className="portfolio-list">
                            <Image src={portfolio2} alt="Mulk - Official Trailer" placeholder="blur" />
                            <div className="portfolio-detail">
                                <Image src={playIcon} alt="Play" className="play" />
                                <h3>Mulk - Official Trailer</h3>
                            </div>
                       </div>
                   </div>
                   <div className="left">
                        <div className="portfolio-list">
                            <Image src={portfolio3} alt="Manjha Song | Smile Foundation" placeholder="blur" />
                            <div className="portfolio-detail">
                                <Image src={playIcon} alt="Play" className="play" />
                                <h3>Manjha Song | Smile Foundation</h3>
                            </div>
                       </div>
                   </div>
                    <Link href="#"><a className="btn btn-primary">Reach Out for More Work</a></Link>
                </div>
            </section>
        </>
    )
}