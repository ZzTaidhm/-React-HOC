import React, { Component } from 'react';

import ProxyHoc from './components/proxyCom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProxyHoc paramsa={123} />
        </header>
      </div>
    );
  }
}

export default App;
