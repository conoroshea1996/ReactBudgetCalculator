import React from 'react'
import Item from './ExpenseItem';
import { MdDeleteForever } from 'react-icons/md'
import { IconContext } from 'react-icons'

const ExpenseList = ({ expenses }) => {
    return (
        <>
            <ul className="list">
                {expenses.map((expense) => {
                    return <Item key={expense.id} expense={expense} />;
                })}
            </ul>
            {expenses.length > 0 && <button className='btn'>

                clear expenses
                <IconContext.Provider value={{ size: '1.5rem' }}>
                    < MdDeleteForever />
                </IconContext.Provider>
            </button>}
        </>
    )
}

export default ExpenseList
