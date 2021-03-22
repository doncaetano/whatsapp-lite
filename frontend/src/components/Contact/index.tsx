import profileImage from '../../assets/images/profile-image-1.png'

import { StyledContactBox } from './styles'

export function Contact() {
  return (
    <StyledContactBox>
      <img src={profileImage} alt="" />
      <div className="message-block">
        <h4 className="profile-name">Name Last Name</h4>
        <p className="message">some test message</p>
      </div>
      <div className="notification-block">
        <p>00:00</p>
        <p>2</p>
      </div>
    </StyledContactBox>
  )
}
