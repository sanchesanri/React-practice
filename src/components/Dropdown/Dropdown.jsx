import React, { Component } from "react";
import { DropdownButton, DropdownMenu, DropdownWrapper } from "./Dropdown.styled";

export class Dropdown extends Component {

    state = {
        visible: false,
    };

    handleClick = (e) => {
        this.setState((prevState) => {
            // const value = e.target.name === 'show' ? true : false;
            // return { visible: value }
            return { visible: !prevState.visible }
        })
    }

    // show = () => {
    //     return this.setState({ visible: true })
    // }
    // hide = () => {
    //     return this.setState({ visible: false })
    // }

    render() {
        return (
            <DropdownWrapper>
                {/* <DropdownButton type="button" name='show' onClick={this.handleClick}>To show</DropdownButton>
                <DropdownButton type="button" name='hide' onClick={this.handleClick}>To hidden</DropdownButton> */}
                {/* <DropdownButton type="button" onClick={this.show}>To show</DropdownButton>

                <DropdownButton type="button" onClick={this.hide}>To hidden</DropdownButton> */}
                <DropdownButton type="button" onClick={this.handleClick}>{
                    this.state.visible ? "To hidden" : "To show"
                }</DropdownButton>

                {this.state.visible && <DropdownMenu>Drop down menu</DropdownMenu>}
            </DropdownWrapper>
        )
    }
}