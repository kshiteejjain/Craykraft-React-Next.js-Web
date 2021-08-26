import Image from 'next/image'
import footerLogo from '../public/footer-logo.svg'
import Link from 'next/link'



export default function Footer(){
    return(
        <>
            <footer id="Footer">
                <div className="container flex">
                    <div className="col-footer"> <Image src={footerLogo}  alt="Craykraft Pictures" /> 
                        <p>Har du et projekt eller samarbejde, du gerne vil vende med os, eller er du nysgerrig på, at høre mere om hvordan vi kan hjælpe jer, ser vi frem til at høre fra dig.</p>
                    </div>
                    <div className="col-footer"> 
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="#"><a>Hire Production</a></Link></li> 
                            <li><Link href="#"><a>Movie Production</a></Link></li> 
                            <li><Link href="#"><a>Top Directions</a></Link></li> 
                            <li><Link href="#"><a>Versatile Actors</a></Link></li> 
                        </ul>
                    </div>
                    <div className="col-footer"> 
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="#"><a>About Us  </a></Link></li>                 
                            <li><Link href="#"><a>Portfolio</a></Link></li>  
                            <li><Link href="#"><a>Our Team </a></Link></li> 
                            <li><Link href="#"><a>Contact Us</a></Link></li> 
                        </ul>
                    </div>
                    <div className="col-footer"> 
                        <h3>Lets Connect</h3>
                        <ul>
                            <li><Link href="#"><a>Email: info@craycraft.com</a></Link></li> 
                            <li><Link href="#"><a> Phone: +91 1234567890</a></Link></li> 
                            <li><p>Address: 3rd Floor, Veera Desai, Abdheri (w), Mumbai</p></li> 
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                <div className="container flex">
                    <p>Copyrights @ Craykraft Pictures, All Rights Reserved</p>
                    <p>Developed by: <Link href="https://www.behance.net/kshiteejdesigner"><a target="_blank">Kshiteej Jain</a></Link></p>
                </div>
                </div>
            </footer>
        </>
    )
}