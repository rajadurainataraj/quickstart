import { StyledHeadr } from "../styles/Header.Style"
import Vector from "../assets/images/Vector.png"
import text from "../assets/images/text.png"
import man from "../assets/images/man.jpg"
import {
  MdNotificationsNone,
  MdSettings,
  MdHelpOutline,
  MdKeyboardArrowDown,
} from "react-icons/md"
const Header = () => {
  return (
    <StyledHeadr>
      <div>
        <img src={Vector} alt="logo" className="logo" />
        <img src={text} alt="text" />
      </div>
      <div className="iconsContainer">
        <MdNotificationsNone className="icons" />
        <MdSettings className="icons" />
        <MdHelpOutline className="icons" />
        <div className="profileContainer">
          <img src={man} alt="profile" className="profile" />
          <MdKeyboardArrowDown className="icons" />
        </div>
      </div>
    </StyledHeadr>
  )
}
export default Header
