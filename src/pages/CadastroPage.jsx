import { useState } from "react";
import { Form, Button, Row,  Col, Container,Card, FloatingLabel} from "react-bootstrap";
import {Link} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'




function CadastroPage() {
  
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
      dtInicio: "",
      dtTermino: "",
      lido:false,
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
            dtInicio: "",
            dtTermino: "",
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
      <h1 style={{ textAlign: "start" }}>Página de Cadastro</h1>
      <Container>
          <Row>
            <Col className="col-3">
              <Card style={{ width: "14rem", height:"20rem", marginTop:"30px" }}>
                <Card.Img
                  variant="top"
                  src={form.imagemCapa}/>
              </Card>
              <Form>
                <Form.Check className="my-3" name="lido"   
                onChange={handleChecked} type="checkbox" label='Lido'/>    

                <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Leitura iniciada em:"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    name = "dtInicio"
                    value = {form.dtInicio}
                    onChange = {handleChange}
                    // placeholder="Insíra o título do Livro"
                  />
                </FloatingLabel>
              </Form.Group>   

              <Form.Group>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Leitura terminada em:"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    name = "dtTermino"
                    value = {form.dtTermino}
                    onChange = {handleChange}
                  />
                </FloatingLabel>
              </Form.Group>                  
            </Form>
          </Col>
            

            <Col>
            <Form>
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

                            
              <div className="buttons">
              <Form.Group>
              <Button variant="outline-secondary" onClick={handleSubmit}>Salvar</Button>{' '}
              </Form.Group>
              <Form.Group>
              <Link to="/">
              <Button variant="outline-secondary">Voltar</Button>{' '}
              </Link>
              
              </Form.Group>
              </div>
              
              </Form>
            </Col>

            <Col className="col">
              <Form>
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

              <Form.Group>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Capa do Livro"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name = "imagemCapa"
                    value = {form.imagemCapa}
                    onChange = {handleChange}
                    placeholder="Insíra a URL da capa do Livro"
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
              </Form>

            </Col>

          
          </Row>
        
      </Container>
      <footer>
                <div className="footer col-md-12 text-center">
                    <hr />
                    <p>Desenvolvido por Ewerton, Priscila, Roberto e Rodrigo. <br /> Turma ENAP WDFT-92/2022</p>
                </div>
            </footer>
    </div>
  );
}

export default CadastroPage;
