import React from 'react'

class InputContext extends React.Component {
  state = {value:''}
  onChange = (value) =>
    this.setState({value})
  componentDidMount = () =>
    this.inputref.focus()
  onKeyPress = (key) => {
    if (key == "Enter") {
      this.props.onInput(this.state.value)
    }
  }
  render () {
    return <>
      <span style={{
        whiteSpace: "pre",
        background: "lightgrey",
        padding: "0 2px"
      }}>{this.state.value}</span>
      <textarea style={{
        opacity: "0",
        position: "absolute",
        pointerEvents: "none"
      }}
      value={this.state.value}
      ref={ref => this.inputref = ref}
      onKeyPress={(e) => this.onKeyPress(e.key)}
      onChange={(e)=>this.onChange(e.target.value)} />
    </>
  }
}

export default InputContext
