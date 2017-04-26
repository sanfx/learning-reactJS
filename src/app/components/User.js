import React from "react";
import {browserHistory} from "react-router";

export class User extends React.Component{
    onClickNavigateHome(){
        browserHistory.push("/home")
    }

    render(){
        return (
            <div>
                <h3>The User page</h3>
                <p>user ID: {this.props.params.id}</p>
                <button onClick={this.onClickNavigateHome} className="btn btn-primary">Go Home !</button>
            </div>
        );
    }
}