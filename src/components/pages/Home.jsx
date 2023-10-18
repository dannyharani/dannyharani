import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ContentCard from '../ContentCard'

function Home() {
    return (
        <div>
            <div>
                <h1>Hey,</h1>
                <h1>Here is my Portfolio 💡</h1>
            </div>
            <Container>
                <Row>
                    <Col sm={4}><ContentCard cardTitle={"Idea"} cardContent={"SomeType of content"}/></Col>
                    <Col sm={8}><ContentCard cardTitle={"Idea"} cardContent={"SomeType of content"}/></Col>
                </Row>
                <Row>
                    <Col sm={1}>&lt;</Col>
                    <Col><ContentCard cardTitle={"Idea"} cardContent={"SomeType of content"}/></Col>
                    <Col sm={1}>&gt;</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;