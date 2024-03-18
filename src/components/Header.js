import { ICON_URL } from "../utils/Links"   


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src= {ICON_URL} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li >Risks and Solutions</li>
                    <li >Explore Layers</li>
                    <li >Data</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;