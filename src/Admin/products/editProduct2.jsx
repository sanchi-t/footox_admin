import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Parser from 'html-react-parser';
import { useDispatch } from "react-redux";
import FilesUpload from "../uploadFile2";
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ImageUpload from "../uploadFile";
import Form from 'react-bootstrap/Form';
import { addData } from "../../redux/DataReducer/action";
import { getData } from "../../redux/DataReducer/action";
import { Select } from '@chakra-ui/react'
import App from "../uploadfile1";
import AdminNavbar from "../AdminNavbar";
function AddProduct() {
    const [categorylist, setCategorylist] = useState([]);
    const [check, setCheckbox] = useState([])
    const [color, setColor] = useState([]);
    const [showhide, setShowhide] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const state = {
        button:1
    };
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const [productInput, setProduct] = useState({
        product_id: '',
        productName: '',
        productGender: '',
        description: '',
        selling_price: '',
        original_price: '',
       
        brand: '',
        featured: '',
        
    });
    const [pricture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);
    const [productDescription, setProductDescription] = useState("");
    const [sizes, setSizes] = useState([]);
    const dispatch = useDispatch();
    var today = new Date(),
 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const handleInput = (e) => {

        setProduct({ ...productInput, [e.target.name]: e.target.value });
    }
    const handleImage = (e) => {
        const MAX_LENGTH = 4 * check.length;
       
            setPicture({ image: e.target.files });
    }
    const handleshowhide = (e) => {
        e.preventDefault();
        const getuser = e.target.value;
        setShowhide(getuser);
        let data = color;
        data.push(e.target.value);
        setColor(data);

        console.log(data);

    }


    const getCheckbox = (e) => {
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);

        if (checked) {
            check.push(e.target.value);
        } else {
            check.pop(e.target.value)
        }
        console.log(check);
    }

    const submitProduct = (e) => {
        e.preventDefault();
    if(state.button===1){
        const formData = new FormData();
        for (const key of Object.keys(pricture.image)) {
            formData.append('image', pricture.image[key])
        }
        
        formData.append('productId', productInput.productId);
        formData.append('productName', productInput.productName);
        formData.append('productGender', productInput.productGender);
        formData.append('description', productDescription);
        formData.append('CurrentDate', date);
        formData.append("UpdatedDate", date);
        for (const key of Object.keys(color)) {
            formData.append('color', color[key])
        }
        formData.append('selling_price', productInput.selling_price);
        formData.append('original_price', productInput.original_price);
        formData.append('Status', "Stock update Pending!")
        for (const key of Object.keys(sizes)) {
            formData.append('Sizes', sizes[key])
        }
        // formData.append('Sizes', check);
        formData.append('brand', productInput.brand);
        

        axios.post('http://localhost:4000/admin3/', formData).then(res => {
            console.log(res.status);
            // if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setProduct({
                    ...productInput,
                    productId: '',
                    productName: '',
                    productGender: '',
                    description: '',
                    selling_price: '',
                    original_price: '',
                    brand: '',
                });
                setError([]);
                console.log(formData);
        });
    }else if(state.button===2){
        let shoeSize = sizes;
        const check1 = [...check];
        while(check.length>0){
            check.pop();
        }
        shoeSize.push(check1);
        setSizes(shoeSize);

        setShowhide('');
        
        console.log(sizes);

        
    }

    }

    return (
        <>
            <AdminNavbar />
            <br />
            <div className="container-fluid px-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <h4>Add Product
                            <Link to="/viewProduct" className="btn btn-primary btn-sm float-end">View Product</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitProduct} encType="multipart/form-data">

                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                </li>
                                
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">Other Details</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">Price</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                    <div className="form-group mb-3">
                                        <label>Product Name</label>
                                        <input type="text" name="productName" onChange={handleInput} value={productInput.productName} className="form-control" style={{borderColor: 'blue'}}/>
                                        <small className="text-danger">{errorlist.productName}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Product Id</label>
                                        <input type="text" name="productId" onChange={handleInput} value={productInput.productId} className="form-control" style={{borderColor: 'blue'}}/>
                                        <small className="text-danger">{errorlist.productId}</small>
                                    </div>
                                    <div className="form-group mb-3" >
                                        <label>Gender</label>
                                        <input type="text" name="productGender" onChange={handleInput} value={productInput.Gender} className="form-control" style={{borderColor: 'blue'}}/>
                                        <small className="text-danger">{errorlist.Gender}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Description</label>

                                        <ReactQuill modules={modules} theme="snow" name="description" value={productDescription} onChange={setProductDescription} />
                                    </div>

                                </div>
                                <div className="tab-pane card-body border fade" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
                                    
                                    <div className="form-group mb-3">
                                        <label>Selling Price</label>
                                        <input type="text" name="selling_price" onChange={handleInput} value={productInput.selling_price} className="form-control" style={{borderColor: 'blue'}}/>
                                        <small className="text-danger">{errorlist.selling_price}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Original Price</label>
                                        <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" style={{borderColor: 'blue'}}/>
                                        <small className="text-danger">{errorlist.original_price}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Brand</label>
                                        <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control" style={{borderColor: 'blue'}}/>
                                        <small className="text-danger">{errorlist.brand}</small>
                                    </div>     
                                    <button type="submit" className="btn btn-primary  form-group mb-3 px-3 mt-1" >Submit</button>
                                    
                                    
                                </div>
                                <div className="tab-pane card-body border fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">

                                    <div className="row">

                                        
                                        <label><p style={{ fontSize: "x-large" }}>Select Color</p></label>
                                        <br /><br />

                                        <div className="col-md-6 form-group mb-3 " >
                                            <Select name="Color" className="form-control" onChange={(e) => (handleshowhide(e))} style={{borderColor: 'blue'}} placeholder="--Select Color--">
                                                <option value="Red">Red</option>
                                                <option value="Black">Black</option>
                                                <option value="Green">Green</option>
                                                <option value="Grey">Grey</option>
                                            </Select>
                                        </div>
                                        
                                        {
                                            showhide !== '' && (


                                                <div className="row">
                                                    <label><p style={{ fontSize: "x-large" }}>Select sizes</p></label> <br /><br />

                                                    <div className="col-sm-3 form-group mb-3">

                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="2"
                                                            value="2"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3  mb-3">

                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="3"
                                                            value="3"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="4"
                                                            value="4"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="5"
                                                            value="5"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="6"
                                                            value="6"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="7"
                                                            value="7"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="8"
                                                            value="8"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="9"
                                                            value="9"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="10"
                                                            value="10"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="11"
                                                            value="11"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        <Form.Check
                                                            type="switch"
                                                            id="custom-switch"
                                                            label="12"
                                                            value="12"
                                                            // name='grp1'
                                                            onChange={(e) => getCheckbox(e)}
                                                        />
                                                        
                                                    </div>
                                                    <div className="col-sm-3 form-group mb-3">
                                                        
                                                        
                                                    </div>
                                                    
                                                    <br /><br />
                                                    <label><p style={{ fontSize: "x-large" }}>Images</p></label> <br /><br />
                                                    <label>select 3-4 image</label>
                                                    <div className="col-md-8 form-group mb-3" >

                                                        <input type="file" name="image" onChange={handleImage} className="form-control" multiple />
                                                        <small className="text-danger">{errorlist.image}</small>
                                                    </div>
                                                    <button className="btn btn-primary col-md-1 form-group mb-3" onClick={()=>(state.button = 2)}>Done</button>
                                                </div>
                                                

                                            )}
                                        

                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;