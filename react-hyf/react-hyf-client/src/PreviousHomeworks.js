import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class PreviousHomeworks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos,
            description: null,
            deadline: null,
            done: null
        };
    }

    //////////////////////////////////

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.description]: e.target.value,
            [e.target.deadline]: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.addTodo(this.state);
        this.setState({
            description: " ",
            deadline: " "
        });
    };
    //////////////////////////////////:
    addTodo = todo => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({ ...this.state, todos });
    };
    deleteTodo = id => {
        console.log(id);
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        this.setState({
            ...this.state,
            todos
        });
    };
    render() {
        console.log(this.props);
        return (
            <section className="todos">
                <div>
                    <h1>Todo's</h1>

                    {this.state.todos.map(todoD => (
                        <Todo
                            value={this.state}
                            key={todoD.id}
                            {...todoD}
                            deleteTodo={this.deleteTodo}
                        />
                    ))}
                </div>
                <AddTodo
                    addTodo={this.addTodo}
                    value={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <br />
            </section>
        );
    }
}

export default PreviousHomeworks;