import styled from 'styled-components'

const StyledNavBar = styled.div`
  width: 100%;
  align-self: flex-end;
  margin: 1.25rem 0 2.875rem 0;

  .nav-bar {
    display: flex;
    justify-content: space-around;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`

export function NavBar() {
  return (
    <StyledNavBar>
      <div className="nav-bar">
        <button type="button">
          <img src="./icons/status.svg" alt="status" />
        </button>
        <button type="button">
          <img src="./icons/phone.svg" alt="" />
        </button>
        <button type="button">
          <img src="./icons/conversation.svg" alt="" />
        </button>
        <button type="button">
          <img src="./icons/settings.svg" alt="" />
        </button>
      </div>
    </StyledNavBar>
  )
}
