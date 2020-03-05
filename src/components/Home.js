import React, { Component } from 'react'
import axios from 'axios'
import Installments from './Installments'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfData: [],
            installments: [],
        }
    }

    getAllData = () => {
        axios.get(`http://www.mocky.io/v2/5c923b0932000029056bce39`)
            .then(responseFromApi => {
                this.setState({
                    installments: responseFromApi.data.installments,
                    listOfData: responseFromApi.data
                })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getAllData();
    }

    render() {
        return (
            <div id="content-wrap">
                <Installments data={this.state} />
            </div>
        )
    }
}

export default Home