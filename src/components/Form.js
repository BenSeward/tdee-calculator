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
      activityLevel: '',
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
      case 'activityLevel':
        this.setState({
          activityLevel: event.target.value
        });
        break;
    }
  }

  submitForm(event) {
    debugger;
    const test = Calculation.calculateTDEE(this.state.gender, this.state.age, this.state.height, this.state.weight, this.state.activityLevel)
    event.preventDefault(test);
  }

  render() {
    const test = Calculation.calculateTDEE(this.state.gender, this.state.age, this.state.height, this.state.weight, this.state.activityLevel)
    
    return (
      <div className="App">
        <form onSubmit={(f)=>{this.submitForm(f)}}>
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
          
          <select name="activityLevel" onChange={this.handleChange} value={this.state.activityLevel}>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light Activity</option>
            <option value="1.55">Moderate Activity</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extremely Active</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
