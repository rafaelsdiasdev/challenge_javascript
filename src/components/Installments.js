import React, { Component } from 'react';
import User from './User'

class Installments extends Component {
    constructor() {
        super();
        this.state = {
            filter: false
        };
    }

    payment(idx) {
        const installments = this.props.data.installments
        const data = this.props.data.listOfData
        const listOfData = data.amountTaken -= installments[idx].value
        data.amountPayd += installments[idx].value

        installments[idx].payd = true
        this.setState({
            installments: installments,
            listOfData: listOfData,

        })
    }

    handleChange(event) {
        if (event.target.type === 'checkbox') {
            this.setState({ [event.target.name]: event.target.checked })
        }
    }

    render() {
        const data = this.props.data.installments
        return (
            <div className="container mb-4 mobile">
                <User data={this.props} />
                <h1 className="mt-4">Boletos</h1>
                <div className="form-check">
                    <input type="checkbox" name="filter" className="form-check-input" id="exampleCheck1" onChange={(e) => this.handleChange(e)} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Mostrar apenas boletos a pagar</label>
                </div>
                <div className="row">
                    <div className="col d-flex flex-wrap justify-content-between mobile">
                        {this.state.filter ? data.filter(el => el.payd === false).map((el, idx) =>
                            <div key={idx}>
                                <div className="card mt-4 hvr-grow-shadow" style={{ minWidth: "300px" }}>
                                    <div className="card-header">
                                        <strong>Vencimento: </strong>{el.dueDate}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Valor: </strong>{el.formatedValue}</h5>
                                        {el.payd === false ? <p className="card-text" style={{ color: "red" }}>Parcela a pagar</p> : <p style={{ color: "green" }}>Parcela paga</p>}
                                        <button className="btn btn-primary btn-pay" onClick={() => this.payment(idx)}>Pagar</button>
                                    </div>
                                </div>
                            </div>
                        )
                            :
                            data.map((el, idx) =>
                                <div key={idx}>
                                    <div className="card mt-4 hvr-grow-shadow" style={{ minWidth: "300px" }}>
                                        <div className="card-header">
                                            <strong>Vencimento: </strong>{el.dueDate}
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title"><strong>Valor: </strong>{el.formatedValue}</h5>
                                            {el.payd === false ? <p className="card-text" style={{ color: "red" }}>Parcela a pagar</p> : <p style={{ color: "green" }}>Parcela paga</p>}
                                            {el.payd === true ? <button className="btn btn-primary btn-pay" disabled>Pago</button> : <button className="btn btn-primary btn-pay" onClick={() => this.payment(idx)}>Pagar</button>}
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
}

export default Installments