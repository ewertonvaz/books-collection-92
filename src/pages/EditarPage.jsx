import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Container,
  FloatingLabel,
  
} from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import ConfirmaExclusao from "../components/ConfirmaExclusao";
import image from "../assets/placeholder-book.jpg";
import { formatDateFromApi } from "../util/date.util";

//const ApiURL = "https://ironrest.herokuapp.com/books-collection-92/";
const ApiURL = "https://reader-gov-back.cyclic.app/books/";

function EditarPage() {
  const { livroID } = useParams();

  const [book, setBook] = useState({});
  const [form, setForm] = useState({
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
    dataInicio: "",
    dataConclusao: "",
    tipo: "",
    caminho: "",
    status: "Ler",
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get(
          ApiURL + livroID
        );
        const bookData = {...response.data };
        // Converte as datas recebidas da API
        const { dataInicio, dataConclusao } = bookData;
        if ( dataInicio ) {
          bookData.dataInicio = formatDateFromApi(dataInicio);
        }
        
        if(dataConclusao) {
          bookData.dataConclusao = formatDateFromApi(dataConclusao);
        }
        //
        setBook(bookData);
        setForm(bookData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBooks();
  }, [livroID]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // console.log(form);

  async function handleSubmit(e) {
    e.preventDefault();
    const clone = { ...form };
    delete clone._id;

    try {
      await axios.put(
        ApiURL + livroID,
        clone
      );

      toast.success("Alterações feitas com sucesso!!");
      navigate(`/livro/${livroID}`);
    } catch (error) {
      console.log(error);
      toast.error("As Alterações não foram concluídas");
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "start" }}>Editar Livro</h1>
      <Container>
        <Row>
          <Col className="col-3">
            <img
              variant="top"
              style={{
                width: "14rem",
                height: "20rem",
                marginTop: "30px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
              src={form.imagemCapa ? form.imagemCapa : image}
              alt="capa do livro"
            />

            <div className="buttons">
              <Button
                variant="secondary"
                onClick={handleSubmit}
              >
                Salvar
              </Button>{" "}
              <Link to={`/`} className="btn btn-secondary">
              Voltar
            </Link>
              <ConfirmaExclusao book={book} />
            </div>
          </Col>

          <Col>
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Título"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="titulo"
                  value={form.titulo}
                  onChange={handleChange}
                  placeholder="Insíra o título do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Subtítulo"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="subtitulo"
                  value={form.subtitulo}
                  onChange={handleChange}
                  placeholder="Insíra o subtítulo do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Autor"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="autor"
                  value={form.autor}
                  onChange={handleChange}
                  placeholder="Insíra o nome do autor do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Número de Páginas"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  name="qtdPaginas"
                  value={form.qtdPaginas}
                  onChange={handleChange}
                  placeholder="Insíra o número de páginas do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Última Página Lida"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  name="ultPagLida"
                  value={form.ultPagLida}
                  onChange={handleChange}
                  placeholder="Insíra o número de páginas do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Categoria"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="categoria"
                  value={form.categoria}
                  onChange={handleChange}
                  placeholder="Insíra o gênero do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Tipo"
                className="mb-3"
              >
                {!isLoading && (
                  <Form.Select
                    name="tipo"
                    defaultValue={form.tipo}
                    onChange={handleChange}
                  >
                    <option>Selecione o tipo de Extensão do arquivo</option>
                    <option value="PDF">PDF</option>
                    <option value="ePub">ePub</option>
                    <option value="Fisico">Fisico</option>
                  </Form.Select>
                )}
              </FloatingLabel>
            </Form>
            <div>
              <Form className="dataLeitura">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Leitura iniciada em:"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    style={{ width: "200px" }}
                    name="dataInicio"
                    value={form.dataInicio}
                    onChange={handleChange}
                    // placeholder="Insíra o título do Livro"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Leitura terminada em:"
                  className="mb-3"
                >
                  <Form.Control
                    type="date"
                    style={{ width: "200px" }}
                    name="dataConclusao"
                    value={form.dataConclusao}
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </Form>
            </div>
          </Col>

          <Col className="col">
            <Form>
              <FloatingLabel
                controlId="floatingInput"
                label="Avaliação"
                className="mb-3"
              >
                <Form.Control
                  type="number"
                  name="ranking"
                  value={form.ranking}
                  onChange={handleChange}
                  placeholder="De 1 a 5, quanto você gosta do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Idioma"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="idioma"
                  value={form.idioma}
                  onChange={handleChange}
                  placeholder="Insíra o idioma do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Capa do Livro"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="imagemCapa"
                  value={form.imagemCapa}
                  onChange={handleChange}
                  placeholder="Insíra a URL da capa do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="URL"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="caminho"
                  value={form.caminho}
                  onChange={handleChange}
                  placeholder="Insíra a URL do repositório do Livro"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Status"
                className="mb-3"
              >
                {!isLoading && (
                  <Form.Select
                    name="status"
                    defaultValue={form.status}
                    onChange={handleChange}
                  >
                    <option>Selecione o status de leitura</option>
                    <option value="Lido">Lido</option>
                    <option value="Ler">Quero Ler</option>
                    <option value="Lendo">Lendo</option>
                  </Form.Select>
                )}
              </FloatingLabel>

              <div className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Comentários"
                >
                  <Form.Control
                    as="textarea"
                    name="anotacoes"
                    value={form.anotacoes}
                    onChange={handleChange}
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EditarPage;
