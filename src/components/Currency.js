import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Currency = () => {
	const {dispatch} = useContext(AppContext)

	const currencyEventHandler = e => {
		const currency = e.target.value

		dispatch({
			type: 'CHG_CURRENCY',
			payload: currency,
		})
	}

	return (
		<div className={`alert bg-success text-light`}>
			<label>Currency</label>
			<select
				className={`bg-success text-light border-0`}
				onChange={e => currencyEventHandler(e)}
			>
				<option value='$' name='dollar'>
					$ Dollar
				</option>
				<option value='£' name='pound'>
					£ Pound
				</option>
				<option value='€' name='euro'>
					€ Euro
				</option>
				<option value='₹' name='ruppee'>
					₹ Ruppee
				</option>
			</select>
		</div>
	)
}

export default Currency
