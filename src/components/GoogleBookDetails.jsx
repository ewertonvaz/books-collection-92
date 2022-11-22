import styles from "./GoogleBookDetails.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Modal, Button, Row, Col, Image } from "react-bootstrap";
import Rating from "./shared/Rating";
import axios from "axios";
import{ useState, useEffect } from "react";
import toast from "react-hot-toast";

const apiUrl = "https://ironrest.herokuapp.com/books-collection-92";
const finOneUrl = "https://ironrest.herokuapp.com/findOne/books-collection-92";

function GoogleBookDetails({show, book, hide}) {
    const [ imported, setImported] = useState(false);
    const [ openEdit, setOpenEdit] = useState(true);
    const [ lastImport, setLastImport] = useState({});
    const { volumeInfo } = book;
    const images = volumeInfo.imageLinks ? Object.values(volumeInfo.imageLinks) : [];
    const navigator = useNavigate();

    useEffect( () => {
      // console.log('mudei o livro', book);
      findBook(book.id);
    }, [book]);

    async function importBook(){
      if (!volumeInfo) {
        return
      }

      const newBook = {
        googleID: book.id,
        autor: volumeInfo.authors ? volumeInfo.authors[0] : "",
        ranking: 0,
        categoria: volumeInfo.categories ? volumeInfo.categories[0] : "",
        imagemCapa: images[0],
        idioma: volumeInfo.language,
        qtdPaginas: volumeInfo.pageCount,
        titulo: volumeInfo.title,
        subtitulo: volumeInfo.subtitle,
        ultPagLida: 0,
        anotacoes: "",
        dtInicio: null,
        dtTermino: null,
        lido: false,
        status: "ler"
      };
      try {
        const res = await axios.post( apiUrl, newBook );
        //console.log(res.data.ops[0]);
        setLastImport( () => res.data.ops[0] );
        setImported(true);
        if (openEdit) {
          navigator(`/livro/${res.data.ops[0]._id}/editar`);
        } else {
          handleClose();
        }
        toast.success("O livro foi importado com sucesso!");
      } catch(e) {
        console.log(e);
        toast.error("Algo deu errado. Tente novamente por favor.");
      }
      console.log('livro importado :', lastImport);
    }

    function handleClose(){
      hide();
    }

    function handleChecked(e) {
      setOpenEdit( e.target.checked );
    }

    async function findBook(id){
      if (!id) {
        return;
      }
      try {
        const res = await axios.get( finOneUrl + `?googleID=${id}` );
        if (res.data && id === res.data.googleID){
          setLastImport(res.data);
          setImported(true);
        } else {
          setImported(false);
        }
      } catch(e) {
        console.log(e)
      }
    }

    return ( 
    <Modal className={styles.wrapper} show={show} size="xl">
        <Modal.Header closeButton onClick={handleClose}>
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
          <Row style={{width:"100%", alignItems: "center"}}>
            <Col>
              { !imported &&        
                <Button variant="primary" onClick={importBook}>
                  Importar
                </Button>
              }
            </Col>
            <Col>
              { !imported &&
                <Form.Check
                    className="my-3"
                    checked={openEdit}
                    name="openEdit"
                    onChange={handleChecked}
                    type="checkbox"
                    label="Editar após importação"
                  />
              }
            </Col>
            <Col>
              { imported &&
                <Link to={`/livro/${lastImport._id}/editar`} className="btn btn-secondary">Editar</Link>
              }
            </Col>
            <Col>
              <Button variant="primary" onClick={handleClose}>
                Fechar
              </Button>
            </Col>
          </Row>          
        </Modal.Footer>
    </Modal>
    );
}

export default GoogleBookDetails;