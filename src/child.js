import React, { useContext, useState } from 'react';
import {TransactionContext} from './transContext';

const Child = () => {

    let {transactions, addTransaction, deleteTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);



       const handleAddition =(event)=>{
           event.preventDefault();
           if(Number(newAmount)===0){
               alert("Please enter correct value");
               return false;
           }
           addTransaction({
               amount: Number(newAmount),
               desc: newDesc,
               id: transactions.length
           });

           setDesc("");
           setAmount(0);
       } 

       const getIncome = ()=> {
           let income= 0;
          for(var i = 0; i < transactions.length; i++){
              if(transactions[i].amount > 0)
              income += transactions[i].amount
          }
          return income;
       }
       const getExpense = ()=> {
           let expense = 0;
           for (var i = 0; i < transactions.length; i++){
            if(transactions[i].amount < 0)
            expense += transactions[i].amount
           }
           return expense;
       }

    return (
        <div className="container">
            <h1 className="text-align">Expense Tracker</h1>
            <h3>Your Balance <br />PKR: {getIncome()+getExpense()}</h3>
            <div className="expense-container">
                <h3>Income <br /> PKR: {getIncome()} </h3>
                <h3>Expense <br />PKR: {getExpense()}</h3>
            </div>
            <h3>History</h3>
            <h5>click on transaction to delete.</h5>
            <hr />
              <ul className="transaction-list">
                  {transactions.map((transObj, ind)=>{
                      return (<li key={ind} onClick={()=>deleteTransaction({id: transObj.id})}>
                      <span>{transObj.desc}</span>
                      <span>PKR: {transObj.amount}</span>
                            </li>        
                      )
                  })}
              
               </ul> 


            <h3>Add New Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>Description <br />
                <input type="text"
                 value={newDesc}
                  placeholder="Description"
                   onChange={(e)=> setDesc(e.target.value)} required></input>
                </label>
                 <br />
                <label>Amount <br />
                <input type="number" 
                value={newAmount}
                 placeholder="Enter Amount"
                  onChange={(e)=> setAmount(e.target.value)} required></input>
                </label>
                 <br />
                 
                <input type="submit" value="Add Transaction"></input>
            </form>

        </div>
    )
}

export default Child;