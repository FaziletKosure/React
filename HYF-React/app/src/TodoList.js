import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './TodoList.css';

import Api from './api'
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                // {
                //     description: 'Submit homework',
                //     category: 'work',
                //     done: false,
                //     _id: 32
                // },
                // {
                //     description: 'Message teacher with homework url',
                //     category: 'work',
                //     done: false,
                //     _id: 1
                // },
                // {
                //     description: 'Buy groceries',
                //     category: 'private',
                //     done: false,
                //     _id: 4
                // },
                // {
                //     description: 'Do taxes',
                //     category: 'private',
                //     done: true,
                //     _id: 5
                // }
            ]
        }
    }


    // async componentDidMount() {
    //     const todos = await Api.getTodos();

    //     this.setState({
    //         todos
    //     })
    // }

    componentDidMount() {
        Api.getTodos().then(res => {

            this.setState({
                todos: [...this.state.todos, ...res]
            })
        })

        this.setState({
            todos: [...this.state.todos]
        })
    }

    componentDidUpdate() {
        //const todo = await Api.getTodo(id);

    }
    // fetchingTodos = async () => {
    //     const todos = await Api.getTodos();
    //     return await todos.json();
    // }

    onResolve = async (_id) => {
        const todo = this.state.todos.find((todo) => todo._id === _id);
        todo.done = !todo.done;

        const result = await Api.editTodo(_id, todo);
        const todos = await Api.getTodos();
        this.setState({ ...this.state, todos });
    };




    onEditClick = async (_id, todo) => {

        //const result = await Api.editTodo(_id, todo);
        this.setState({
            ...this.state,
            editingTodoId: _id
        });

    };

    render() {

        const todos = this.state.todos;
        const { category } = this.props;

        const filtered = todos.filter(todo => todo.category === category);

        const $todos = filtered.map((todo) => <TodoItem key={todo._id} {...todo} onResolve={this.onResolve} onEditClick={() => this.onEditClick(todo._id)} />);
        if (this.state.editingTodoId) {
            return <Redirect to={`/todos/${this.state.editingTodoId}`} />
        };



        return (
            <section className="TodoList" >
                <ul>
                    {$todos}
                </ul>
            </section>
        )
    }
}

export default TodoList;