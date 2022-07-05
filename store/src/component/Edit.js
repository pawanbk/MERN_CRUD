import axios from 'axios';
import React, { useEffect,useState} from 'react';
import { useParams,Link } from 'react-router-dom';
import swal from 'sweetalert';

const Edit = () => {
    const {id} = useParams();
    const[book,setBook] = useState({
        title: '',
        price: '',
        author:''
    })

    const fetchBook = async () =>{
        return await axios.get(`http://localhost:9000/api/books/${id}`).then((res)=>setBook(res.data.book));
    }

    useEffect(()=>{
        fetchBook();
    },[])
    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:9000/api/books/${id}`,book).then((res)=>
        swal('Great!', res.data.message,'success'));
    }
    
    const changeHandler = (e) => {
        setBook({...book,[e.target.name]:e.target.value});
    }
    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler}>
                <h5 className="text-center">Update Book</h5>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" onChange={changeHandler} value= {book.title} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" onChange={changeHandler} value= {book.price} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" name="author" onChange={changeHandler} value= {book.author} required/>
                </div>
                <Link to="/" className="btn btn-danger mx-2">Back</Link><button className="btn btn-info">Update</button>
            </form>
        </div>
    )
}

export default Edit;