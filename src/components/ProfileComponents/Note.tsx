interface Props {
  className?: string
}

const Note = (props: Props) => {
  return (
    <>
      <input
        className={props.className}
        type="text"
        name="name"
        placeholder="click to add note"
        autoComplete="off"
        // onFocus={handleFocus}
      ></input>
    </>
  )
}

export default Note
