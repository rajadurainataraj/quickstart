import x from "../assets/images/x.svg"
import landingImg from "../assets/images/landing-img 1@2x.png"
import InputContainer from "./InputContainer"
import uploadImg from "../assets/images/upload.svg"
const CreateOrganization1 = ({ stepCount, heading }) => {
  return (
    <div className="createOrgContainer">
      <div className="createOrgLeftContainer">
        <div>
          <img src={x} alt="x-img" className="xImg" />
        </div>

        <div className="createOrgSubContainer">
          <div className="createOrgHeading">
            <div>
              <h3>Create Organisation (Step {stepCount} of 3)</h3>
            </div>
          </div>

          <div className="createOrgHeadingH2">
            <h2>{heading}</h2>
          </div>
          {stepCount === "1" && (
            <>
              <InputContainer label={"Organization Name"} />

              <InputContainer label={"Email Address"} />
              <InputContainer label={"Phone Number"} />
            </>
          )}
          {stepCount === "2" && (
            <>
              <InputContainer label={"Portal Display Name"} />
              <div className="uploadImg">
                <h4>Upload your logo</h4>
                <img src={uploadImg} alt="upload img" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
export default CreateOrganization1
