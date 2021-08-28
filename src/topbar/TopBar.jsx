import "./topbar.css"
// import banner from "../Home_stuffs/Banner/Banner_image.png";
import logo from "../Home_stuffs/Banner/Logo_banner.png";

export default function TopBar(){
    return(
        <div className="topBanner">
            {/* <img className="bannerImage" src={banner} alt="99Slices"/> */}
            <div className="top">
                <div className="topLeft">
                    <img className="LogoImage" src={logo} alt="99Slices"/>
                </div>
                <div className="topRight">
                    <ul className="topList">
                        <li className="topListItem">HOME</li>
                        <li className="topListItem">ABOUT US</li>
                        <li className="topListItem">CONTACT US</li>
                        <li className="topListItem">SERVICES</li>
                        <li className="topListItem">PROJECTS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}