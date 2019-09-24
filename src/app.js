import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'https://github.com/rodrigofuentes/react-webpack'
		};
	}
	render() {
		return (
			<div>
				<p id="test">React-ing: check out the repo</p>
				<a href={this.state.url}>github.com/react-webpack</a>
			</div>
		);
	}
}

export default App;
