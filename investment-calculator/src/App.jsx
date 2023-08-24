import React, {useState} from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Table from "./components/Table.jsx";

const HEADINGS = ['Год', 'Общие накопления', 'Накопления с процентов (в год)', 'Всего с процентов', 'Всего инвестировано']


function App() {
    const yearlyData = []
    const [prevYearlyData, setYearlyData] = useState(yearlyData)
    const calculateHandler = (record) => {

        let currentSavings = +record.currentSavings; // сколько у вас денег сейчас
        const yearlyContribution = +record.yearlyContribution; // сколько денег вы готовы откладывать в год
        const expectedReturn = +record.expectedReturn / 100; // какой процент вы планируете получать от общей суммы в год
        const duration = +record.duration; // продолжительность (лет)
        let currYearlyContribution = 0
        // Ниже приведен код для вычисления годовых результатов (общей суммы накоплений, процентов и т. д.)
        for (let i = 0; i < duration; i++) {
            currYearlyContribution += yearlyContribution
            const currExpectedReturn = currentSavings * expectedReturn
            const currYearlyData = {
                year: new Date().getFullYear() + i,
                currentSavings: currentSavings.toFixed(2),
                currExpectedReturn: currExpectedReturn.toFixed(2),
                currentIncome: ((currentSavings + currExpectedReturn) * expectedReturn).toFixed(2),
                currYearlyContribution
            }
            yearlyData.push(currYearlyData)
            currentSavings += currExpectedReturn + yearlyContribution
        }
        setYearlyData([...prevYearlyData])
    };

    return (
        <>
            <Header/>
            <Form onNewRecord={calculateHandler}/>
            <Table headings={HEADINGS} records={prevYearlyData}/>
        </>
    );
}

export default App;
