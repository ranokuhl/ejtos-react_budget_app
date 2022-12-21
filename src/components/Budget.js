import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

const Budget = () => {
	const {budget, expenses, dispatch} = useContext(AppContext)

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost)
	}, 0)

	const changeBudget = e => {
		dispatch({
			type: 'SET_BUDGET',
			payload: e.target.value,
		})
		const limit = parseInt(e.target.value)

		if (limit === 20000) {
			alert('Max Budget of 20.000 reached!!')
		}

		if (limit === totalExpenses) {
			alert(
				'Cannot go below minimum expenses of ' +
					totalExpenses.toString()
			)
		}
	}

	return (
		<div className='alert alert-secondary'>
			<span>
				Budget: £{budget}
				<input
					type='number'
					value={budget}
					id='budget'
					onChange={e => changeBudget(e)}
					step='10'
					max='20000'
					min={totalExpenses}
				/>
			</span>
		</div>
	)
}

export default Budget
