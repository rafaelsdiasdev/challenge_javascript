import React, { Component } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfData: [],
            installments: [],
            name: 'Rafael Dias',
            email: 'rafaels.dias@me.com',
            photo: 'https://res.cloudinary.com/dcbi1lakq/image/upload/v1581194942/photo/IMG-20191003-WA0012_mlqvpi.jpg',
            github: 'github.com/rafaelsdiasdev'
        }

    }
    getUser = () => {
        axios.get('http://www.mocky.io/v2/5c923b0932000029056bce39')
            .then(responseFromDB => {
                const data = responseFromDB.data
                this.setState({
                    ID: data.UserId,
                    amountTaken: data.amountTaken,
                    amountPayd: data.amountPayd,
                    monthlyInterest: data.monthlyInterest,
                    totalAmountInTaxes: data.totalAmountInTaxes,
                    installments: responseFromDB.data.installments,
                    listOfData: responseFromDB.data
                })
            })
    }

    componentDidMount() {
        this.getUser()
    }

    render() {
        const { photo, name, email, github } = this.state
        const data = this.props.data.data.listOfData
        const installments = data.installments
        console.log(installments)
        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="col-3">
                        <img className="photo" src={photo}></img>
                    </div>
                    <div className="col-5">
                        <p><strong>Nome: </strong>{name}</p>
                        <p><strong>E-mail: </strong>{email}</p>
                        <p><strong>Github: </strong><a target="_branck" href="http://github.com/rafaelsdiasdev">{github}</a></p>
                    </div>
                    <div className="col-4">
                        <p><strong>Juros Mensais: </strong>{data.monthlyInterest}%</p>
                        <p><strong>Valor Pago: </strong>R$ {data.amountPayd},00</p>
                        <p><strong>Total a pagar: </strong>R$ {data.amountTaken + data.totalAmountInTaxes},00</p>
                        <p><strong>Total de juros: </strong>R$ {data.totalAmountInTaxes},00</p>                     {/* <p><strong>Parcelas pagas: </strong>{installments.filter(el => el.payd === true).length}</p> */}

                    </div>
                </div>
                <hr />
                {/* <h1><strong>User</strong></h1>
                <p><strong>ID: </strong>{ID}</p>
                <p><strong>Total Amount Taxes: </strong>{totalAmountInTaxes}</p>
                <p><strong>Total de Parcelas: </strong>{data.length}</p> */}
            </div>
        )
    }
}

export default User