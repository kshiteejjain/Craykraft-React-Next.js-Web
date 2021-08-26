import Head from 'next/head'
import Image from 'next/image'
import hireProd from '../public/hire-production.svg'
import movieProd from '../public/movie-production.svg'
import topDirectors from '../public/top-directors.svg'
import actors from '../public/actors.svg'
import Link from 'next/link'



export default function Expertise(){
    return(
        <>
            <Head>
                <title>Our Expertise - CrayKraft Pictures</title>
            </Head>
            <section className="expertise" id="Expertise">
                <div className="container">
                    <h2>Our Expertise in Films</h2>
                    <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor, imperdiet nec <br />consequata congue id sem. Maece nasma lesuada faucibus finibus. Donec</p>
                    <ul className="flex">
                        <li>
                            <Image src={hireProd} alt="Hire Production" />
                            <h3>Hire Production</h3>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </li>
                        <li>
                            <Image src={movieProd} alt="Movie Production" />
                            <h3>Movie Production</h3>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </li>
                        <li>
                            <Image src={topDirectors} alt="Top Directors" />
                            <h3>Top Directions</h3>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </li>
                        <li>
                            <Image src={actors} alt="Versatile Actors" />
                            <h3>Versatile Actors</h3>
                            <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        </li>
                    </ul>
                    <Link href="#"><a className="btn btn-primary">Contact Us</a></Link>
                </div>
            </section>
        </>
    )
}