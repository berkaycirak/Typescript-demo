import React, { useState } from 'react';

interface IPerson {
	name: {
		first: string;
		last: string;
	};
}

function Person({ name }: IPerson) {
	const [country, setCountry] = useState<string | null>('');

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setCountry(event.target.value);
	};
	return (
		<div>
			{name.first} {name.last}
			<input
				type='text'
				placeholder='Write your country...'
				onChange={handleChange}
			/>
			{country}
		</div>
	);
}

export default Person;
