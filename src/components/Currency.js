import React, {useState} from 'react'

const Currency = () => {
	const [name, setName] = useState()
	return (
		<div className={`alert bg-success text-light`}>
			<label>Currency</label>
			<select
				className={`bg-success text-light border-0`}
				onChange={event => setName(event.target.value)}
			>
                
				<option value='Dollar' name='dollar'>
					$ Dollar
				</option>
				<option value='Pound' name='pound'>
					£ Pound
				</option>
				<option value='Euro' name='euro'>
					€ Euro
				</option>
				<option value='Ruppee' name='ruppee'>
					₹ Ruppee
				</option>
			</select>
			
		</div>
	)
}

export default Currency
