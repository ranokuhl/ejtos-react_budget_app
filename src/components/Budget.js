import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Budget = () => {
	const {budget, dispatch} = useContext(AppContext)

	const increaseBudget = () => {
		const budgetIncrease = {
			budget: budget,
			addBudget: 10,
		}

		dispatch({
			type: 'ADD_BUDGET',
			payload: budgetIncrease,
		})
	}

	return (
		<div className='alert alert-secondary'>
			<span>
				Budget: £{budget}
				<input
					type='number'
					value={budget}
					id='budget'
					onChange={e => increaseBudget(e.target.value)}
				/>
			</span>
		</div>
	)
}

export default Budget
