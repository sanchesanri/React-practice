import React, { Component } from "react";
import { Item, List, Text } from "./TodoList.styled";

export class TodoList extends Component {
    state = {
        value: 0,
    }


    render() {
        const { todoList, onDeleteTodo, onToggleCompleted } = this.props;

        return (
            <List>
                {todoList.map(({ id, text, completed }) => {
                    return <Item key={id}>
                        <input
                            type="checkbox"
                            className="TodoList__checkbox"
                            checked={completed}
                            onChange={() => onToggleCompleted(id)}
                        />
                        <Text>{text}</Text>
                        <button
                            type="button"
                            onClick={() => { onDeleteTodo(id) }}
                            style={{ padding: 10, backgroundColor: "red" }}>Delete</button>
                    </Item>
                })}
            </List>
        )
    }
}