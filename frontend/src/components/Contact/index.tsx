import profileImage from '../../assets/images/profile-image-1.png'
import doubleConfirmedIcon from '../../assets/icons/double-confirmed.svg'

import { StyledContactBox } from './styles'

interface Contact {
  name: string
  message: string
  countUnreadMessages: number
  timeLastMessage: string
}

export function Contact({
  name,
  message,
  countUnreadMessages,
  timeLastMessage
}: Contact) {
  return (
    <StyledContactBox>
      <img src={profileImage} alt="" />
      <div className="message-block">
        <h4 className="profile-name">{name}</h4>
        <p className="message">{message}</p>
      </div>
      <div className="notification-block">
        <p>{timeLastMessage}</p>
        {countUnreadMessages === 0 ? (
          <img src={doubleConfirmedIcon} alt="Double confirmed" />
        ) : (
          <span className="countBox">{countUnreadMessages}</span>
        )}
      </div>
    </StyledContactBox>
  )
}
