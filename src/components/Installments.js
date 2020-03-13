import React from 'react';
import User from './User'

export default function Installments(props) {
    const info = props.info
    const newInstallments = props.newInstallments
    const user = props.user
    const handleAmountTaken = props.handleAmountTaken
    const handleRadioChange = props.handleRadioChange

    return (
        <div className="container mb-4 mobile">
            <User user={user} info={info} />
            <h1 className="mt-4">Boletos</h1>
            <div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="toPay" defaultValue="option1" defaultChecked onClick={(e) => handleRadioChange(e)} />
                    <label className="form-check-label" htmlFor="toPay">
                        A pagar
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="payed" defaultValue="option2" onClick={(e) => handleRadioChange(e)} />
                    <label className="form-check-label" htmlFor="payed">
                        Pagos
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="together" defaultValue="option3" onClick={(e) => handleRadioChange(e)} />
                    <label className="form-check-labe2" htmlFor="together">
                        Ambos
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex flex-wrap justify-content-between mobile">
                    {newInstallments.map((el, idx) =>
                        <div key={idx}>
                            <div className="card mt-4 hvr-grow-shadow" style={{ minWidth: "300px" }}>
                                <div className="card-header">
                                    <strong>Vencimento: </strong>{el.dueDate}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><strong>Valor: </strong>{el.formatedValue}</h5>
                                    {el.payd === false ? <p className="card-text" style={{ color: "red" }}>Parcela a pagar</p> : <p style={{ color: "green" }}>Parcela paga</p>}
                                    {el.payd === false ? <button id="btn" className="btn btn-primary btn-pay" onClick={() => handleAmountTaken(idx)}>Pagar</button> : 
                                    <button id="btn" className="btn btn-primary btn-pay" disabled>Pago</button>}
                                </div>
                            </div>
                        </div>
                    )
                    }
                </div>

            </div>
        </div >
    )
}
