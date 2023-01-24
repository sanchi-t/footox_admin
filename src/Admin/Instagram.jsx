import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import AdminNavbar from './AdminNavbar';
import axios from 'axios';
import swal from 'sweetalert';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export function MyForm() {
    const data1 = new FormData();

    const [linkInput, setLink] = useState({
        link1: '',
        link2: '',
        link3: '',


    });
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

    const [productDescription, setProductDescription] = useState("")
    const [productDescription2, setProductDescription2] = useState("")
    const [productDescription3, setProductDescription3] = useState("")

    const handleInput = (e) => {

        setLink({ ...linkInput, [e.target.name]: e.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(linkInput);
        console.log(productDescription);
        console.log(productDescription2);
        console.log(productDescription3);

        data1.append('link1', linkInput.link1);
        data1.append('link2', linkInput.link2);
        data1.append('link3', linkInput.link3);
        data1.append('productDescription',productDescription);
        data1.append('productDescription2',productDescription2);
        data1.append('productDescription3',productDescription3);


        console.log(data1.get('link1'));
        axios.post('http://localhost:4000/links/', data1).then(res => {
            console.log(res.status);

            alert("Success", res.data.message, "success");
            setLink({
                ...linkInput,
                link1: '',
                link2: '',
                link3: '',
            });
        });
    }



    return (
        <>
            <AdminNavbar />
            <form >
                <br />
                <h1 style={{ fontSize: '40px' }}>Social Media Links</h1>
                <br /><br />
                <div className="form-group row mb-3 gx-5 g-0">
                    <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ marginLeft: '-1035px' }}>Link 1 </p></label>
                    <div className='col-sm-4 mb-3' style={{ marginLeft: '170px' }}>

                        <input type="text" name="link1" className="form-control" onChange={handleInput} value={linkInput.link1} style={{ borderColor: 'grey' }} />


                    </div>
                    <div className='col-sm-4'>
                        <ReactQuill modules={modules} theme="snow" name="description" value={productDescription} onChange={setProductDescription} />
                    </div>

                    <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ marginLeft: '-1035px' }}>Link 2</p></label>
                    <div className='col-sm-4 mb-3' style={{ marginLeft: '170px' }}>
                        <input type="text" name="link2" className="form-control" onChange={handleInput} value={linkInput.link2} style={{ borderColor: 'grey' }} />


                    </div>
                    <div className='col-sm-4'>
                        <ReactQuill modules={modules} theme="snow" name="description" value={productDescription2} onChange={setProductDescription2} />
                    </div>
                    {/* <button className="btn btn-primary col-md-1 form-group mb-3 float-end" onClick={handleSubmit2}>Save</button> */}

                    <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ marginLeft: '-1035px' }}>Link 3</p></label>
                    <div className='col-sm-4' style={{ marginLeft: '170px' }}>
                        <input type="text" name="link3" onChange={handleInput} value={linkInput.link3} className="form-control" style={{ borderColor: 'grey', float: 'left' }} />

                    </div>
                    <div className='col-sm-4  mb-3'>
                        <ReactQuill modules={modules} theme="snow" name="description" value={productDescription3} onChange={setProductDescription3} />
                    </div><br/><br/>
                    <button style={{ float: 'right' }} className="btn btn-primary col-md-4.5 form-group mb-3 float-end" onClick={handleSubmit}>Save</button>


                </div>


            </form>
        </>
    )
}