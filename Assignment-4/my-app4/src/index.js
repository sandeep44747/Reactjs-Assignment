import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Postview from "./Postview"

ReactDom.render(<>
  <Header/>
  <Postview/>
</>,document.getElementById('root'))