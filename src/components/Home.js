import React, { useState, useEffect } from 'react';
import users from '../user.json'

import Installments from './Installments'

export default function Home() {
    const [installments, setInstallments] = useState([])
    const [newInstallments, setNewInstallments] = useState([])
    const [info, setData] = useState([])
    const [user, setUser] = useState([])
    const [selected, setSelected] = useState("A pagar")

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://www.mocky.io/v2/5c923b0932000029056bce39')
            const data = await response.json()

            setData(data)
            setInstallments(data.installments)
            setNewInstallments(data.installments)
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function userData() {
            const response = await users

            setUser(response)
        }
        userData()
    }, [])

    const handleRadioChange = event => {
        let filter = ''
        if (event.target.id === 'toPay') {
            filter = installments.filter(el => !el.payd)
        } else if (event.target.id === 'payed') {
            filter = installments.filter(el => el.payd)
        } else {
            filter = installments.map(el => el)
        }

        const select = event.target.value

        setNewInstallments(filter)
        setSelected(select)
    }

    const handleAmountTaken = id => {
        const amountTaken = info.amountTaken -= installments[id].value
        const amountPayd = info.amountPayd += installments[id].value
        installments[id].payd = true
        const payd = installments.payd
        const changeAmountTaken = { ...info, amountTaken, payd, amountPayd }
        
        setData(changeAmountTaken)
    }

    return (
        <div className="content-wrap">
            <Installments
                handleRadioChange={handleRadioChange}
                installments={installments}
                newInstallments={newInstallments}
                user={user} info={info}
                handleAmountTaken={handleAmountTaken}
                selected={selected}
            />
        </div>
    )
}
