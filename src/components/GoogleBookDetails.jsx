import styles from "./GoogleBookDetails.module.css";
//import { , Modal, Row, Col, Form } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";

function GoogleBookDetails({show, book, hide}) {
    return ( 
    <Modal className={styles.wrapper} show={show} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{book.volumeInfo.title}</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={hide}>
            Fechar
          </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default GoogleBookDetails;