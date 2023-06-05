import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actionCreators from "../src/state/action-creators"

const ChangeUserName = () => {
  const dispatch = useDispatch()
  const { changeUserName } = bindActionCreators(actionCreators, dispatch)

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    changeUserName(inputValue)
    setInputValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Change UserName</button>
      </form>
      <p></p>
    </div>
  )
}

export default ChangeUserName
