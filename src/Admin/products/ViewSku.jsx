import {
  Button,
} from "@chakra-ui/react";
import axios from 'axios';
import { Box,  Flex,  Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import {useRef ,useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { getOneCoupon, updateData } from "../../redux/DataReducer/action";
import { EditIcon, Icon, CheckIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import swal from 'sweetalert';
// import { addData} from "../redux/DataReducer/action";
import { deleteCoupon, getCoupon, getData, deleteData,addData } from "../../redux/DataReducer/action";
import AdminNavbar from "../AdminNavbar";

export function ViewSku() {
  // const [orders, setOrders] = useState({})
  const [prod1, setProd] = useState([]);
  // const [orders, setOrders] = useState([]);
  // const [currentProducts, setCurrentProducts] = useState({});
 
  const id = 1
  // const [room, setRooms] = useState("");
  const products = useSelector((state) => state.dataReducer.products);
  const location = useLocation();

  // console.log(location.state.email);
  console.log(prod1);
  const curr = prod1.filter((item) => item._id === location.state.orderid)
  // setCurrentProducts(curr);
  console.log(curr);
 

  const axiosTest = async () => {
    const response = await axios.get("http://localhost:4000/getOrder")
    setProd(response.data);
    console.log(response.data,'aman');
    // console.log(prod);
  };
  // axiosTest();
  useEffect(() => {
    axiosTest();
  },[]);
  
  return (
    <>
    <AdminNavbar />
    
    <br></br>
      <Heading>Orders</Heading><br></br>

      <Box
        m="auto"
        w={"95%"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"1.1rem"}
      >
        <Flex
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={"space-between"}
          my={"5"}
          fontSize={["7px", "10px", "12px", "15px"]}
        >  
        <Box w="25%" ><Text fontSize='1.2em' fontWeight='bold'>SNo.</Text></Box>
        <Box w="25%" ><Text fontSize='1.2em' fontWeight='bold'>SKU ID</Text></Box>
        <Box w="25%" ><Text fontSize='1.2em' fontWeight='bold'>Quantity</Text></Box>
        <Box w="25%" ><Text fontSize='1.2em' fontWeight='bold'>price</Text></Box>

        </Flex>

    {curr.map((item, index) => (
      <>
      {item.items.map((orders, index)=>(

     
      
          <Flex
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          >
             <Box w="25%" > 
              {index+1}
            </Box> 
            
            <Box w="25%" > 
             {orders?.id}
            </Box> 
               
            <Box w="25%" >{orders?.quantity}</Box>
            <Box w="25%" >{orders?.price}</Box>
          </Flex>
           ))}
          </>
        ))}
        <br></br>
      </Box>

    </>
  );
}