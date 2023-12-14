import React, { Component } from "react";
import { Item, List, Text } from "./TodoList.styled";

export class TodoList extends Component {
    state = {
        value: 0,
    }

    render() {
        return (
            <List>
                {this.props.todoL.map(({ id, text, completed }) => {
                    return <Item key={id}>
                        <Text>{text}</Text>
                        <button style={{ padding: 10, backgroundColor: "red" }}>Delete</button>
                    </Item>
                })}
            </List>
        )
    }
}