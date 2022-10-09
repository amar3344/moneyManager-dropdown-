import {Component} from 'react'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManger extends Component {
  state = {income: 0, type: transactionTypeOptions}

  getMoneyDetails = () => {
    const {income} = this.state
    return <MoneyDetails incomeDetails={income} />
  }

  getTransactionsList = () => {
    const {income, type} = this.state
    return (
      <TransactionItem transactionDetails={income} transactionType={type} />
    )
  }

  render() {
    const {type} = this.state
    return (
      <div className="container">
        <div className="main-container">
          <div className="name-card-container">
            <h1 className="name-text">Hi,Richard</h1>
            <p className="welcome-text">
              Welcome back to your{' '}
              <span className="span-element">Money Manager</span>
            </p>
          </div>
          <ul className="money-details-container">{this.getMoneyDetails()}</ul>
          <div className="form-history-container">
            <form className="form-control" onSubmit={this.getFormTransaction}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <div className="label-container">
                <label htmlFor="title" className="labels-text">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="input-elements"
                />
              </div>
              <div className="label-container">
                <label htmlFor="amount" className="labels-text">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  placeholder="Amount"
                  className="input-elements"
                />
              </div>
              <div className="label-container">
                <label className="labels-text" htmlFor="type">
                  Type
                </label>
                <select id="type" className="input-elements">
                  <option value="Income">Income</option>
                  <option value="Expenses">Expenses</option>
                </select>
              </div>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="history-container">
              <h1 className="history-heading">History</h1>
              <div className="title-amount-type-card">
                <div className="heading-container">
                  <h1 className="headings">Title</h1>
                  <h1 className="headings">Amount</h1>
                  <h1 className="headings">Type</h1>
                </div>
                <hr className="horizontal-line" />
              </div>
              <ul className="transactions-container">
                {this.getTransactionsList()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManger
