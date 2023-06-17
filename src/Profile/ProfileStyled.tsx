import styled from 'styled-components';

const ProfileStyled = styled.div`
  .header,
  .info,
  .body,
  .footer,
  .social-networks {
    display: flex;
  }

  .header {
    border-bottom: 1px solid var(--border-color-secondary);
    padding-bottom: 24px;
    align-items: center;
  }

  .name {
    margin-bottom: 10px;
  }

  .info {
    margin-left: 24px;
    flex-direction: column;
  }

  .social-network-item {
    font-size: 0.75rem;
  }

  .social-network-item + .social-network-item {
    margin-left: 18px;
  }

  .body {
    flex-direction: column;
    margin: 24px 0 48px 0;
    max-width: 400px;
  }

  .row + .row {
    margin-top: 26px;
  }
`;

export default ProfileStyled;
