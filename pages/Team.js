import Head from 'next/head'
import Image from 'next/image'
import namash from '../public/namash-bhardwag.jpg' 
import dhruv from '../public/dhruv-jha.jpg' 
import sumit from '../public/sumit-kaushik.jpg' 
import fbIcon from '../public/fb.svg' 
import instaIcon from '../public/insta.svg' 
import youtubeIcon from '../public/youtube.svg' 
import imdbIcon from '../public/imdb.svg' 
import Link from 'next/link'
import { useEffect, useState } from 'react'


const Team = () => {
    // const [data, setData] = useState();
    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await response.json();
    //         setData(data);
    //         console.log(data);
    //         } catch (error) {
    //         console.log("error", error);
    //         }
    // };

    // useEffect(() => {
    //     fetchData()
    // }, [])


    
    return(
        <>
            <Head>
                <title>CrayKraft Pictures</title>
            </Head>
            <section className="team" id="Team">
                <div className="container">
                    <h2>Craykraft’s Team</h2>
                    <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec <br />consequata congue id sem. Maece nasma lesuada faucibus finibus. Donec</p>
                    
                    <ul className="flex">
                        <li>
                            <Image src={namash}  alt="Namash Bharwaj" placeholder="blur" />
                            <h3>Namash Bhardwaj</h3>
                            <p>Film director</p>
                            <span className="social-profile">
                                <Link href="#"><a> <Image src={fbIcon} alt="Facebook" /> </a></Link>
                                <Link href="#"><a> <Image src={instaIcon} alt="Instagram" /> </a></Link>
                                <Link href="#"><a> <Image src={youtubeIcon} alt="Youtube" /> </a></Link>
                                <Link href="#"><a> <Image src={imdbIcon} alt="IMDB" /> </a></Link>
                            </span>
                        </li>
                        <li>
                            <Image src={dhruv}  alt="Dhruv Jha" placeholder="blur" />
                            <h3>Dhruv jha</h3>
                            <p>Casting | Actor</p>
                            <span className="social-profile">
                                <Link href="#"><a> <Image src={fbIcon} alt="Facebook" /> </a></Link>
                                <Link href="#"><a> <Image src={instaIcon} alt="Instagram" /> </a></Link>
                                <Link href="#"><a> <Image src={youtubeIcon} alt="Youtube" /> </a></Link>
                                <Link href="#"><a> <Image src={imdbIcon} alt="IMDB" /> </a></Link>
                            </span>
                        </li>
                        <li>
                            <Image src={sumit} alt="Sumit Kaushik" placeholder="blur" />
                            <h3>Sumit Kaushik</h3>
                            <p>Producer</p>
                            <span className="social-profile">
                                <Link href="#"><a> <Image src={fbIcon} alt="Facebook" /> </a></Link>
                                <Link href="#"><a> <Image src={instaIcon} alt="Instagram" /> </a></Link>
                                <Link href="#"><a> <Image src={youtubeIcon} alt="Youtube" /> </a></Link>
                                <Link href="#"><a> <Image src={imdbIcon} alt="IMDB" /> </a></Link>
                            </span>
                        </li>
                    </ul>

                    
                </div>
            </section>
        </>
    )
}

export default Team;
