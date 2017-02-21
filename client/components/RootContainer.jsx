'use strict';

import 'styles/main.scss';

import React, { Component } from 'react';
import { render } from 'react-dom';

// COMPONENTS

export default class RootContainer extends Component {
  render() {
    const RootComponent = styled.div`

    `;

    return (
      <RootComponent class="RootComponent">
        <div class="UserContainer">
          <header class="TopMenu">
          </header>
        </div>
      </RootComponent>
    );
  }
}
