import airbnb_logo from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb_logo} className="nav--logo" />
        </nav>
    )
}