import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
	const name = {
		first: 'Berkay',
		last: 'CRK',
	};

	const names = [
		{
			first: 'Berkay',
			last: 'CRK',
		},
		{
			first: 'Halil Can',
			last: 'CRK',
		},
		{
			first: 'Omrcengz',
			last: 'CRK',
		},
	];

	return (
		<div className='App'>
			<Greet name='Berkay' />
			<Person name={name} />
			<PersonList names={names} />
		</div>
	);
}

export default App;
