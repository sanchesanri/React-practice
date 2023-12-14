import css from "./someCode.module.css";
import React, { Component } from "react";

export class MyClassComponents extends Component {
    static defaultProps = {};
    static propTypes = {};
    state = {};


    render() {
        return <button onClick={event => console.log(event)} >Click me!!!</button>
    }
}

