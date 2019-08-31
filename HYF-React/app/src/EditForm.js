import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './EditForm.css';
import Api from './api';

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            todo: []
        }
    }

    componentDidMount() {
        Api.getTodo(this.props.match.params.id).then(res => {
            console.log(res);
            this.setState({
                todo: res
            })
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const todoData = new FormData(event.target);

        await Api.editTodo({
            description: todoData.get('description'),
            category: todoData.get('category')
        });

        this.setState({
            submitted: true
        }
        )
    };

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit} className="EditForm">

                {this.state.submitted ? <Redirect to="/todos/:id" /> : null}

                <div>
                    <label htmlFor="description">Description:</label>

                    <input id="description" name="description" type="text" />

                </div>

                <div>
                    <label htmlFor="category">Category:</label>
                    <select id="category" name="category" >
                        <option value="private">private</option>
                        <option value="work">work</option>
                    </select>
                </div>

                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        )
    }
}

export default EditForm;
