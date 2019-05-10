import React from 'react';
import Icon from 'react-native-vector-icons';

import { Container, Top, Logo, Title } from '~/pages/Main/styles';
import logo from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Takato</Title>
      </Top>
      <Icon name="keyboard-arrow-down" />
    </Container>
  );
}
