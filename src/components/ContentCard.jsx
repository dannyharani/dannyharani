import Card from "react-bootstrap/Card";

function ContentCard({cardType, cardTitle, cardContent, image, colour}) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardContent}</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ContentCard;