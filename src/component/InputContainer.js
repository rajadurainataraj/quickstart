const InputContainer = ({ label }) => {
  return (
    <div className="inputContainer">
      <form>
        <label>{label}</label>
        <input placeholder={`Enter Your ${label}`} />
      </form>
    </div>
  )
}
export default InputContainer
