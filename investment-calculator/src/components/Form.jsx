import React, {useState} from "react";
import Button from "./UI/Button.jsx";


function Form({onNewRecord}) {
    const [prevCurrentSavings, setCurrentSavings] = useState('')
    const [prevYearlyContribution, setYearlyContribution] = useState('')
    const [prevExpectedReturn, setExpectedReturn] = useState('')
    const [prevDuration, setDuration] = useState('')

    const CurrentSavingsHandler = (e) => {
        setCurrentSavings(e.target.value)
    }

    const YearlyContributionHandler = (e) => {
        setYearlyContribution(e.target.value)
    }

    const ExpectedReturnHandler = (e) => {
        setExpectedReturn(e.target.value)
    }

    const DurationHandler = (e) => {
        setDuration(e.target.value)
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
        const newRecord  = {

            currentSavings: prevCurrentSavings,
            yearlyContribution: prevYearlyContribution,
            expectedReturn: prevExpectedReturn,
            duration: prevDuration
        }
        onNewRecord(newRecord)
        setCurrentSavings('')
        setYearlyContribution('')
        setExpectedReturn('')
        setDuration('')
    }

    return (
        <form className='form' onSubmit={SubmitHandler}>
            <div className='input-group'>
                <p>
                    <label htmlFor='current-savings'>Ваши текущие накопления ($)</label>
                    <input type='number'
                           id='current-savings'
                           onChange={CurrentSavingsHandler}
                           value={prevCurrentSavings}
                    />
                </p>
                <p>
                    <label htmlFor='yearly-contribution'>
                        Сколько отложите за год ($)
                    </label>
                    <input type='number'
                           id='yearly-contribution'
                           onChange={YearlyContributionHandler}
                           value={prevYearlyContribution}
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
                           onChange={ExpectedReturnHandler}
                           value={prevExpectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor='duration'>
                        Продолжительность Инвестирования (лет)
                    </label>
                    <input type='number'
                           id='duration'
                           onChange={DurationHandler}
                           value={prevDuration}
                    />
                </p>
            </div>
            <p className='actions'>
                <Button type="reset">Сбросить</Button>
                <Button>Рассчитать</Button>
            </p>
        </form>
    )
}

export default Form