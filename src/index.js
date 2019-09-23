// install react snippets in vscode
import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
// 	return (
// 		<div>
// 			<p>react inserted ^_~</p>
// 		</div>
// 	);
// };
// export default App;

// export class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<p>react inserted via class</p>
// 			</div>
// 		);
// 	}
// }

import App from './app.js';

ReactDOM.render(<App />, document.getElementById('app'));
