import React from 'react';

import Feed from '../Feed'

import { 
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,  
    EditButton, } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>
          
                <h1>James Santos</h1>
                <h2>@JamesSantos</h2>

                <p>
                    Gosto de pão  <a  href="https://youtube.com/pao">@Pães</a>
                </p>

                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo, Brasil
                    </li>
                </ul>
                <ul>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 27 de agosto de 2007
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>200</strong>
                    </span>
                    <span>
                        <strong>257 </strong> seguidores
                    </span>
                </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;