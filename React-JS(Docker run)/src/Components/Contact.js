import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "red" }}>
                <div style={{ backgroundColor: "#e7e9eb", width: "20%", float: "left", height: "100vh" }}>
                    <h1>react</h1>
                    <p>This is home.</p>
                </div>
                {/* -----------left side--------------------- */}
                <div style={{ backgroundColor: "white", width: "75%", float: "left" }}>
                    <span>Mani</span>
                </div>
            </div>
        )
    }
}
