import React, { Component } from 'react';
import Loader from './Loader';
import Person from './Person';

class HomeworkWeek3 extends Component {
    state = {
        loading: false,
        information: []


    }


    componentDidMount() {


        this.setState({ loading: true })
        fetch("https://uinames.com/api/?amount=10")
            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState({
                    loading: false,
                    information: data
                })

            })


    }
    render() {
        const info = this.state.loading ? <Loader /> :
            this.state.information.map((person, index) => (
                <Person key={index} person={person} />

            ))

        return (
            < div >
                <h1 className='header'>Information</h1>
                <ul>
                    <li className='person'>
                        {info}
                    </li>
                </ul>
            </div >
        );
    }
}


export default HomeworkWeek3;