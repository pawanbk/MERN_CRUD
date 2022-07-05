import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import * as Icon from 'react-bootstrap-icons'

const Book = (props) => {
    const {_id,title,price,author} = props.book;
    const deleteBook = (id) => {
        axios.delete(`http://localhost:9000/api/books/${id}`).then((res)=>{
            swal("Great!", res.data.message, "success");
        })
    }
    return(

        <tr>
            <th scope="row"></th>
            <td>{title}</td>
            <td>{price}</td>
            <td>{author}</td>
            <td><Link to={`/edit/${_id}`} className="btn btn-primary mx-2"><Icon.Pencil /></Link><button className="btn btn-danger" onClick={()=>deleteBook(_id)}><Icon.Trash /></button></td>
        </tr>
    )
}

export default Book;