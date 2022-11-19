import styles from "./ShowBook.module.css";
import { Card, Button } from 'react-bootstrap';

function ShowBook({book}) {
    const { volumeInfo } = book;
    const images = volumeInfo.imageLinks ? Object.values(volumeInfo.imageLinks) : [];
    return ( 
        <Card className={styles["wrapper"]}>
            <Card.Img variant="top" src={images[0]} alt="capa do livro"/>
            <Card.Body>
                <Card.Title>{volumeInfo.title}</Card.Title>
                <Card.Text>{volumeInfo.description && volumeInfo.description.substring(0, 128) + '...'}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      </Card>
    );
}

export default ShowBook;