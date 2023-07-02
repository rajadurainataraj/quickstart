import x from "../assets/images/x.svg"
import landingImg from "../assets/images/landing-img 1@2x.png"
const CreateOrganization1 = () => {
  return (
    <div className="createOrgContainer">
      <div className="createOrgLeftContainer">
        <div>
          <img src={x} alt="x-img" />
        </div>

        <div>
          <div className="createOrgHeading">
            <div>
              <h3>Create Organisation (Step 1 of 3)</h3>
            </div>
          </div>
          <h3>Let's Start With Basic Details</h3>
        </div>
      </div>
      <div className="createOrgRightContainer">
        <img src={landingImg} alt="landing img" />
      </div>
    </div>
  )
}
export default CreateOrganization1
