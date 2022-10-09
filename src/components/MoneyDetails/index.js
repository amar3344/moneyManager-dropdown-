import './index.css'

const MoneyDetails = props => {
  const {incomeDetails} = props

  return (
    <>
      <li className="balance-card">
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
            Rs <span className="span-element-amount">4000</span>
          </p>
        </div>
      </li>
      <li className="income-card">
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
            Rs <span className="span-element-amount">4000</span>
          </p>
        </div>
      </li>
      <li className="expenses-card">
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
            Rs <span className="span-element-amount">4000</span>
          </p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
