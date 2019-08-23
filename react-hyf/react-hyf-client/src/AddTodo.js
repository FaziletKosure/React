import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        onChange={this.props.handleChange}
                        value={this.props.value.description}
                    />
                    <label htmlFor="deadline">Deadline:</label>
                    <input
                        type="date"
                        id="deadline"
                        onChange={this.props.handleChange}
                        value={this.props.value.deadline}
                    />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;