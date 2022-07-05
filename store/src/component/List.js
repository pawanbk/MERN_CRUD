import axios from 'axios';
import { useEffect, useState } from 'react';
import Book from './Book';
import {Link} from 'react-router-dom'
import * as Icon from 'react-bootstrap-icons';

const List = () => {
    const [books, setBooks] = useState();
    const getBooks = () => {
        axios.get('http://localhost:9000/api/books/').then(res => setBooks(res.data.books) )
    }

    useEffect(()=>{
        getBooks();
    },[getBooks])
  return(
    <div className="container mt-5">
        <Link to="/add" className="btn btn-info mb-4">Add Book<Icon.PlusCircle className="mx-2"/></Link>
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Author</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {books && books.map((book,key)=>
                   <Book key={key} book={book}/>
                )}
            </tbody>
        </table> 
    </div>
  )
}

export default List;