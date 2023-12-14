import React, { Component } from "react";
import { ControlButton, ControlsWrapper, CounterWrapper, SpanCounter } from "./Counter.styled";

export class Counter extends Component {

    static defaultProps = {
        initialValue: 0,
    }

    state = {
        value: this.props.initialValue,
    }

    handleIncrement = (e) => {
        this.setState(prevState => {
            return { value: prevState.value - 1 }
        })
    }

    handleDecrement = (e) => {
        this.setState(prevState => {
            return { value: prevState.value + 1 }
        })
    }

    render() {
        return (
            <CounterWrapper >
                <SpanCounter >{this.state.value}</SpanCounter>

                <ControlsWrapper>
                    <ControlButton type="button" onClick={this.handleIncrement}>Change on -1</ControlButton>
                    <ControlButton type="button" onClick={this.handleDecrement}>Change on +1</ControlButton>
                </ControlsWrapper>
            </CounterWrapper>)
    }
}
