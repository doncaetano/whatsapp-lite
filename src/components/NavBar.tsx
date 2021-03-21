import '../styles/nav-bar.scss'

export function NavBar() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <a href="javascript:void(0)">
          <img src="./icons/status.svg" alt="status" />
        </a>
        <a href="javascript:void(0)">
          <img src="./icons/phone.svg" alt="" />
        </a>
        <a href="javascript:void(0)">
          <img src="./icons/conversation.svg" alt="" />
        </a>
        <a href="javascript:void(0)">
          <img src="./icons/settings.svg" alt="" />
        </a>
      </div>
    </div>
  )
}
