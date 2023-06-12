import React from 'react';
import { ReactComponent as Folder } from '../../assets/icons/folder.svg';
import SocialNetworkLinkStyled from './SocialNetworkLinkStyled';

export type SocialNetworkLinkProps = {
  name: string;
  url: string;
};

const SocialNetworkLink: React.FC<SocialNetworkLinkProps> = ({ name, url }) => {
  console.log(url);
  return (
    <SocialNetworkLinkStyled>
      <Folder className="icon" />
      <a className="link" href={url} target="_blank" rel="noreferrer">
        {name}
      </a>
    </SocialNetworkLinkStyled>
  );
};

export default SocialNetworkLink;
