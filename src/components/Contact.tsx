import styled from 'styled-components'

const StyledContactBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--light-gray-2);

  img {
    display: block;
    max-width: 55px;
    max-height: 55px;
    border-radius: 50%;
    margin-right: 0.5rem;
    margin-left: 0.375rem;
  }

  .message-block {
    width: 100%;

    .profile-name {
      font-family: 'Nunito', Arial, sans-serif;
      font-weight: 700;
    }

    .message {
      font-family: 'Nunito', Arial, sans-serif;
      font-size: 14px;
      letter-spacing: 1.1px;
    }
  }

  .notification-block {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export function Contact() {
  return (
    <StyledContactBox>
      <img src="/images/profile-image-1.png" alt="" />
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
