import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../containers/App.css';



class App extends React.Component {
    constructor() {
        super()
        // STATE For SearchBox
        // STATE can change and affect our apps
        this.state = {
                robots: [],
                searchField: ''
            }
            // But before we use state 
            // we have to change the way we use react component, we crete a class
            // This is runned 1
            console.log('constructor');
        
        }
        

        componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/users')
            //Updating users by Fetching the data
                .then(response => {
                    return response.json();
                })
                .then(users => {
                    this.setState({robots: users})
                });
            console.log('componentDidMount');
        }
        

        onSeachChange = (event) => {
            this.setState({searchField : event.target.value})
        }
       
    render(){
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            });
            console.log('Render');
            if(this.state.robots.length === 0 ){
                return <h1> Loading </h1>
            } else {
        return (
            <div className='tc'>
                <h1> Robot Friends </h1>
                <SearchBox searchChange= {this.onSeachChange}/>
                {/* CardList needs to know whats in SearchBox so we can filter it out 
                We have to use STATE in our APP*/}
                <Scroll>
                    <CardList robots= {filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}
    
}

export default App;