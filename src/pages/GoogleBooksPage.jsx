import axios from "axios";
import { useState } from "react";
import ShowBook from "../components/ShowBook";
import { Container, Col, Row, InputGroup, Form } from "react-bootstrap";
import Paginator from "../components/Paginator";
const apiUrl = "https://www.googleapis.com/books/v1/volumes";

function GoogleBooksPage() {
    const [paginator, setPaginator] = useState({
        startIndex : 0,
        countResults: 0,
        totalItems : 0,
        currPage : 1,
        lastPage : 0
    });

    const maxResults = 16;
    const colCount = 4;
    const rowArray = [];
    let maxPages = maxResults * colCount * 5; //Limitação no totalItem pois este é um valor estimado retornado pela API

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState({});

    let colArray = [];
    let itemCount = 0;

    async function doSearch(startIndex, currPage){
        setLoading(true);
        try {
            const res = await axios.get(
                `${apiUrl}?q=${search.replace(' ', '+')}&startIndex=${startIndex}&maxResults=${maxResults}`);
            maxPages = maxPages <= res.data.totalItems ? maxPages : res.data.totalItems;
            setBooks(res.data);
            setPaginator({...paginator,
                startIndex : startIndex,
                currPage : currPage,
                countResults: res.data.items.length,
                totalItems: maxPages,
                lastPage: Math.ceil(maxPages / maxResults )
            });
        } catch(e) {
            console.log(e);
        }
        setLoading(false);
    }
  
    // useEffect( 
    //     () =>  {},
    //     []
    // );

    function handleSearch(e){
        setSearch( e.target.value )
    }

    return (<Container>
        <InputGroup className="my-3">
            <Form.Control
                placeholder="Digite o livro a pesquisar"
                aria-label="search"
                aria-describedby="basic-addon1"
                name="search"
                value={search}
                onChange={handleSearch}
            />
            <InputGroup.Text id="basic-addon1" onClick={ ()=> doSearch(0,1)} disable={search !== "" ? "true" : "false"}>🔍</InputGroup.Text>
        </InputGroup>
        <Paginator paginator={paginator} maxResults={maxResults} doSearch={doSearch}/>
        {
            Object.keys(books).length === 0 ? <p>Nenhum livro listado</p> 
            :
            loading ? <p>Carregando...</p>  : 
            <>
                {
                    // books.items.map( book => {
                    //     return (
                    //         <ShowBook key={book.id} book={book} />
                    //     );
                    // })

                    books.items && books.items.forEach( book => {
                        colArray.push(<Col key={book.id}><ShowBook key={book.id} book={book} /></Col>);
                        itemCount++;
                        if (itemCount % colCount === 0) { 
                            rowArray.push(<Row key={`row_${itemCount}_${book.name}`} className="my-4"> {colArray} </Row>);
                            colArray = [];
                        }
                        if (itemCount === books.items.length ) {
                            rowArray.push(<Row key={`row_${itemCount+1}_${book.name}`} className="my-4"> {colArray} </Row>);
                            colArray = [];
                        }
                    })
                }
                { rowArray.length > 0 ? rowArray : colArray }
            </>
        }
    </Container> );
}

export default GoogleBooksPage;