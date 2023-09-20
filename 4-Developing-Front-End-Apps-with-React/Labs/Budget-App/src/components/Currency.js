
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const setCurrency = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    return (       
        <form>
            <select className="custom-select alert alert-success" id="currencySelect" onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue>Currency (£ Pound)</option>
                <option value="₹" name="rupee">₹ Rupee</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
            </select>
        </form>
    );
};
export default Currency;




