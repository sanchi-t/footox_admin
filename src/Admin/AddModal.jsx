import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormLabel,
    Input,
  } from "@chakra-ui/react";
  import { useEffect } from "react";
 
// import { updateData} from "../redux/DataReducer/action";
import { addData} from "../redux/DataReducer/action";
//   import { EditIcon, Icon } from "@chakra-ui/icons";
import { useState } from "react";

  
  export function AddData({ dispatch, getData }) {
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
    const [productRating, setProductRating] = useState("");
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSubmit = (e) => {
      e.preventDefault();
      if (productName &&productId && productGender && productCategory && productColor&&productColorType&&productFinalPrice&&productOriginalPrice&&productRating&&productReview&&productImages) {
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
          rating: productRating,
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
      setProductRating("");
      setProductReview("");
      setProductSizes("");
      setProductImages("");
    };
  
    // useEffect(() => {
      
    //     if (currentProducts) {
    //       setProductName(currentProducts.name);
    //       setProductGender(currentProducts.gender);
    //       setProductCategory(currentProducts.category);
    //       setProductPrice(currentProducts.final_price);
    //     }
     
    // });
    return (
      <>
    <Button onClick={onOpen}>Add products</Button>
    <Modal  isOpen = {isOpen}
           
          onClose={onClose}>
         
        <ModalOverlay />
        <ModalContent>
          <ModalHeader 
          >Modal Title
          
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <form onSubmit={handleSubmit}>
          <FormLabel>Id</FormLabel>
              <Input
                placeholder="Id"
                onChange={(e) => setProductId(e.target.value)}
                value={productId}
              />
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
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
              <FormLabel>Rating</FormLabel>
              <Input
                placeholder="Rate"
                onChange={(e) => setProductRating(e.target.value)}
                value={productRating}
              />
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

              {/* <FormLabel>sizes</FormLabel>
              <Input
                placeholder="size"
                onChange={(e) => setProductSizes(e.target.value)}
                value={productSizes}
              /> */}
  

              <ModalFooter>
                <Button bg={"black"} color={"white"} mr={3} type="submit">
                  Add
                </Button>
                <Button bg={"black"} color={"white"} mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
    );
  }