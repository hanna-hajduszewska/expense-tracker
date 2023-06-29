/* eslint-disable react/prop-types */
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	// let filterInfoText = '2019, 2021 & 2022';

	// if (filteredYear === '2019') {
	// 	filterInfoText = '2020, 2021 & 2022';
	// } else if (filteredYear === '2021') {
	// 	filterInfoText = '2019, 2020 & 2022';
	// } else {
	// 	filterInfoText = '2019, 2020 & 2021';
	// }

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilter={filterChangeHandler}
					selected={filteredYear}
				/>
				{/* <p>Data for years {filterInfoText} is hidden.</p> */}

				<ExpenseItem
					title={props.expenses[0].title}
					amount={props.expenses[0].amount}
					date={props.expenses[0].date}
				/>
				<ExpenseItem
					title={props.expenses[1].title}
					amount={props.expenses[1].amount}
					date={props.expenses[1].date}
				/>
				<ExpenseItem
					title={props.expenses[2].title}
					amount={props.expenses[2].amount}
					date={props.expenses[2].date}
				/>
				<ExpenseItem
					title={props.expenses[3].title}
					amount={props.expenses[3].amount}
					date={props.expenses[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
