import React, { Component } from 'react'
import { PlayerWrapper, StyledPlayer } from './Player.styled.';

export class Player extends Component {
    state = {
        isVideoLoad: false,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.usr !== this.props.url) {
            // this.setState({ isVideoLoad: false })
            console.log(1);
        }
    }

    render() {
        const { isVideoLoad } = this.state;
        const { url } = this.props;
        return (
            <>
                {url && !isVideoLoad && <h2>Download video....... </h2>}
                {url && (
                    <PlayerWrapper>
                        <StyledPlayer
                            url={url}
                            onReady={() => { this.setState({ isVideoLoad: true }) }}
                            controls
                        />
                    </PlayerWrapper>
                )}
            </>
        )
    }
}
