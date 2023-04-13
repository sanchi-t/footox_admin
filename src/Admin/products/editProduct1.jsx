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
  import { useState } from "react";
  import { updateData, getData } from "../../redux/DataReducer/action";
  import { EditIcon, Icon } from "@chakra-ui/icons";
  
  
  export function ProductUpdate({ id, products, dispatch}) {
    const [productName, setProductName] = useState("");
    const [Sizes, setSizes] = useState("");
    const [color, setProductColor] = useState([]);
    const [originalPrice, setOriginalPrice] = useState('')
    const [productPrice, setProductPrice] = useState("");
    console.log(originalPrice, 'asdfg')
    var today = new Date(),
 
     
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (productName && Sizes && color && productPrice) {
        if(typeof color != 'object' ){
          color = color.split(",");
        }
        // console.log(array, 'color');
        const payload = {
          productName: productName,
          original_price: originalPrice,
          selling_price: productPrice,
          modifiedDate: date,
        };
        dispatch(updateData(id, payload)).then(() => {
          dispatch(getData());
          console.log('hello')
        });
      }
      setProductColor([]);
      setSizes([]);
      setOriginalPrice("");
      setProductName("");
      setProductPrice("");
    };
  
    useEffect(() => {
      if (id) {
        const currentProducts = products.find((item) => item.productId === id);
        if (currentProducts) {
          setProductName(currentProducts.productName);
          setProductColor(currentProducts.color);
          setOriginalPrice(currentProducts.original_price);
          setSizes(currentProducts.Sizes);
          setProductPrice(currentProducts.selling_price);
        }
      }
    }, [id, products]);
    return (
      <>
        <Button onClick={onOpen}>
          <Icon as={EditIcon} />
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name"
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                />
          
                <FormLabel>Original Price</FormLabel>
                <Input
                  placeholder="original price"
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  value={originalPrice}
                />
                <FormLabel>Selling Price</FormLabel>
                <Input
                  placeholder="Price"
                  onChange={(e) => setProductPrice(e.target.value)}
                  value={productPrice}
                />
  
                <ModalFooter>
                  <Button bg={"black"} color={"white"} mr={3} type="submit">
                    Update
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
  