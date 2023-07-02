import landingImg from "../assets/images/landing-img 1.png"
import learnMore from "../assets/images/learnmore.png"
import exploreImg from "../assets/images/explore-img 1.png"
const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="organizationContainer">
        <div className="organizationText">
          <h1>Welcome, Jim Carry</h1>
          <p>
            Accounting Software for Documents Clearing & <br />
            Forwading Establishments
          </p>
          <button className="organizationBtn">Add Organization</button>
        </div>
        <div className="organizationImg">
          <img src={landingImg} alt="landing Img" />
        </div>
      </div>

      <div className="exploreContainer">
        <div>
          <h3>Exlpore MAkepay</h3>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut lab
          </p>
          <div className="learnMoreContainer">
            <p>Learn More</p>
            <img src={learnMore} alt="learn more" className="learnMoreImg" />
          </div>
        </div>
        <div>
          <img src={exploreImg} alt="explore-img" className="exploreImg" />
        </div>
      </div>
    </div>
  )
}
export default Body
