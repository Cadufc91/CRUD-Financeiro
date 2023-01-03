import { formatCurrentMonth } from '../helpers/dateFilter';
import { ResumeItem } from '../components/resumeItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`);
    }


    return(
        <Container className="d-flex align-items-center justify-content-around p-3">
            <Row className='d-flex align-items-center flex-fill'>
                <Col onClick={handlePrevMonth}>⬅️</Col>
                <Col>{formatCurrentMonth(currentMonth)}</Col>
                <Col onClick={handleNextMonth}>➡️</Col>
            </Row>
            <Row className='d-flex flex-fill'>
                <ResumeItem title="Receitas" value={income}/>
                <ResumeItem title="Despesas" value={expense}/>
                <ResumeItem
                    title="Saldo" 
                    value={income - expense}
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />
            </Row>
        </Container>
    );
}