import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import  { Home } from "./components/Home";

// parent component

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            homeLink : "Home"
        }
    }

    onGreet() {
        alert("Hello");
        }

    onChangeLinkName(newName){
        // since we are using this keyword inside function,
        // we need to bind this function from where we call it
        this.setState ({
           homeLink : newName
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} other="Other"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            // passing a reference to the method
                            changeLink={this.onChangeLinkName.bind(this)}
                            name={"Max"}
                            initialAge={27}
                            greet={this.onGreet}

                        />
                    </div>
                    </div>
                </div>

        );
    }
}

render(<App/>, window.document.getElementById("app"));