import React from "react";
import ReactDom from "react-dom";
import Mydata from './Customerinfo';
import Order from './Orderinfo';
import Pdata from './Product';
import "./index.css"


ReactDom.render(<>
<div className="main-container">
{/* <nav id="Navbar">
<h1>Alan ford</h1>
<p>00005152</p>
</nav>
<button>Print</button> */}

<Mydata/>
<Order/>
<Pdata/>
</div>
</>,document.getElementById('root'));