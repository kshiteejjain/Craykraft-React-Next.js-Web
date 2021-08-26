import Head from 'next/head'
import Image from 'next/image'
import AboutImg from '../public/about-img.png'



export default function About(){
    return(
        <>
            <Head>
                <title>About Us - CrayKraft Pictures</title>
            </Head>
            <section className="about" id="About">
                <div className="container flex">
                    <div className="left">
                        <h2 className="txt-green">ABOUT COMPANY</h2>
                        <h3>WE ARE A CREATIVE VIDEO <br /> PRODUCTION COMPANY</h3>
                        <h4>WHY CHOOSE US</h4>
                        <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequata congue id sem. Maece nasma lesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies lectus orci congue magna dictum aliquet.</p>
                        <h4>HOW WE WORK</h4>
                        <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec consequata congue id sem. Maece nasma lesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper. Phasellus ullamcorper odio vitae eleifend ultricies lectus orci congue magna dictum aliquet.</p>
                    </div>
                    <div className="right">
                        <Image src={AboutImg} alt="CrayKraft Pictures" placeholder="blur" />
                    </div>
                </div>
            </section>
        </>
    )
}