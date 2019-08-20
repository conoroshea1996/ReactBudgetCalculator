import React from 'react'

const Item = ({ expense }) => {

    const { id, charge, amount } = expense

    return (
        <li>
            <div className="info">
                <span className='expense'>{charge}</span>
                <span className='amount'>£{amount}</span>
            </div>
        </li>

    );
}

export default Item
