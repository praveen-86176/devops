import { component } from 'react';

class Welcome extends component{
    constructor(props){
        super(props);
        this.state = {
            count   : this.props.initialCount
        }
    }
    increment = () => {
        this.setState({count:this.state.count+ this.props.step});
    }
    decrement = () => { 
        this.setState({count:this.state.count- this.props.step});
    }
    alterFunction = () => {
        
    }

    render(){
        return (

            <div>
       {/* <h1>Welcome,{this.props.name}</h1>  */}
       <h1>{this.state.count}</h1>
       <button onClick={this.state.count > -this.props.limit ? this.decrement : this.alterFunction</button>
       <button onClick={this.state.count < this.props.limit ? this.increment : this.alterFunction</button
        </div>
        )
    }
}   

export default Welcome;