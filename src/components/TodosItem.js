import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodosItem extends Component {
    
    getStyle =() => {
        return {
            background:'#f4f4f4',
            padding: '10px',
            borderBottom:'1px #000 dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }    

        
        render() {
            const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {''}
                {title}</p>
                <button className="btn-1" onClick={this.props.delTodo.bind(this, id)} > x </button>
            </div>
        )
    }
}

// PropTypes
TodosItem.propTypes = {
    todo:PropTypes.object.isRequired
}


export default TodosItem
