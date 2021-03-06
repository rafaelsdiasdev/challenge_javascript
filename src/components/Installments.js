import React from 'react';
import User from './User'

export default function Installments({info, newInstallments, user, handleAmountTaken, handleRadioChange, selected}) {

    const RadioButton = ({value, name, id, isSelected, label}) => {
        return (
            <div className="form-check">
                <input className="form-check-input" value={value} type="radio" name={name} id={id} checked={isSelected} onChange={(e) => handleRadioChange(e)} />
                <label className="form-check-label" htmlFor={id}>{label}</label>
            </div>
        )
    }

    return (
        <div className="container mb-4 mobile">
            <User user={user} info={info} />
            <h1 className="mt-4">Boletos</h1>
            <div>
                <RadioButton
                    value="A pagar"
                    label="A pagar"
                    id="toPay"
                    isSelected={selected === "A pagar"}
                />
                <RadioButton
                    value="Pagos"
                    label="Pagos"
                    id="payed"
                    isSelected={selected === "Pagos"}
                />
                <RadioButton
                    value="Todos"
                    label="Todos"
                    id="together"
                    isSelected={selected === "Todos"}
                />
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
                                    {el.payd === false ?
                                        <p className="card-text" style={{ color: "red" }}>Parcela a pagar</p> :
                                        <p style={{ color: "green" }}>Parcela paga</p>}
                                    {el.payd === false ?
                                        <button id="btn" className="btn btn-primary btn-pay" onClick={() => handleAmountTaken(idx)}>Pagar</button> :
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
