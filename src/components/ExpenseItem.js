import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

export const ExpenseItem = ({ id, description, amount, dispatch }) => (
  <li>
    <h3>{description}</h3>
    <Link to={`/edit/${id}`}>Edit</Link>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
  </li>
)

export default ExpenseItem
