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
    const [productPrice, setProductPrice] = useState("");
    var today = new Date(),
 
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSubmit = (e) => {
      e.preventDefault();
      if (productName && Sizes && color && productPrice) {
        const payload = {
          productName: productName,
          original_price: Sizes,
          color: color,
          selling_price: productPrice,
          UpdatedDate: date,
        };
        dispatch(updateData(id, payload)).then(() => {
          dispatch(getData());
        });
      }
      setProductColor([]);
      setSizes([]);
      setProductName("");
      setProductPrice("");
    };
  
    useEffect(() => {
      if (id) {
        const currentProducts = products.find((item) => item.productId === id);
        if (currentProducts) {
          setProductName(currentProducts.productName);
          setProductColor(currentProducts.color);
          setSizes(currentProducts.original_price);
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
                <FormLabel>Color</FormLabel>
                <Input
                  placeholder="Color"
                  onChange={(e) => setProductColor(e.target.value)}
                  value={color}
                />
                <FormLabel>Original Price</FormLabel>
                <Input
                  placeholder="Sizes"
                  onChange={(e) => setSizes(e.target.value)}
                  value={Sizes}
                />
                <FormLabel>Price</FormLabel>
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
  