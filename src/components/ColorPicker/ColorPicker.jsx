import React, { Component } from "react";
import { ColorPickerTitle, ColorPickerWrapper, ColorPickerOption } from "./ColorPicker.styled";


export class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    }

    setActiveIdx = (index) => {
        this.setState({ activeOptionIdx: index })
    }

    makeOption = (index) => {
        return index === this.state.activeOptionIdx ? true : false
    }

    render() {
        const { options } = this.props

        const activeLabel = options[this.state.activeOptionIdx];
        return (
            <ColorPickerWrapper>
                <ColorPickerTitle>Color picker</ColorPickerTitle>
                <p>Color checked: {activeLabel.label}</p>
                <div>
                    {options.map(({ color, label }, index) => {
                        return <ColorPickerOption
                            $active={this.makeOption(index)}
                            key={label}
                            style={{
                                backgroundColor: color,
                            }
                            }
                            onClick={() => { this.setActiveIdx(index) }}
                        >
                        </ColorPickerOption>
                    })}

                </div>
            </ColorPickerWrapper >
        )
    }
}