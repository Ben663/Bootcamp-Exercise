
import { Component } from 'react';
class Todo extends Component {
	State = {
		listTodo: [
			{ name: 'CSS', completed: true },
			{ name: 'JavaScript', completed: true },
			{ name: 'Learn React', completed: false },
			{ name: 'Learn mongoDB', completed: false },
			{ name: 'Learn Node JS', completed: false },
		],
	};

	listOfTodo = () => {
		return this.setState.listTodo.map((e, i) => {
			return (
				<p
					style={{
						textDecoration: e.completed ? 'line-through' : 'none',
					}}
					onClick={() => this.handleClick(i)}
					key={i}>
					{e.name} - {e.completed ? 'V' : 'X'}
				</p>
			);
		});
	};
	hendleClick = (i) => {
		const changedComp = !this.state.listTodo[i].completed;
		this.setState(
			(prev) => {
				return [
					...prev.listTodo,
					(prev.listTodo[i] = {
						...prev.listTodo[i],
						completed: changedComp,
					}),
				];
			},
			() => { return this.state.Component}
		);
	};
	// handle = () => {
	// 	this.setState(
	// 		(prev) => {
	// 			return { completed: prev.completed ? false : true };
	// 		},
	// 		() => {
	// 			return this.state.completed;
	// 		}
	// 	);
	// };
	render() {
		return <>{this.listOfTodo()}</>;
	}
}
export default Todo;
