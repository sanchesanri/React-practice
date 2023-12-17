import React, { Component } from "react";
import { TodoFormEditor, TodoTextEditor } from "./TodoEditor.styled";

export class TodoEditor extends Component {

    state = {
        message: '',
    }

    handleChange = (e) => {
        this.setState({ message: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);

        this.props.onSubmitTodo(this.state.message)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({ message: '' })
    }
    render() {
        return (
            <>
                <TodoFormEditor onSubmit={this.handleSubmit}>
                    <TodoTextEditor
                        value={this.state.message}
                        onChange={this.handleChange}
                    ></TodoTextEditor>
                    <button type="submit" style={{ border: "1px solid black", padding: 10 }}>Save</button>
                </TodoFormEditor>
            </>
        )
    }
}
