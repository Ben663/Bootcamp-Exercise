import React from "react";

class Head extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { counter: 2 };
	// }
    state = { counter: 1 };
    
    handleButton = () => {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + 1 };
            }, () => {
                return this.state.counter;
            }
        )
    }
    handleMinus = () => {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - 1 };
            }, () => {
                return this.state.counter;
            }
        )
    }
    

	render() {
		return (
			<>
				<button onClick={this.handleButton}>Plus</button>
				<button onClick={this.handleMinus}>minus</button>
				<p>{this.state.counter}</p>
			</>
		);
	}
}
export default Head;