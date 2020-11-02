import React from 'react';

export default class ListItems extends React.Component {
    render() {
        return (
            <div className='ingredients'>
                <div>{this.props.caption}</div>


            <ul>
                 <li>1 1/2 cups milk</li>
                <li>1/2 cup mascarpone</li>
                <li>1/2 tsp pink salt</li>
                <li>1 lb Black Mission Figs</li>
                <li>1/2 cup brown sugar</li>
                <li>2-4 tbsp water</li>
                <li>1 1/2 cups heavy cream</li>
                <li>granulated sugar</li>
                <li>egg yolks</li>
                <li>1 lemon, juiced</li>
                <li>2 tbsp butter</li>
                <li>1 cup honey roasted pecans, roughly chopped</li>
                </ul>
            </div>
        )
    }
}
