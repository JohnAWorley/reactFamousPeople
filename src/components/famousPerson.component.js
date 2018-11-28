import React, { Component } from 'react';

class FamousPerson extends Component {
    state = {
        user: {
            name: '',
            role: ''
        }
    }

handleChange = (propertyName) => {
    console.log('handleChanged called');
    return (event) => {
        console.log('event handler called');
    this.setState({
        user:{
            ...this.state.user,
            [propertyName] : event.target.value
            
        }
    })
    }    
}
    render() {
        return (
            <div className="content">
                <div className="inputStyle">
            <input type= 'text' onChange={this.handleChange('name')} />
            <input type= 'text' onChange={this.handleChange('role')} />
                </div>
                <div className="outputStyle">
                    <p>{this.state.user.name}  is famous for {this.state.user.role}</p>
                </div>
            </div>
        );
    }
}

export default FamousPerson;