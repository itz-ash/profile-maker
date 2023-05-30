import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import actionCreators from "../../state/action-creators"

const ChangeDisplayName = () => {
  const dispatch = useDispatch()
  const { changeDisplayName } = bindActionCreators(actionCreators, dispatch)

  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    changeDisplayName(inputValue)
    setInputValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Change displayname</button>
      </form>
      <p></p>
    </div>
  )
}

export default ChangeDisplayName
