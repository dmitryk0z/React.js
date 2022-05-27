import react_logo from '../images/react-logo.png';

export default function Header() {
    return (
        <header className='header'>
            <img src={react_logo} alt="React Logo" className='header--logo'/>
            <h3 className='header--title'>ReactFacts</h3>
            <h4 className='header--subtitle'>React Course - Project 1</h4>
        </header>
    )
}