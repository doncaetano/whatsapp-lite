import styled from 'styled-components'

export const StyledContactBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--light-gray-2);

  > img {
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
    align-items: flex-end;

    .countBox {
      display: inline-block;
      font-size: 12px;
      background: var(--green);
      border-radius: 42%;
      text-align: center;
      padding: 0 0.3rem;
      min-width: 1.2rem;
      font-weight: 600;
      color: var(--white);
    }
  }
`
