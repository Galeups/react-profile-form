import React from 'react';
import ProfileStyled from './ProfileStyled';
import Avatar from '../ui/Avatar/Avatar';
import Card from '../ui/Card/Card';
import SocialNetworkLink, {
  SocialNetworks,
} from '../ui/SocialNetworkLink/SocialNetworkLink';
import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

const Profile: React.FC = () => {
  const socialNetworks: { name: SocialNetworks; url: string }[] = [
    { name: SocialNetworks.TELEGRAM, url: '@xyz' },
    { name: SocialNetworks.GITHUB, url: 'https://github.com/xyz' },
    { name: SocialNetworks.RESUME, url: 'https://resume.io/xyz' },
  ];

  return (
    <Card
      $paddingLeft={24}
      $paddingRight={24}
      $paddingTop={24}
      $paddingBottom={24}
    >
      <ProfileStyled>
        <header className="header">
          <Avatar name="Иван" surname="Иванов" />
          <div className="info">
            <h3 className="name">Иван Иванов</h3>
            <ul className="social-networks">
              {socialNetworks.map((network) => (
                <li className="social-network-item">
                  <SocialNetworkLink name={network.name} url={network.url} />
                </li>
              ))}
            </ul>
          </div>
        </header>
        <section className="body">
          <div className="row">
            <Input placeholder="+7 999 999-99-99" label="Номер телефона" />
          </div>

          <div className="row">
            <Input placeholder="Email" label="Email" />
          </div>
        </section>
        <footer className="footer">
          <Button primary name="Начать" />
        </footer>
      </ProfileStyled>
    </Card>
  );
};

export default Profile;
