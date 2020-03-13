import React, { useState, useEffect } from 'react';
import users from '../user.json'

import Installments from './Installments'

export default function Home() {
    const [installments, setInstallments] = useState([])
    const [newInstallments, setNewInstallments] = useState([])
    const [info, setData] = useState([])
    const [user, setUser] = useState([])

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
        let filtered = ''
        if (event.target.id === 'toPay') {
            filtered = installments.filter(el => !el.payd)
        } else if (event.target.id === 'payed') {
            filtered = installments.filter(el => el.payd)
        } else if (event.target.id === 'together') {
            filtered = installments.map(el => el)
        }
        setNewInstallments(filtered)
    }

    const handleAmountTaken = id => {
        const amountTaken = info.amountTaken - installments[id].value
        const amountPayd = info.amountPayd + installments[id].value
        installments[id].payd = true
        const payd = installments.payd
        const changeAmountTaken = { ...info, amountTaken, payd, amountPayd }
        setData(changeAmountTaken)
    }

    return (
        <div id="content-wrap">
            <Installments
                handleRadioChange={handleRadioChange}
                installments={installments}
                newInstallments={newInstallments}
                user={user} info={info}
                handleAmountTaken={handleAmountTaken} />
        </div>
    )
}
