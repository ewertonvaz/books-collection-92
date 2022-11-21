import { useState } from "react";
import { Form, Button, Row,  Col, Container,Card, FloatingLabel} from "react-bootstrap";
import {Link} from 'react-router-dom'
import image from "../assets/pngwing.com.png";
import axios from 'axios'
import toast from 'react-hot-toast'



function CadastroPage() {
  const [isChecked, setIsChecked]=useState(false)
  const [form, setForm] = useState(
    {
      googleID: "",
      autor: "",
      ranking: 0,
      categoria: "",
      imagemCapa: "",
      idioma: "",
      qtdPaginas: 0,
      titulo: "",
      subtitulo: "",
      ultPagLida: 0,
      anotacoes: "",
      queroLer: {isChecked},
    },
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChecked(e){
    
    setForm({ ...form, [e.target.name]: e.target.checked });
  }
  async function handleSubmit(e){
    e.preventDefault()

    try{
        await axios.post("https://ironrest.herokuapp.com/books-collection-92", form)

        setForm({
            googleID: "",
            autor: "",
            ranking: '',
            categoria: "",
            imagemCapa: "",
            idioma: "",
            qtdPaginas: "",
            titulo: "",
            subtitulo: "",
            ultPagLida: "",
            anotacoes: "",
            lido: false,
        })

        toast.success("Cadastro concluído com sucesso!!")
    } catch (error){
        console.log(error)
        toast.error("o Cadastro não pode ser concluído")
    }
  }
console.log(form)


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Página de Cadastro</h1>
      <Container>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={image}/>
              </Card>
            </Col>
            

            <Col className="col-7">
            <Form >
              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Título"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name = "titulo"
                    value = {form.titulo}
                    onChange = {handleChange}
                    placeholder="Insíra o título do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Subtítulo"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name = "subtitulo"
                    value = {form.subtitulo}
                    onChange={handleChange}
                    placeholder="Insíra o subtítulo do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Autor"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name = "autor"
                    value = {form.autor}
                    onChange={handleChange}
                    placeholder="Insíra o nome do autor do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Número de Páginas"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name = "qtdPaginas"
                    value = {form.qtdPaginas}
                    onChange = {handleChange}
                    placeholder="Insíra o número de páginas do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Categoria"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name = "categoria"
                    value = {form.categoria}
                    onChange = {handleChange}
                    placeholder="Insíra o gênero do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Avaliação"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    name = "ranking"
                    value = {form.ranking}
                    onChange={handleChange}
                    placeholder="De 1 a 5, quanto você gosta do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Idioma"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="idioma"
                    value={form.idioma}
                    onChange = {handleChange}
                    placeholder="Insíra o idioma do Livro"
                  />
                </FloatingLabel>
              </Form.Group>

              <Form.Group className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Comentários"
                >
                  <Form.Control
                    as="textarea"
                    name = "anotacoes"
                    value = {form.anotacoes}
                    onChange={handleChange}
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </Form.Group>
              <div className="buttons">
              <Form.Group>
              <Button variant="outline-success" onClick={handleSubmit}>Salvar</Button>{' '}
              </Form.Group>
              <Form.Group>
              <Link to="/">
              <Button variant="outline-danger">Cancelar</Button>{' '}
              </Link>
              
              </Form.Group>
              </div>
              
              </Form>
            </Col>

            <Col className="col-2">
                <Form>
                <Form.Check  name="lido"   
                onChange={handleChecked} type="checkbox" label='Lido'/>               
                </Form>
             
            </Col>
          </Row>
        
      </Container>
      <footer>

      </footer>
    </div>
  );
}

export default CadastroPage;
