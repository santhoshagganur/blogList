// Write your JS code here
import './index.css'
import {Component} from 'react'

class UserInfo extends Component {
  render() {
    return (
      <div className="profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="profile-pic"
        />
        <h1 className="user-name"> Wade Warren </h1>
        <p className="user-designation"> Software developer at UK </p>
      </div>
    )
  }
}

export default UserInfo
