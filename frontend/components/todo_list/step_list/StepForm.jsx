import React from 'react';
import { uniqueId } from '../../../util/idGenerator';

class StepForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      todoId: this.props.todoId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let step = Object.assign({}, this.state, {id: uniqueId()});
    console.log(step);

    this.props.receiveStep(step);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    console.log('this is the props ',this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="step-title">Title:</label>
          <input 
            type="text" 
            placeholder="Type Step Title Here..." 
            value={this.state.title}
            onChange={this.update('title')}
          />
          <br/>
          <label htmlFor="step-body">Body:</label>
          <input 
            type="text" 
            placeholder="Type Step Body Here..." 
            value={this.state.body}
            onChange={this.update('body')}
          />
          <br/>
          <button type="submit">Add Step</button>
        </form>
      </div>
    );
  }
}

export default StepForm;