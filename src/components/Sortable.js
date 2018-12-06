import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const SortableItem = SortableElement(({item}) =>
    <div className="reports__all__item">
        <img src="../../images/spaceship.png" width="30px"/>
        <div className="reports__all__item__details">
            <span>{item.caption}</span>
            <div>
                <p>{item.id}</p>
                <p>{item.type}</p>
            </div>
        </div>
    </div>
);

const SortableList = SortableContainer(({items}) => 
    <div>
        {items.map((item, index) => (
            <SortableItem key={`report-${index}`} index={index} item={item} />
        ))}
    </div>
);

export default class Sortable extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        if(this.state.items != this.props.listItems){
            this.setState({items: this.props.listItems});
        }
    }
  
    onSortEnd({oldIndex, newIndex}){
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex),
        });
    }

    render() {
        return <SortableList items={this.state.items} onSortEnd={this.onSortEnd.bind(this)}/>;
    }
}