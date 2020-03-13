import React from 'react'

export default function User(props) {
    const { photo, name, email, github } = props.user
    const { amountPayd, amountTaken, totalAmountInTaxes, monthlyInterest } = props.info

    return (
        <div className="container mb-4">
            <div className="row mobile">
                <div className="col-md-3">
                    <img className="photo" src={photo} alt={name}></img>
                </div>
                <div className="col-md-5 mt-4">
                    <p><strong>Nome: </strong>{name}</p>
                    <p><strong>E-mail: </strong>{email}</p>
                    <p><strong>Github: </strong><a target="_blanck" href="http://github.com/rafaelsdiasdev">{github}</a></p>
                </div>
                <div className="col-md-4">
                    <p><strong>Juros Mensais: </strong>{monthlyInterest}%</p>
                    <p><strong>Valor Pago: </strong>R$ {parseInt(amountPayd).toFixed(2)}</p>
                    <p><strong>Total a pagar: </strong>R$ {parseInt(amountTaken + totalAmountInTaxes).toFixed(2)}</p>
                    <p><strong>Total de juros: </strong>R$ {parseInt(totalAmountInTaxes).toFixed(2)}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}
