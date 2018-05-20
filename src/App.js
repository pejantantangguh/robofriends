import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';



class App extends React.Component {
    constructor() {
        super()
        // STATE For SearchBox
        // STATE can change and affect our apps
        this.state = {
                robots: robots,
                searchField: ''
            }
            // But before we use state 
            // we have to change the way we use react component, we crete a class
        }

        onSeachChange = (event) => {
            this.setState({searchField : event.target.value})
        }
       
    render(){
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            });
        return (
            <div className='tc'>
                <h1> Robot Firends </h1>
                <SearchBox searchChange= {this.onSeachChange}/>
                {/* CardList needs to know whats in SearchBox so we can filter it out 
                We have to use STATE in our APP*/}
                <CardList robots= {filteredRobots}/>
            </div>
        );
    }
    
}

export default App;