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
  import { updateBannerData } from "../../redux/DataReducer/action";
  import { EditIcon, Icon } from "@chakra-ui/icons";

  
  export function AdminUpdate1({ id,abc, products, dispatch, getBannerData }) {
    //console.log('yay5',abc.length);

    const [productName, setProductName] = useState("");
    const [productLink, setProductLink] = useState("");
    const [productLink1, setProductLink1] = useState("");

    const [productCategory, setProductCategory] = useState("");
    const [productPrice, setProductPrice] = useState("");
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleSubmit = (e) => {
      e.preventDefault();
      let target = e.target;
      if (abc?.length===1) {
        const payload = {
          name: productName,
          images: [`${target.link0.value}`],

        };
        dispatch(updateBannerData(id, payload)).then(() => {
          dispatch(getBannerData());
        });
      }
      else if(abc?.length===5) {

        const payload = {
          name: productName,
          images: [`${target.link0.value}`,`${target.link1.value}`,`${target.link2.value}`,`${target.link3.value}`,`${target.link4.value}`],

        };
        dispatch(updateBannerData(id, payload)).then(() => {
          dispatch(getBannerData());
        });
      }
      else {
        const payload = {
          name: productName,
          images: [`${target.link0.value}`,`${target.link1.value}`],

        };
        dispatch(updateBannerData(id, payload)).then(() => {
          dispatch(getBannerData());
        });
      }
      setProductCategory("");
      setProductLink("");
      setProductLink1("");

    };
  
    useEffect(() => {
      if (id) {
        const currentProducts = products.find((item) => item.id === id);
        if (currentProducts) {
          setProductName(currentProducts.name);
          setProductLink(currentProducts.link);
          setProductLink1(currentProducts.link2);
          

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
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <FormLabel>Name</FormLabel>
                <Input
                  placeholder="Name"
                  onChange={(e) => setProductName(e.target.value)}
                  value={productName}
                />
                <FormLabel>Image</FormLabel>
                {abc.map((item,i) => (
                <Input
                  placeholder="Link"
                  name={`link${i}`}
                  
                />))}
                
  
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
  