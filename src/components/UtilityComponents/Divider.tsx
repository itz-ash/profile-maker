interface Props {
  top?: string
  bottom?: string
}

const Divider = (props: Props) => {
  return (
    <div
      style={{
        marginTop: props.top,
        marginBottom: props.bottom,
      }}
      className="divider"
    ></div>
  )
}

export default Divider
