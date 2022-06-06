import logo from '../images/logo.svg';
import bg from '../images/hero-mobile.jpg';
const Hero = () => {
    return ( 
        <div className='hero-container'>
            <img src={logo} alt="logo" className='logo' />
            <div className='img-container'>
                <img src={bg} alt="bg-mobile" className='bg-img-mobile' />
            </div>
        </div>
     );
}
 
export default Hero;