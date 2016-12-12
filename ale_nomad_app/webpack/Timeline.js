import React from 'react'
import { Link } from 'react-router'


class Timeline extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            drinks: ''
        }
    }


    componentDidMount() {
        fetch('/drinks' , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
        .then(response => response.json())
        .then(response =>console.log(response))
        // .then(response => this.setState({

        // }))
        })
    }

    redner() {
        return <div> Hello World</div>
    }
}
