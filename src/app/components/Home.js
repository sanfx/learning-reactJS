import React from "react";

export class Home extends React.Component {
    render() {
        let content = "";
        if (this) {
            content = <p>Hello !</p>;
        }
        return (
            <div>
            <p> In a new component.</p>

                {content}
                { 5 ==2 ? "Yes" : "No"}
        </div>
        );
    }
}