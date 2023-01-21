import {
    useDisclosure,
    Button,
    FormLabel,
    Input,
    Progress,
    Box,
    ButtonGroup,
    Heading,
    Flex,
    FormControl,
    GridItem,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
  } from "@chakra-ui/react";
  
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Parser from 'html-react-parser';

import FilesUpload from "./uploadFile2";
// import QuillToolbar from "./testeditor1";
// import Add from "./testeditor2";
import ImageUpload from "./uploadFile";
import { addData} from "../redux/DataReducer/action";
import { useState } from "react";
import App from "./uploadfile1";
  const AddData = ({ dispatch, getData}) => {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productColor, setProductColor] = useState("");
    const [productColorType, setProductColorType] = useState("");
    const [productGender, setProductGender] = useState("");

    const [productCategory, setProductCategory] = useState("");
    const [productImages, setProductImages] = useState("");
   
    const [productSizes, setProductSizes] = useState("");
    const [productFinalPrice, setProductFinalPrice] = useState("");
    const [productOriginalPrice, setProductOriginalPrice] = useState("");
    const [productReview, setProductReview] = useState("");
    const [productDescription, setProductDescription] = useState("");
    // const [productDescription, setProductDes] = useState("");
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const modules = {
      toolbar:[
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script:  "sub" }, { script:  "super" }],
          ["blockquote", "code-block"],
          [{ list:  "ordered" }, { list:  "bullet" }],
          [{ indent:  "-1" }, { indent:  "+1" }, { align: [] }],
          ["link", "image", "video"],
          ["clean"],
      ],
  };
  // const [value, setValue] = useState('');
    // const productRating = Parser({description});
    const handleSubmit = (e) => {
      e.preventDefault();
      if (productName &&productId && productGender && productCategory && productColor&&productColorType&&productFinalPrice&&productOriginalPrice&&productReview&&productImages) {
        const details = {
          id: productId,
          name: productName,
          color:productColor,
          colortype:productColorType,
          gender: productGender,
          category: productCategory,
          final_price: productFinalPrice,
          original_price:productOriginalPrice,
          reviews: productReview,
          rating: productDescription,
          images:[productImages],

        //   sizes:productSizes
        };
        dispatch(addData(details)).then(() => {
          dispatch(getData());
        });
      }
      setProductId("");
      setProductCategory("");
      setProductColorType("");
      setProductColor("");
      setProductGender("");
      setProductName("");
      setProductOriginalPrice("");
      setProductFinalPrice("");
      // setProductRating("");
      setProductReview("");
      setProductSizes("");
      setProductImages("");
    };
  
    return (
      <>
      
      <Heading w="100%" textAlign={'left'} fontWeight="700" fontStyle={'oblique'} color={'purple'} mb="2%">
        Add Products
      </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mr="5%">
          <FormLabel>Id</FormLabel>
              <Input
                placeholder="Id"
                onChange={(e) => setProductId(e.target.value)}
                value={productId}
              />
          </FormControl>
          <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </FormControl>
              <FormLabel>Color</FormLabel>
              <Input
                placeholder="color"
                onChange={(e) => setProductColor(e.target.value)}
                value={productColor}
              />
              <FormLabel>colortype</FormLabel>
              <Input
                placeholder="colortype"
                onChange={(e) => setProductColorType(e.target.value)}
                value={productColorType}
              />
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Category"
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}
              />
              <FormLabel>gender</FormLabel>
              <Input
                placeholder="gender"
                onChange={(e) => setProductGender(e.target.value)}
                value={productGender}
              />

              <FormLabel>Original_price</FormLabel>
              <Input
                placeholder="original_price"
                onChange={(e) => setProductOriginalPrice(e.target.value)}
                value={productOriginalPrice}
              />
              <FormLabel>Final_price</FormLabel>
              <Input
                placeholder="final_price"
                onChange={(e) => setProductFinalPrice(e.target.value)}
                value={productFinalPrice}
              />
              {/* <FormLabel>Rating</FormLabel>
              <Input
                placeholder="Rate"
                onChange={(e) => setProductRating(e.target.value)}
                value={productRating}
              /> */}
              <FormLabel>Review</FormLabel>
              <Input
                placeholder="Review"
                onChange={(e) => setProductReview(e.target.value)}
                value={productReview}
              />
              <FormLabel>Images</FormLabel>
              <Input
                placeholder="images"
                onChange={(e) => setProductImages(e.target.value)}
                value={productImages}
              />
              <div>
               <FormLabel>Description</FormLabel>
               <ReactQuill modules = {modules} theme="snow" value={productDescription} onChange={setProductDescription} />

               </div>
             
              
                  {/* <Editor/> */}
                  
                  {/* <FileUploadComponent/> */}
                <div>
                  <FormLabel>Images</FormLabel>
                  {/* {<ImageUpload/>} */}
                 
                  {/* {<App/>} */}
                  </div>
                  
              
                <Button bg={"black"} color={"white"} mr={3} type="submit">
               Add
                </Button>
                <Button bg={"black"} color={"white"} mr={3} onClick={onClose}>
                  Close
                </Button>
             
            </form>
            {<FilesUpload/>}
       
      </>
    );
  }
export {AddData};