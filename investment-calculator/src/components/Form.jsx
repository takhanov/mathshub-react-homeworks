import React, {useState, useRef} from "react";
import Button from "./UI/Button.jsx";
import Header from "./Header.jsx";
import ModalError from "./UI/ModalError.jsx";


function Form({onNewRecord}) {
    const currentSavingsRef = useRef()
    const yearlyContributionRef = useRef()
    const expectedReturnRef = useRef()
    const durationRef = useRef()
    const [prevError, setError] = useState('')

    const closeError = () => {
        setError('')
    }

    const SubmitHandler = (e) => {
        const currentSavings = currentSavingsRef.current.value
        const yearlyContribution = yearlyContributionRef.current.value
        const expectedReturn = expectedReturnRef.current.value
        const duration = durationRef.current.value

        e.preventDefault()
        if (+currentSavings < 0) {
            setError('Сбережения должны быть больше или равны нулю!')
            return
        }
        if (+yearlyContribution < 0) {
            setError('Ежегодный вклад должен быть больше или равен нулю!')
            return
        }

        if (+expectedReturn < 0) {
            setError('Ожидаемый процент должен быть больше или равен нулю!')
            return
        }
        if (+duration <= 0) {
            setError('Длительность должна быть больше нуля!')
            return
        }

        const newRecord = {

            currentSavings,
            yearlyContribution,
            expectedReturn,
            duration
        }
        onNewRecord(newRecord)

        currentSavingsRef.current.value = ''
        yearlyContributionRef.current.value = ''
        expectedReturnRef.current.value = ''
        durationRef.current.value = ''
    }

    return (
        <>
        {prevError && <ModalError text={prevError} errorHandler={closeError}/>}
            <form className='form' onSubmit={SubmitHandler}>
                <div className='input-group'>
                    <p>
                        <label htmlFor='current-savings'>Ваши текущие накопления ($)</label>
                        <input type='number'
                               id='current-savings'
                               ref={currentSavingsRef}
                        />
                    </p>
                    <p>
                        <label htmlFor='yearly-contribution'>
                            Сколько отложите за год ($)
                        </label>
                        <input type='number'
                               id='yearly-contribution'
                               ref={yearlyContributionRef}
                        />
                    </p>
                </div>
                <div className='input-group'>
                    <p>
                        <label htmlFor='expected-return'>
                            Ожидаемый Процент (%, в год)
                        </label>
                        <input type='number'
                               id='expected-return'
                               ref={expectedReturnRef}
                        />
                    </p>
                    <p>
                        <label htmlFor='duration'>
                            Продолжительность Инвестирования (лет)
                        </label>
                        <input type='number'
                               id='duration'
                               ref={durationRef}
                        />
                    </p>
                </div>
                <p className='actions'>
                    <Button type="reset">Сбросить</Button>
                    <Button>Рассчитать</Button>
                </p>
            </form>
        </>
    )
}

export default Form