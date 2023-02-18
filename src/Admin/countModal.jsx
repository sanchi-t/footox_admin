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
  
  import { updateData } from "../redux/DataReducer/action";
  import { EditIcon, Icon } from "@chakra-ui/icons";
  
  import axios from 'axios';
  import { Box,  Flex,  Heading, Text } from "@chakra-ui/react";
  import { useEffect } from "react";
  import {useRef ,useState } from "react";
  import {useNavigate} from 'react-router-dom';
  import { useLocation } from 'react-router-dom';
  
  import { useDispatch, useSelector } from "react-redux";
  import swal from 'sweetalert';
  
  export function CountModal() {
    const [CSV, setCSV] = useState("");
   
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [count, setCount] = useState([]);
    
    const handleCSV = (e) => {
      setCSV(e.target.files[0])
    }
    const axiosTest1 = async () => {
        const response = await axios.get("http://localhost:4000/count");
        // console.log(response.data)
        setCount(response.data);
      };
      useEffect(() => {
        axiosTest1();
      }, []);
    
    return (
      <>
        {/* <Button colorScheme='teal' variant='outline' onClick={onOpen}>
            Upload
        </Button> */}
        <Modal >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <form onSubmit={handleSubmit} enctype="multipart/form-data"> */}
                {/* <FormLabel>Name</FormLabel> */}
                {/* <input
                  type={'file'}
                  
                  onChange={handleCSV}
                
                /> */}
                Total Rows: {count[2]}    Inserted Rows: {count[3]}
                {/* <ModalFooter>
                  <Button bg={"teal"} color={"white"} mr={1} type="submit" onClick={onClose}>
                    Upload
                  </Button>
                  
                </ModalFooter> */}
              {/* </form> */}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
  