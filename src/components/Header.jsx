import '../css/header.css'; 
import coffePic from '../images/cof.webp';
import meal from '../images/meal.jpg'

const Navbar= () =>{
    return(
        <nav>
            <div className='logo'>
                <img src={coffePic} alt="coffe picture" width={100} height={100} />
            </div>
            <ul>
                <li><a href="#one">Header link One</a></li>
                <li><a href="#two">Header link Two</a></li>
                <li><a href="#three">Header link Three</a></li>
            </ul>
        </nav>
    )
}

const Intro = () =>{
    return (
        <div className="intro">
            <div className="left">
                <h1>This website is Awasome</h1>
                <p>This website has some subtext that goes here under the main title. it's a smaller font and the color is lower contras</p>
                <button>Sign up</button>
            </div>
            <div className="right">
                <img src={meal} alt="meal" width={200} height={200}/>
            </div>
        </div>
    )
}

const Header = () =>{
    return (
        <div className="header">
            <Navbar />
            <Intro />
        </div>
    )
}

export default Header

