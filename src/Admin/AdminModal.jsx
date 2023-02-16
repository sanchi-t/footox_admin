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
import { CountModal } from "./countModal";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import axios from 'axios';
import { Box,  Flex,  Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import {useRef ,useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';

export function AdminUpdate({ id, products, dispatch, getData }) {
  const [CSV, setCSV] = useState("");
  const [count, setCount] = useState([]);
 
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const handleCSV = (e) => {
    setCSV(e.target.files[0])
    
  }
  // setTimeout(function(){
  //   axios.get("http://localhost:4000/count").then(data=>{
  //     setCount(data.data);
  //   });

  // }, 500); 
  const axiosTest1 = async () => {
    axios.get("http://localhost:4000/count").then(data=>{
      setCount(data.data);
      alert('Total Rows: '+data.data[data.data.length-2]+ "       Inserted Rows: " + data.data[data.data.length-1]);
  })};
  // useEffect(() => {
  //   axiosTest1();
  // }, []);

  const len = count.length;
  // console.log(count);
  const handleSubmit = (e) =>{
   
    
    e.preventDefault();
    console.log(CSV);
    const CSVData = new FormData();

   
       
        CSVData.append('CSVFile', CSV);
        // axiosTest1();
        
    // console.log(response.data)
   

        axios.post('http://localhost:4000/admin5/', CSVData).then(res => {
            console.log(res.status);
            if(res.status===200){
            
            }
        });
        axiosTest1();
       
       
        console.log(count);
       
     
  }


  return (
    <>
      <Button colorScheme='teal' variant='outline' onClick={onOpen}>
        Bulk Upload
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} enctype="multipart/form-data">
              {/* <FormLabel>Name</FormLabel> */}
              <input
                type={'file'}
                
                onChange={handleCSV}
              
              />
              <ModalFooter>
                <Button bg={"teal"} color={"white"} mr={1} type="submit" onClick={onClose}>
                  Upload
                </Button>
                
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
