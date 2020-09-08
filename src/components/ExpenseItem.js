import React from 'react'
import { Link } from 'react-router-dom'

export const ExpenseItem = ({ id, description, amount, dispatch }) => (
  <li>
    <h3>{description}</h3>
    <Link to={`/edit/${id}`}>Edit</Link>
    <p>{amount}</p>
  </li>
)

export default ExpenseItem
