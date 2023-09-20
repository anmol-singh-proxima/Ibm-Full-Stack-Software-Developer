
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const setBudget = (budgetValue) => {
        if(budgetValue > 20000) {
            alert(`Cannot increase the Budget! Max is 20000`);
        } else if(budgetValue < totalExpenses) {
            alert(`Cannot decrease the Budget! Min is ${totalExpenses}`);
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budgetValue,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>        
            <form>
                <span>Budget: {currency}</span>
                <input type='number' placeholder={budget} onChange={(event) => setBudget(event.target.value)}/>
            </form>
        </div>
    );
};
export default Budget;