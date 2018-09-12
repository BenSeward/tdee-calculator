import React, { Component } from 'react';
import Calculation from './Calculation';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      gender: '',
      height:'',
      weight: '',
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    switch(event.target.name) {
      case 'name':
        this.setState({
          name: event.target.value
        });
        break;
      case 'age':
        this.setState({
          age: event.target.value
        });
        break;
      case 'height':
        this.setState({
          height: event.target.value
        });
        break;
      case 'weight':
        this.setState({
          weight: event.target.value
        });
        break;
      case 'gender':
        this.setState({
          gender: event.target.value
        });
        break;
    }

    console.log(event.target)
  }

  render() {
    const test = Calculation.calculateBMR('male', "26", "192", "190")

    console.log(test);
    
    return (
      <div className="App">
        <form>
          <input 
            type="radio" 
            value={this.state.gender} 
            onChange={this.handleChange} 
            name="gender" 
            value="male"
          />
          <label for="gender">Male</label>
          <input 
            type="radio" 
            value={this.state.gender} 
            onChange={this.handleChange} 
            name="gender" 
            value="female" 
          />
          <label for="gender">Female</label>
          <input 
            type="text" 
            value={this.state.name} 
            onChange={this.handleChange} 
            name="name"
            placeholder="Name"
          />
          <input 
            type="text" 
            value={this.state.age} 
            onChange={this.handleChange} 
            name="age"
            placeholder="Age" />
          <input 
            type="text" 
            value={this.state.height} 
            onChange={this.handleChange} 
            name="height"
            placeholder="Height (cms)" />
          <input 
            type="text" 
            value={this.state.weight} 
            onChange={this.handleChange} 
            name="weight"
            placeholder="Weight (kgs)" />
          <input type="submit" 
          value="Calculate" />
        </form>
      </div>
    );
  }
}

export default Form;
