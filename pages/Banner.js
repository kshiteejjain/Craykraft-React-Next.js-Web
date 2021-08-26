import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import chosenFew from '../public/chosen-few.png'


export default function Banner({showModal}){
    return(
        <>
            <Head>
                <title>CrayKraft Pictures</title>
            </Head>
            <section className="banner" id="Banner">
                <div className="container flex">
                    <div className="left">
                        <h2>We’re Transforming The Real life into The Reel Life</h2>
                        <Link href="#"><a className="btn btn-primary" onClick={showModal}>PLAY VIDEO</a></Link>
                        <Link href="#Footer"><a className="btn btn-secondary">Contact Us</a></Link>
                    </div>
                    <div className="right">
                        <Image src={chosenFew} alt="Chosen Few" placeholder="blur" />
                    </div>
                </div>
            </section>
        </>
    )
}