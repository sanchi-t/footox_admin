import React, { Component } from 'react';
import {useState} from 'react';
import axios from 'axios';
import { addImage} from "../redux/DataReducer/action";
import { useDispatch} from "react-redux";
// import { AddData } from "./AddModal";
import { getData } from "../redux/DataReducer/action";
import FileBase64 from 'react-file-base64';

const ImageUpload = () =>{
	const [image, setImage] = useState('');
	const dispatch = useDispatch();
	function handleImage(e){
		console.log(e.target.files);
		setImage(e.target.files[0]);

	}

	function handleAxios(){
		
		const formData = new FormData();
		formData.append('image', image);
		console.log(formData);
		// const aman = {
		// 	image: formData,
		// 	name: "Aman"
		// }
		// console.log(aman)
		// dispatch(addImage(formData)).then(() => {
        //   dispatch(getData());
        // });
		const url = 'http://localhost:4000/admin3/'
		axios.post(url, formData).then=((res)=>
		{
			console.log(res.data)
		})
	}
	return(
		<>
			<input type="file"  name='' onChange={handleImage} multiple/>
			{/* <FileBase64
				multiple={ true }
				onDone={handleImage} /> */}
			<button onClick={handleAxios}>Upload</button>
		</>
	)
}

export default ImageUpload;