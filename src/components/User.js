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
                    <p><strong>Valor Pago: </strong>R$ {
                    isNaN(amountPayd) ? 
                    '' : 
                    parseInt(amountPayd)
                    .toFixed(2)
                    .replace('.',',')}</p>
                    <p><strong>Total a pagar: </strong>R$ {
                    isNaN(amountTaken + totalAmountInTaxes) ? 
                    '' : 
                    parseInt(amountTaken + totalAmountInTaxes)
                    .toFixed(2)
                    .replace('.',',')}</p>
                    <p><strong>Total de juros: </strong>R$ {
                    isNaN(totalAmountInTaxes) ? 
                    '' : 
                    parseInt(totalAmountInTaxes)
                    .toFixed(2)
                    .replace('.',',')}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}
