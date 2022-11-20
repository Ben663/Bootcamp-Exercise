import React from "react";

class Input extends React.Component {
    
    state = { sec: 60 };
    
    handleInput = () => {
        setTimeout(() => {
            this.setState((prevState) => {
                return { sec: prevState.sec - 0.5 };
            })
            
        }, 2000)
    };
    render() {
        return (
					<>
						<input
							value={this.state.sec}
							placeholder='sec'
							type='number'
							min={1}
							onChange={({ target: { value } }) => {
								this.setState((prevState) => {
									return { sec: value };
								});
							}}></input>
						<input
							value={this.state.sec / 60}
							placeholder='min'
							type='number'
							min={1}
							onChange={({ target: { value } }) => {
								this.setState((prevState) => {
									return { sec: value };
								});
							}}></input>
						<input
							value={this.state.sec / 3600}
							placeholder='hour'
							type='number'
							min={1}
							onChange={({ target: { value } }) => {
								this.setState((prevState) => {
									return { sec: value };
								});
							}}></input>
					</>
				);
    }
}
export default Input