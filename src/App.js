import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import SourceField from './components/input.jsx';
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
		  <SourceField 
		    handleTextChange={ this.handleTextChange } 
		    id={ 'source' }
		  />
		</header>
      </div>
    );
  }
}

export default App;
