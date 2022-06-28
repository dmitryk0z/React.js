export default function Header() {
    return (
        <header>
            <div className="header-content">
                <img src={require(`../images/troll-face.png`)} className="header-content-logo" />
                <span className="header-content-title">Meme Generator</span>
            </div>
        </header>
    )
}