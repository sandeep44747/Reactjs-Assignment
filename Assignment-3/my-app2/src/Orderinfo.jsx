import React from 'react';
function Order(){
    return(<div className='order-info'>
        <div className='item'>
            <label className='status'>Status</label>
            <ul>
                <li>In progress</li>
            </ul>
        </div>
        <div className='item'>
            <label className='door'>Door</label>
            <p>Mark</p>
        </div>
        <div className='item'>
            <label className='time'>Time</label>
            <p>10:30 (25-05-2016)</p>
        </div>

    </div>)
}
export default Order;