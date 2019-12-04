import React from 'react';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <h1>
            Knapsack Problem
          </h1>
        </nav>

        <aside>
          <span>
            por: Bruno De Masi
          </span>
        </aside>
      </Content>
    </Container>
  );
}
