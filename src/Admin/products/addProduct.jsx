import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useDispatch } from "react-redux";
import { Switch, FormLabel, FormControl, SimpleGrid } from '@chakra-ui/react'
import { Heading } from "@chakra-ui/react";
// import {useNavigate} from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Select } from '@chakra-ui/react'

import AdminNavbar from "../AdminNavbar";
function AddProduct() {

    const [check, setCheckbox] = useState([])
    const [color, setColor] = useState([]);
    const [showhide, setShowhide] = useState('');
    const [gender, setGender] = useState('');
    const mystyle = {
        padding: "10px",
        // fontFamily: "Arial"
        float: 'left'
    };
    var img = [];
    const state = {
        button: 1
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
            ["link"],
            ["clean"],
        ],
    };

    const [productInput, setProduct] = useState({
        product_id: '',
        productName: '',
        description: '',
        selling_price: '',
        original_price: '',

        category: '',
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
        // e.persist();
        setProduct({ ...productInput, [e.target.name]: e.target.value });
    }
    // const handleClick = () => {
    //     navigate("/viewProduct",{state:{status: "Stock update pending"}});
    // }
    const handleGender = (e) => {
        // let gen = gender;
       const  gen = e.target.value
        setGender(gen);
       
    }

    const handleImage = (e) => {
        // if (Array.from(e.target.files).length > MAX_LENGTH) {
        //     e.preventDefault();
        //     alert(`Cannot upload files more than ${MAX_LENGTH}`);

        // } else {
             img = e.target.files;
        // setPicture({ image: e.target.files });
        setPicture(e.target.files)
        // }
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
        // let data = check;
        // data.push(e.target.value);
        // setCheckbox(data);
        // alert(data);
        // console.log(e.target)
        const { value, checked } = e.target;
        console.log(`${value} is ${checked}`);

        if (checked) {
            
            check.push(e.target.value);
        } else {
            // setCheckbox(check.filter((e) => e !== value));
            check.pop(e.target.value)
        }
        console.log(check);
    }

    const submitProduct = (e) => {
        e.preventDefault();
        if (state.button === 1) {
            const formData = new FormData();
            for (const key of Object.keys(pricture)) {
                formData.append('image', pricture[key])
            }
            // formData.append('image', pricture.image);
            formData.append('productId', productInput.productId);
            formData.append('productName', productInput.productName);
            formData.append('productGender', gender);
            formData.append('description', productDescription);
            formData.append('CurrentDate', date);
            formData.append("UpdatedDate", date);
            for (const key of Object.keys(color)) {
                formData.append('color', color[key])
            }
            formData.append('selling_price', productInput.selling_price);
            formData.append('original_price', productInput.original_price);
            formData.append('Status', "Stock update Pending!");
            formData.append('Quantity', 0);
            console.log(sizes);
            for (const key of Object.keys(sizes)) {
                formData.append('Sizes',
                    sizes[key])
            }


            formData.append('category', productInput.category);


            axios.post('http://localhost:4000/admin3/', formData).then(res => {
                console.log(res.status);
                // if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setProduct({
                    ...productInput,
                    productId: '',
                    productName: '',
                   
                    description: '',
                    selling_price: '',
                    original_price: '',
                    category: '',
                });
                setError([]);
                // dispatch(addData(formData)).then(() => {
                //     dispatch(getData());
                //   });

                console.log(formData);

                // else if (res.data.status === 422) {
                //     swal("All Fields are mandetory", "", "error");
                //     setError(res.data.errors);
                // }
            });
        } else if (state.button === 2) {
            let shoeSize = sizes;
            const check1 = [...check];
            while (check.length > 0) {
                check.pop();
            }
            shoeSize.push(check1);
            setSizes(shoeSize);

            setShowhide('');
            // console.log(gender)

            console.log(sizes);
            // console.log(pricture.image[0]);


        }

    }

    return (
        <>
            <AdminNavbar />
            <br />
            <div className="container-fluid px-4 ">
                <div className="card mt-4">
                    <div className="card-header">
                        <Heading >Add Product
                        </Heading>

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
                                    {/* <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">Price</button> */}
                                    <Link to="/viewProduct" className='nav-link' style={{ float: 'right' }}>View Product</Link>
                                </li>

                            </ul>
                            <div className="tab-content row" id="myTabContent">
                                <div className="tab-pane card-body border fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <br></br>
                                    <div className='row g-0'>
                                        <div className='col-sm-6 col-md-border'>


                                            <div className="form-group row mb-3 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label  " style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Product Name</p></label>
                                                <div className='col-sm-8 gx-5 mb-3'>
                                                    <input type="text" name="productName" onChange={handleInput} value={productInput.productName} className="form-control" style={{ borderColor: 'grey' }} />
                                                    <small className="text-danger">{errorlist.productName}</small>
                                                </div>
                                                {/* <div className="form-group mb-3 col-md-6"> */}
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Product Id</p></label>
                                                <div className='col-sm-8 '>
                                                    <input type="text" name="productId" onChange={handleInput} value={productInput.productId} className="form-control" style={{ borderColor: 'grey' }} />
                                                    <small className="text-danger">{errorlist.productId}</small>
                                                </div>
                                            </div>

                                            <div className="form-group row mb-3 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Selling Price </p></label>
                                                <div className='col-sm-8 mb-3'>

                                                    <input type="text" name="selling_price" onChange={handleInput} value={productInput.selling_price} className="form-control" style={{ borderColor: 'grey' }} />
                                                    <small className="text-danger">{errorlist.selling_price}</small>

                                                </div>
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Original price</p></label>
                                                <div className='col-sm-8'>
                                                    <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" style={{ borderColor: 'grey' }} />
                                                    <small className="text-danger">{errorlist.original_price}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className="form-group row mb-5 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Gender</p></label>
                                                <div className='col-sm-8 mb-3'>
                                                    {/* <input type="text" name="productGender" onChange={handleInput} value={productInput.Gender} className="form-control" style={{ borderColor: 'grey' }} /> */}

                                                    <Select name="Color" className="form-control" onChange={(e) => (handleGender(e))} style={{ borderColor: 'grey' }} placeholder="--Select Gender--">
                                                    {/* <option value="">--Select Color--</option> */}
                                                    <option value="Men">Men</option>
                                                    <option value="Women">Women</option>
                                                    <option value="Universal">Universal</option>
                                                    {/* <option value="Grey">Grey</option>
                                                    <option value="White">White</option> */}
                                                </Select>
                                                    <small className="text-danger">{errorlist.Gender}</small>
                                                </div>

                                                {/* <div className="form-group mb-3"> */}
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Category</p></label>

                                                <div className='col-sm-8'>
                                                    <input type="text" name="category" onChange={handleInput} value={productInput.category} className="form-control" style={{ borderColor: 'grey' }} />
                                                    <small className="text-danger">{errorlist.category}</small>
                                                </div>
                                            </div>

                                            <div className="form-group row mb-5 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Description</p></label>
                                                <div className='col-sm-10'>
                                                    <ReactQuill modules={modules} theme="snow" name="description" value={productDescription} onChange={setProductDescription} />
                                                </div>

                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}></p></label>

                                                <div className='col-sm-6'>
                                                    {/* <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control" style={{ borderColor: 'grey' }} />
                                                <small className="text-danger">{errorlist.category}</small> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br></br>
                                    {/* <button type="submit" className="btn btn-primary  form-group mb-4 px-3 mt-2 float-end" >Submit</button> */}
                                </div>
                                {/* <div className="tab-pane card-body border fade" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
                                    
                                    <div className="form-group mb-3">
                                        <label>SellingPrice</label>
                                        <input type="text" name="selling_price" onChange={handleInput} value={productInput.selling_price} className="form-control" style={{borderColor: 'grey'}}/>
                                        <small className="text-danger">{errorlist.selling_price}</small>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>OriginalPrice</label>
                                        <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" style={{borderColor: 'grey'}}/>
                                        <small className="text-danger">{errorlist.original_price}</small>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Category</label>
                                        <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control" style={{borderColor: 'grey'}}/>
                                        <small className="text-danger">{errorlist.category}</small>
                                    </div>
        
                                    <button type="submit" className="float-end">Submit</button>

                                </div> */}
                                <div className="tab-pane card-body border fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">

                                    <div className="form-group row">
                                        <div className="form-group row">

                                            {/* <div className="form-group row" > */}
                                            {/* <label className="col-sm-2 col-form-label"><p style={{ fontSize: "x-large" }}>Select Color</p></label> */}

                                            <div className='col-sm-5'>
                                                <Select name="Color" className="form-control" onChange={(e) => (handleshowhide(e))} style={{ borderColor: 'grey' }} placeholder="--Select Color--">
                                                    {/* <option value="">--Select Color--</option> */}
                                                    <option value="Red">Red</option>
                                                    <option value="Black">Black</option>
                                                    <option value="Green">Green</option>
                                                    <option value="Grey">Grey</option>
                                                    <option value="White">White</option>
                                                </Select>
                                            </div>
                                        </div>
                                        <br></br><br></br>

                                        {
                                            showhide !== '' && (

                                                <>

                                                    <div className='row col-sm-8'>
                                                        <div className="col-md-10 form-group mb-2" >
                                                            <label style={{ float: 'left' }}><p style={{ fontSize: "x-large" }}>Select Sizes</p></label> <br /><br />
                                                        </div>

                                                        {/* <div className='col-sm-3 '>


                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="2"
                                                                value="2"
                                                                reverse
                                                                inline
                                                                style={mystyle}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />


                                                        </div> */}
                                                        {/* <div className="col-sm-3 mb-3">

                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="3"
                                                                reverse
                                                                value="3"
                                                                inline
                                                                style={mystyle}
                                                                // name='grp1'
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label='4'
                                                                value="4"
                                                                padding='10px'
                                                                reverse
                                                                style={mystyle}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div> */}
                                                        {/* <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="5"
                                                                value="5"
                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div> */}
                                                        {/* <div className="col-sm-3 form-group mb-3">
                                                            
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="6"
                                                                value="6"
                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div> */}
                                                        {/* <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="7"
                                                                value="7"

                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="8"
                                                                value="8"
                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div> */}
                                                        {/* <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="9"
                                                                value="9"

                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="10"
                                                                value="10"
                                                                reverse
                                                                style={{ float: 'left' }}

                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="11"
                                                                value="11"

                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />
                                                        </div>
                                                        <div className="col-sm-3 form-group mb-3">
                                                            <Form.Check
                                                                type="switch"
                                                                id="custom-switch"
                                                                label="12"
                                                                value="12"

                                                                reverse
                                                                style={{ float: 'left' }}
                                                                onChange={(e) => getCheckbox(e)}
                                                            />

                                                        </div> */}

                                                        <FormControl as={SimpleGrid} columns={{ base: 2, lg: 10 }} spacingX='60px'>
                                                            <FormLabel htmlFor='2'>2</FormLabel>
                                                            <Switch id='2' value='2' onChange={(e) => getCheckbox(e)} />

                                                            <FormLabel htmlFor='3'>3</FormLabel>
                                                            <Switch id='3' value='3' onChange={(e) => getCheckbox(e)} />

                                                            <FormLabel htmlFor='4'>4</FormLabel>
                                                            <Switch id='4' onChange={(e) => getCheckbox(e)} value='4' />

                                                            <FormLabel htmlFor='5'>5</FormLabel>
                                                            <Switch id='5' onChange={(e) => getCheckbox(e)} value='5' />

                                                            <FormLabel htmlFor='6'>6</FormLabel>
                                                            <Switch id='6' onChange={(e) => getCheckbox(e)} value='6' />

                                                            <FormLabel htmlFor='7'>7</FormLabel>
                                                            <Switch id='7' onChange={(e) => getCheckbox(e)} value='7' />

                                                            <FormLabel htmlFor='8'>8</FormLabel>
                                                            <Switch id='8' onChange={(e) => getCheckbox(e)} value='8' />

                                                            <FormLabel htmlFor='9'>9</FormLabel>
                                                            <Switch id='9' onChange={(e) => getCheckbox(e)} value='9' />

                                                            <FormLabel htmlFor='10'>10</FormLabel>
                                                            <Switch id='10' onChange={(e) => getCheckbox(e)} value='10' />

                                                            <FormLabel htmlFor='11'>11</FormLabel>
                                                            <Switch id='11' onChange={(e) => getCheckbox(e)} value='11' />

                                                            <FormLabel htmlFor='12'>12</FormLabel>
                                                            <Switch id='12' onChange={(e) => getCheckbox(e)} value='12' />
                                                        </FormControl>
                                                    </div>

                                                    <div className="col-md-6 form-group mb-3" >
                                                        <br></br>
                                                        <label style={{ float: 'left' }}><p style={{ fontSize: "x-large" }}>Images</p></label> <br /><br />

                                                        {/* <div className="col-md-6 form-group mb-3" > */}

                                                        <input type="file" name="image" onChange={handleImage} className="form-control" multiple />
                                                        <small className="text-danger">{errorlist.image}</small>
                                                        <br></br>

                                                        <button className="btn btn-primary col-md-2 form-group mb-3 float-end" onClick={() => (state.button = 2)}>Done</button>
                                                    </div>

                                                    {/* </div> */}
                                                </>


                                            )}


                                    </div>
                                    <button type="submit" className="btn btn-success  form-group mb-4 px-3 mt-2 float-end" >Submit</button>
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