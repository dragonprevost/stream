import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

class App extends Component {
  constructor(props){
  	super(props);
	this.state = {
	  url: '',
	}
  }

  handleTextChange = (e) => {
  	this.setState({
	  [e.target.id]: e.target.value,
	});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
			{ this.state.source &&
					<ReactPlayer 
					  url={ this.state.source } 
					  controls={ true }
					/>
			}
			<label>Video URL</label>
			<input id='source' onChange={ this.handleTextChange } />
		</header>
      </div>
    );
  }
}

export default App;
