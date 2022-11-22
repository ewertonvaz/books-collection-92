import styles from "./GoogleBookDetails.module.css";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";
import Rating from "./shared/Rating";

function GoogleBookDetails({show, book, hide}) {
    const {volumeInfo} = book;
    const images = volumeInfo.imageLinks ? Object.values(volumeInfo.imageLinks) : [];

    return ( 
    <Modal className={styles.wrapper} show={show} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Image src={images[0]} />
              <Rating color="gold" width="180px">{volumeInfo.averageRating}</Rating>
            </Col>
            <Col>
              <h1>{volumeInfo.title}</h1>
              <h2>{volumeInfo.subtitle}</h2>
              <p>{volumeInfo.description ? volumeInfo.description.substring(0, 1000) + "..." : ""}</p>
            </Col>
            <Col>
              
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>        
          <Button variant="primary" onClick={hide}>
            Fechar
          </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default GoogleBookDetails;