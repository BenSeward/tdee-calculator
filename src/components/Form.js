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
      value: '',
      activeInput: 0
    }

    this.handleChange = this.handleChange.bind(this);

  }
  
  componentDidMount() {
    const formItems = document.getElementsByClassName('input').length;

    this.setState({
      formItems: formItems
    })

    document.getElementsByClassName('input')[0].classList.add('active-item');
  }

  selectActiveInput() {
    
  }

  nextFormItem() {
    if(this.state.activeInput < this.state.formItems) {
      this.setState({
        activeInput: this.state.activeInput + 1,
      })
    }

    var inputItems = document.getElementsByClassName('input');
    document.getElementsByClassName('active-item')[0].classList.remove('active-item');
    inputItems[this.state.activeInput].classList.add('active-item');

    // for ( var i = 0; i < inputItems.length; i++ ) (function(i){ 
    //   inputItems[i].onclick = function() {
    //       // do something
    //       return console.log(i)
    //   }
    // })(i);


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
    const test = Calculation.calculateTDEE(this.state.gender, this.state.age, this.state.height, this.state.weight, this.state.activityLevel)
    console.log('your TDEE is....' + test)
    this.setState({
      tdee: test
    });
    event.preventDefault();
  }

  addFormClass() {

  }

  render() {
    const test = Calculation.calculateTDEE(this.state.gender, this.state.age, this.state.height, this.state.weight, this.state.activityLevel)
    
    return (
      <div className="form-inner">
        <h2>{this.state.tdee ? 'Your TDEE IS... ' + this.state.tdee + ' calories per day.' : ''}</h2>

        <form className="control-form" onSubmit={(f)=>{this.submitForm(f)}}>
          <div className="input">
            <label>
              Male
              <input 
                type="radio" 
                value={this.state.gender} 
                onChange={this.handleChange} 
                name="gender" 
                value="male"
              />
            </label>
            <label>
              Female
              <input 
                type="radio" 
                value={this.state.gender} 
                onChange={this.handleChange} 
                name="gender" 
                value="female"
              />
            </label>
          </div>
          <input 
            type="text" 
            value={this.state.name} 
            onChange={this.handleChange} 
            name="name"
            placeholder="Name"
            className="input"
          />
          <input 
            type="text" 
            value={this.state.age} 
            onChange={this.handleChange} 
            name="age"
            placeholder="Age"
            className="input"
          />
          <input 
            type="text" 
            value={this.state.height} 
            onChange={this.handleChange} 
            name="height"
            placeholder="Height (cms)"
            className="input"
          />
          <input 
            type="text" 
            value={this.state.weight} 
            onChange={this.handleChange} 
            name="weight"
            placeholder="Weight (kgs)"
            className="input"
          />
          
          <select className="input" name="activityLevel" onChange={this.handleChange} value={this.state.activityLevel}>
            <option value="1.2">Sedentary</option>
            <option value="1.375">Light Activity</option>
            <option value="1.55">Moderate Activity</option>
            <option value="1.725">Very Active</option>
            <option value="1.9">Extremely Active</option>
          </select>

          <input className="btn btn-submit" type="submit" value="Submit" />
        </form>
        <button onClick={()=>{this.nextFormItem()}} id="next" type="button">Next Form Item</button>
      </div>
    );
  }
}

export default Form;
