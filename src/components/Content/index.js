import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = () =>{
    return (
        <div>
        <Container>
            <Row className='mt-4'>
                <Col>   
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title>Motor</Card.Title>
                            <Card.Text>
                                Lokasi Parkir
                            </Card.Text>
                            <Button variant="primary">Cek lokasi</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-4'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title>Motor</Card.Title>
                            <Card.Text>
                                Lokasi Parkir
                            </Card.Text>
                            <Button variant="primary">Cek lokasi</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title>Motor</Card.Title>
                            <Card.Text>
                                Lokasi Parkir
                            </Card.Text>
                            <Button variant="primary">Cek lokasi</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='mt-4 mb-'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Body>
                            <Card.Title>Motor</Card.Title>
                            <Card.Text>
                                Lokasi Parkir
                            </Card.Text>
                            <Button variant="primary">Cek lokasi</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Content