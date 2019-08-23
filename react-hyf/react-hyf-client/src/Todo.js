import React, { Component } from 'react';

class CommentForm extends Component {
    render() {
        return (
            <form className="commentForm">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Say something..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
}


class Todo extends Component {
    state = {
        done: null,
        count: 0
    };
    handleChange = e => {
        console.log(e.target.checked);

        this.setState({
            [e.target.id]: e.target.checked
        });
    };

    onButtonClick = e => {
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        const doneStyle = {
            textDecoration: " line-through"
        };
        console.log(this.props);
        return (
            <div>
                <ul>
                    <li style={this.state.done ? doneStyle : null}>
                        {this.props.description}, {this.props.deadline}
                        <br />
                        <button
                            onClick={() => {
                                this.props.deleteTodo(this.props.id);
                            }}
                        >
                            Delete
                </button>
                        <label htmlFor="done">Done:</label>
                        <input
                            type="checkbox"
                            id="done"
                            onChange={this.handleChange}
                            checked={this.state.done}
                        />
                        <button onClick={this.onButtonClick}>
                            ❤️ Liked:{this.state.count}
                        </button>
                        <CommentForm />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Todo;