import statusImage from '../../assets/icons/status.svg'
import phoneImage from '../../assets/icons/phone.svg'
import conversationImage from '../../assets/icons/conversation.svg'
import settingsImage from '../../assets/icons/settings.svg'

import { StyledNavBar } from './styles'

export function NavBar() {
  return (
    <StyledNavBar>
      <div className="nav-bar">
        <button type="button">
          <img src={statusImage} alt="status" />
        </button>
        <button type="button">
          <img src={phoneImage} alt="" />
        </button>
        <button type="button">
          <img src={conversationImage} alt="" />
        </button>
        <button type="button">
          <img src={settingsImage} alt="" />
        </button>
      </div>
    </StyledNavBar>
  )
}
