import { useState } from "react";
import { ColorPickerTitle, ColorPickerWrapper, ColorPickerOption } from "./ColorPicker.styled";


export const ColorPicker = ({ options }) => {

    const [activeOptionIdx, setActiveOptionIdx] = useState(0);

    const makeOption = (index) => {
        return index === activeOptionIdx ? true : false
    }

    const { label } = options[activeOptionIdx];

    return (
        <ColorPickerWrapper>
            <ColorPickerTitle>Color picker</ColorPickerTitle>
            <p>Color checked: {label}</p>
            <div>
                {options.map(({ label, color }, index) => {
                    return <ColorPickerOption
                        $active={makeOption(index)}
                        key={label}
                        style={{
                            backgroundColor: color,
                        }
                        }
                        onClick={() => { setActiveOptionIdx(index) }}
                    >
                    </ColorPickerOption>
                })}

            </div>
        </ColorPickerWrapper >
    )

}
// export class OldColorPicker extends Component {
//     state = {
//         activeOptionIdx: 0,
//     }

//     setActiveIdx = (index) => {
//         this.setState({ activeOptionIdx: index })
//     }

//     makeOption = (index) => {
//         return index === this.state.activeOptionIdx ? true : false
//     }

//     render() {
//         const { options } = this.props
//         const activeLabel = options[this.state.activeOptionIdx];
//         return (
//             <ColorPickerWrapper>
//                 <ColorPickerTitle>Color picker</ColorPickerTitle>
//                 <p>Color checked: {activeLabel.label}</p>
//                 <div>
//                     {options.map(({ color, label }, index) => {
//                         return <ColorPickerOption
//                             $active={this.makeOption(index)}
//                             key={label}
//                             style={{
//                                 backgroundColor: color,
//                             }
//                             }
//                             onClick={() => { this.setActiveIdx(index) }}
//                         >
//                         </ColorPickerOption>
//                     })}

//                 </div>
//             </ColorPickerWrapper >
//         )
//     }
// }