import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate, Link} from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        name: '',
        price:'',
        author:''
    });
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/books',inputs).then((res)=>
        swal('Great',res.data.message,'success')
        );
        navigate('/')
    }
    const changeHandler = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    return(
        <div className="container mt-5">
            <form onSubmit={submitHandler}>
                <h4 className="text-center mb-2">Add New Book</h4>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" name="title" onChange={changeHandler} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="number" className="form-control" name="price" onChange={changeHandler} required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" name="author" onChange={changeHandler} required/>
                </div>
                <Link to="/" className="btn btn-danger mx-2">Back</Link><button className="btn btn-info">ADD</button>
            </form>
        </div>
    )
}

export default Add;