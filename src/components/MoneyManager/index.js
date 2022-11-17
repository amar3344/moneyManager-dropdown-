import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

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
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  getTransactionsList = () => {
    const {income, type} = this.state
    return (
      <TransactionItem transactionDetails={income} transactionType={type} />
    )
  }

  addTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )

    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  deleteTransaction = () => {
    const {transactionList} = this.state
    const {id} = transactionList
    const updatedTransactionList = transactionList.filter(
      eachTransaction => id !== eachTransaction.id,
    )

    this.setState({
      transactionList: updatedTransactionList,
    })
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getTransactionTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  getTransactionAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  getOnChangeButtonType = event => {
    this.setState({optionId: event.target.value})
  }

  render() {
    const {optionId, titleInput, amountInput, transactionList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()
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
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="form-history-container">
            <form className="form-control" onSubmit={this.addTransaction}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <div className="label-container">
                <label htmlFor="title" className="labels-text">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={titleInput}
                  className="input-elements"
                  onChange={this.getTransactionTitle}
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
                  value={amountInput}
                  className="input-elements"
                  onChange={this.getTransactionAmount}
                />
              </div>
              <div className="label-container">
                <label className="labels-text" htmlFor="type">
                  Type
                </label>
                <select
                  id="type"
                  className="input-elements"
                  value={optionId}
                  onChange={this.getOnChangeButtonType}
                >
                  {transactionTypeOptions.map(eachTransaction => (
                    <option
                      key={eachTransaction.optionId}
                      value={eachTransaction.optionId}
                    >
                      {eachTransaction.displayText}
                    </option>
                  ))}
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
                  <p className="headings">Title</p>
                  <p className="headings">Amount</p>
                  <p className="headings">Type</p>
                </div>
                <hr className="horizontal-line" />
              </div>
              <ul className="transactions-container">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManger
