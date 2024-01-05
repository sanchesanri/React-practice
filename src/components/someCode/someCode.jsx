import css from "./someCode.module.css";
import React, { Component } from "react";

export class MyClassComponents extends Component {
    static defaultProps = {};

    state = {
        name: '',
        skill: '',
        experience: 'junior',
        license: false,
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmitHandler(this.state)
        this.resetForm()
    }

    resetForm = () => {
        this.setState({ name: '', skill: '' })
    }

    handleLicenseChange = (e) => {
        this.setState({ license: e.target.checked })
    }


    render() {

        return (<>
            <form onSubmit={this.handleSubmit}>
                <label >
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange} />
                </label>
                <label >
                    Skill
                    <input
                        type="text"
                        name="skill"
                        value={this.state.skill}
                        onChange={this.handleInputChange} />
                </label>

                <p>Your level of developer</p>
                <label >
                    <input
                        type="radio"
                        name="experience"
                        value="junior"
                        checked={this.state.experience === 'junior'} onChange={this.handleInputChange}
                    />Junior
                </label>
                <br />
                <label >
                    <input
                        type="radio"
                        name="experience"
                        value="middle" checked={this.state.experience === 'middle'}
                        onChange={this.handleInputChange} />Middle
                </label>
                <br />
                <label >
                    <input type="radio"
                        name="experience"
                        value="senior"
                        checked={this.state.experience === 'senior'}
                        onChange={this.handleInputChange} />Senior
                </label>
                <br />
                <label>
                    <input type="checkbox" name="license" checked={this.state.license} onChange={this.handleLicenseChange} />OK
                </label>
                <button
                    disabled={!this.state.license}
                    type="submit"
                    style={{ border: "1px solid black", borderRadius: 5, padding: 2 }}>Sent me!!!</button>
            </form >
        </>
        )
    }
}

