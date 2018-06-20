import React, { Component } from 'react';
import { 
  Header,
  Button,
} from 'semantic-ui-react';
import Counter from './Counter'


addCounter = () => {
  
}

class Home extends Component {
  state = { counters: [] }
  render() {
    return (
      <div>
        <Header>
          Magic the Gathering Counter
        </Header>
        <div>
          <Counter/>
        </div>
        <Button
          onclick={this.addCounter()}
        >Add Player</Button>
      </div>
    );
  }
}

export default Home;