import React from 'react';
import ProvedorAutenticado from './ProvedorDeAutentificacao';
import Rotas from './routes';
import 'toastr/build/toastr.min.js';
import 'bootswatch/dist/flatly/bootstrap.css';
import './custom.css';
import 'toastr/build/toastr.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component {
  render() {
    document.title = "Aurum Investing";
    return (
      <ProvedorAutenticado>
        <Rotas />
      </ProvedorAutenticado>
    )
  }
}

export default App;
