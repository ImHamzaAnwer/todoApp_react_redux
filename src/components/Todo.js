import React,{Component} from 'react';
import {connect} from 'react-redux';
import {todoAction} from '../store/actions/todoActions';
import * as firebase from 'firebase';

function mapStateToProps(state){
        return { todo: state.todoReducer }
    }

class Todo extends Component{
    
    _sendData(){
        var val = this.refs.todoInput.value;
        this.refs.todoInput.value = "";
        this.props.dispatch(todoAction.addToFirebase(val));

}

    _delete(){
        this.props.dispatch(todoAction.deleteNode());
    }
        
    render(){
        if(this.props.todo.getData)
        return(
            <div>
                {console.log(this.props.todo.data,"todo")}
                <h1>Todo App</h1>
                <input type="text" ref="todoInput"/>
                <button onClick={this._sendData.bind(this)}>Add</button>
                {   
                    this.props.todo.data.map((value,id)=>{
                        return (
                            <div key={id}>
                                <h2> {value} <button onClick={this._delete.bind(this)}>delete</button> </h2>
                            </div>
                        );
                    })
                }
            </div>
        );
        else return <h1>Loading......</h1>
    }
}

export default connect(mapStateToProps)(Todo);