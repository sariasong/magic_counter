import React, { Component } from 'react';
import { 
  Header,
  Button,
} from 'semantic-ui-react';
import Counter from './Counter'




class Home extends Component {
  state = { counters: [] }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      // .toString(16)
      // .substring(1);
   }

   getItemId = () => {
    return Math.floor((1 - Math.random()) * 0x10000)
   }
 
   addCounter = (counter) => {
     const { counters } = this.state;
     const item = { id: this.getUniqId() }
     this.setState({ counters: [item, ...counters] }); 
   }

   deleteCounter = (counter) => {
      const { counters } = this.state;
      const item = {id: this.getItemId() }
      this.setState({ counters: [item, ...counters ] });
   }

  render() {
    const { counters } = this.state
    return (
      <div>
        <Header>
          Magic the Gathering Counter
        </Header>
        <div>
          <Counter/>
        </div>
        <div>
          { counters.map( counter => <Counter key={counter.id}/> )}
        </div>
        <Button
          onClick={this.addCounter}
        >Add Player</Button>
        <Button
          onClick={this.deleteCounter}
        >Delete Player</Button>

      </div>
    );
  }
}

export default Home;