import React from "react";

const proData={
    prodProfile:"https://www.w3schools.com/howto/img_avatar.png",
    prodName:"Boltaart Bosbessen",
    prodDeatil:"Overheerlijke Boltart uit de keuken van de Bijenkorf."
}

function Pdata(){
    return(<div className="product-list">
        <div className="item2">
        <input type='checkbox'/>
        </div>
        <div className="item2">
            <img src={proData.prodProfile}/>
        </div>
        <div className="item2">
            <div id="bolt">
            <h3>{proData.prodName}</h3>
            <p>{proData.prodDeatil}</p>
            </div>
        </div>
    </div>)
}
export default Pdata;