import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actionCreators from "../src/state/action-creators"

const ChangeUserState = () => {
  const dispatch = useDispatch()
  const { changeUserState } = bindActionCreators(actionCreators, dispatch)

  const [inputValue, setInputValue] = useState("online")

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    changeUserState(inputValue)
    setInputValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Change userState</button>
      </form>
      <p></p>
    </div>
  )
}

export default ChangeUserState
