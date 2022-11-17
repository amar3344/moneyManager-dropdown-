import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <>
      <div className="balance-card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balance-income-exp-images"
          />
        </div>
        <div className="card">
          <p className="balance-text">Your Balance</p>
          <p className="rupees">
            Rs <span className="span-element-amount">{balanceAmount}</span>
          </p>
        </div>
      </div>
      <div className="income-card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="balance-income-exp-images"
          />
        </div>
        <div className="card">
          <p className="balance-text">Your Income</p>
          <p className="rupees">
            Rs <span className="span-element-amount">{incomeAmount}</span>
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="balance-income-exp-images"
          />
        </div>
        <div className="card">
          <p className="balance-text">Your Expenses</p>
          <p className="rupees">
            Rs <span className="span-element-amount">{expensesAmount}</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
