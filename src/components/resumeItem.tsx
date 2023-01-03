import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type Props = {
    title: string;
    value: number;
    color ?: string;
}

export const ResumeItem = ({ title, value, color }: Props) =>{
    return(
        <Col>
            <Row>
                <h4>{title}</h4>
            </Row>
            <Row>
                <div color={color}>R$ {value}</div>
            </Row>
        </Col>
    );
}