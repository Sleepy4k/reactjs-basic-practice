import React from "react"

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Profile;