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

export function ViewSku() {
  const [Quantity, setQuantity] = useState({});
  const [prod, setProd] = useState([]);
  const id = 1
  // const [room, setRooms] = useState("");
  const products = useSelector((state) => state.dataReducer.products);
  const location = useLocation();

  console.log(location.state.email);
  console.log(prod);
  const currentProducts = prod.filter((item) => item.email === location.state.email);

  const currentProducts1 = [currentProducts];
  console.log(currentProducts);
  // const navigate = useNavigate();

  // console.log(location.state.id);
  // console.log(currentProducts.color);
  // const id = location.state.id;

  // console.log(products);
  
  // const color = currentProducts.color;
  // const Sizes = currentProducts.Sizes;
  
  // const handleSubmit = (e) => {
  //   // e.preventDefault();
    
  //     // const payload = {
  //     //   Status: "Stock Updated",
  //     // };
  //     // dispatch(updateData(id, payload)).then(() => {
  //     //   dispatch(getData());
  //     // });
  //   // navigate("/viewProduct")
  // };
  // const handleClick = (id,col,item,i) =>{
  //   const aman = id+"/"+col+"/"+item;

  //   console.log(newObject[i]);

  //   if(newObject[i]){
  
  //   var quant = newObject[i].value
  // }
  //   const data = new FormData();

  //   if(quant){
       
  //       data.append('productId', id);
  //       data.append('SKUId', aman);
  //       data.append('Quantity', quant);
  //       console.log(data.get('productId'))
        

  //       axios.post('http://localhost:4000/admin5/', data).then(res => {
  //           console.log(res.status);
  //           // if (res.data.status === 200) {
  //               swal("Success", res.data.message, "success");
  //       });
  //     }else{
  //       swal("Quantity can't be empty");
  //     }
  // }

  const axiosTest = async () => {
    const response = await axios.get("http://localhost:4000/getOrder")
    setProd(response.data);
    console.log(response.data);
    // console.log(prod);
  };
  // axiosTest();
  useEffect(() => {
    axiosTest();
  }, [])

  
  
  const dispatch = useDispatch()

  return (
    <>
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
        <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>SNo.</Text></Box>
        <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>SKU ID</Text></Box>
        <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>Quantity</Text></Box>
        <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>Amount</Text></Box>
          {/* <Box mx={"3"}>
                  <Button>

                    <Icon
                      as={EditIcon}
                      float='right'
                      color="red"
                     
                    />
                    </Button>
                </Box> */}

        </Flex>

    {currentProducts.map((item, index) => (
      
          <Flex
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          >
             <Box w="18%" > 
              {index+1}
            </Box> 
            
            <Box w="18%" > 
             {item.skuid}
            </Box> 
               {/* <Box w="10%"  bg ={col} textColor = 'white' >{col}</Box> */}
             {/* ))}  */}
            <Box w="18%" >{item.quantity}</Box>
            
           
            
            <Box w= "18%">
            {/* <form>
               <input type="Number" required key={item._id} placeholder={num} onChange={(e) => handleChange(e,i)} value={Quantity[`${i}`]} className="form-control" style={{ borderColor: 'blue' }} />
               </form> */}
               {item.TotalAmount}
               </Box> 

           
            {/* <Box mx={"3"} >
                  <Button>
                    <Icon
                          as={CheckIcon}
                          color="green"

                          onClick={()=>handleClick(aman.productId,col,item, i )}
                        />
                    </Button>
                  
                </Box> */}

          </Flex>

        ))}
        <br></br>
        {/* <Box>
        <button type="submit" className="btn btn-primary " style={{marginLeft : '90%'}} onClick={handleSubmit}>Update Details</button></Box>
         */}
      </Box>

    </>
  );
}
