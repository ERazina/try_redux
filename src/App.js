import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {addCustomerAction, removeCustomerAction} from './store/customerReducer';
import {addCashAction, getCashAction} from './store/cashReducer';
import {getManyCustomers} from './asyncActions/customers';


function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (amount) => {
    // dispatcher takes action - object with typw and payload
    dispatch(addCashAction(amount));
  }

  const getCash = (amount) => {
    dispatch(getCashAction(amount));
  }

  const addNewCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const deleteCustomer = (id) => {
    dispatch(removeCustomerAction(id))
  }


  return (
    <div className="App">
      <h1>Total: {cash}</h1>
      <button onClick={() => addCash(Number(prompt('how much you want to add?', 0)))}>Add cash</button>
      <button onClick={() => getCash(Number(prompt('how much you wat to get?', 0)))}>Get cash</button>
      <button onClick={() => addNewCustomer(prompt('Customer name'))}>Add new customer</button>
      <button onClick={() => dispatch(getManyCustomers())}>Get customers from DB</button>
      <h2>Customers:</h2>
      {customers.length !== 0 ? 
        customers.map(customer => <div>{customer.name}<button onClick={() => deleteCustomer(customer.id)}>Remove customer</button></div>)
        : 
          <div>No clients</div>

      }
    </div>);

}

export default App;
