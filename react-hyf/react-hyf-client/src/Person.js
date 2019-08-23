import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <p key={this.props.key}><span style={{ color: 'red' }}> Name:</span> {this.props.person.name}  {this.props.person.surname}!</p>
            </div>
        );
    }
}

export default Person;