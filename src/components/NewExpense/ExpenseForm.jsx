import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [enTitle, setEnTitle] = useState('');
	const [enAmount, setEnAmount] = useState('');
	const [enDate, setEnDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	title: '',
	// 	amount: '',
	// 	date: ',',
	// });

	const titleChangeHandler = (e) => {
		setEnTitle(e.target.value);
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		title: e.target.value,
		// 	};
		// });
	};

	const amountChangeHandler = (e) => {
		setEnAmount(e.target.value);
		// setUserInput({
		// 	...userInput,
		// 	amount: e.target.value,
		// });
	};

	const dateChangeHandler = (e) => {
		setEnDate(e.target.value);
		// setUserInput({
		// 	...userInput,
		// 	date: e.target.value,
		// });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title: enTitle,
			amount: enAmount,
			date: new Date(enDate),
		};
		props.onSaveExpenseData(expenseData);
		setEnAmount('');
		setEnTitle('');
		setEnDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="text">Title</label>
					<input
						type="text"
						id="text"
						onChange={titleChangeHandler}
						value={enTitle}
					/>
				</div>
			</div>
			<div className="new-expense__control">
				<label htmlFor="amount">Amount</label>
				<input
					type="number"
					min="0.01"
					step="0.01"
					id="amount"
					onChange={amountChangeHandler}
					value={enAmount}
				/>
			</div>
			<div className="new-expense__control">
				<label htmlFor="date">Date</label>
				<input
					type="date"
					min="2019-01-01"
					max="2022-12-31"
					id="date"
					onChange={dateChangeHandler}
					value={enDate}
				/>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
