import React, { Component } from 'react';
import Part from './Part'
import './Block.css'

export default class Block extends Component {
    render() {
        const block = Array.from(this.props.block.replace(/\s/g,''));
        return(
            <div className="block">
                {
                    block.map((character) => {
                            return <Part
                                character={character}
                            />;
                        })
                }
            </div>
        );
    }
}