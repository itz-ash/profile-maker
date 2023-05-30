import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actionCreators from "../../state/action-creators"

const ChangeAboutMe = () => {
  const dispatch = useDispatch()
  const { changeAboutMe } = bindActionCreators(actionCreators, dispatch)

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    changeAboutMe(inputValue)
    setInputValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Change About Me</button>
      </form>
      <p></p>
    </div>
  )
}

export default ChangeAboutMe
