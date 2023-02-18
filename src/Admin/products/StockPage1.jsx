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
  
  export function StockPage1() {
    const [Quantity, setQuantity] = useState({});
    
    // const [room, setRooms] = useState("");
    const products = useSelector((state) => state.dataReducer.products);
    const location = useLocation();
    
    var num = 0;
    var newObject = {}
  
    // const currentProducts = products.find((item) => item.productId === location.state.id);
    const navigate = useNavigate();
  
    // console.log(location.state.id);
    // console.log(currentProducts.color);
    // const id = location.state.id;
  
    console.log(products);
    
    const color = products;
    const Sizes = products[0].Sizes;
    
    const handleSubmit = (e) => {
      // e.preventDefault();
      
        const payload = {
          Status: "Stock Updated",
        };
        dispatch(updateData(payload)).then(() => {
          dispatch(getData());
        });
      navigate("/viewProduct")
    };
    const handleClick = (id,col,item,i) =>{
      const aman = id+"/"+col+"/"+item;
  
      console.log(newObject[i]);
  
      if(newObject[i]){
    
      var quant = newObject[i].value
    }
      const data = new FormData();
  
      if(quant){
         
          data.append('productId', id);
          data.append('SKUId', aman);
          data.append('Quantity', quant);
          console.log(data.get('productId'))
          
  
          axios.post('http://localhost:4000/admin5/', data).then(res => {
              console.log(res.status);
              // if (res.data.status === 200) {
                  swal("Success", res.data.message, "success");
          });
        }else{
          swal("Quantity can't be empty");
        }
    }
  
  
    const handleChange = (e,id) =>{
      newObject = {...Quantity};
      newObject[`${id}`] = {value: e.target.value};
      console.log(newObject)
    }
  
    
    
    const dispatch = useDispatch()
  
    return (
      <>
      <br></br>
        <Heading>Product Id :- </Heading><br></br>
  
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
         
          <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>SKU</Text></Box>
            <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>Product Color</Text></Box>
            <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>Product Size</Text></Box>
            
            <Box w="18%" ><Text fontSize='1.2em' fontWeight='bold'>Quantity</Text></Box>
            <Box mx={"3"}>
                    <Button>
  
                      <Icon
                        as={EditIcon}
                        float='right'
                        color="red"
                       
                      />
                      </Button>
                  </Box>
  
          </Flex>
  
  
        {color.map((col,index)=> (
        <>
          {Sizes[index].split(',').map((item, i) => {
           
            num = num + 1;
    
            return(
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"space-between"}
              my={"5"}
              fontSize={["7px", "10px", "12px", "15px"]}
            >
              
              <Box w="18%" > 
              {col}/{item}
              </Box> 
                 <Box w="10%"  bg ={col} textColor = 'white' >{col}</Box>
               {/* ))}  */}
              <Box w="18%" >{item}</Box>
              
             
              
              <Box w= "10%">
              <form>
                 <input type="Number" required key={item._id} placeholder={num} onChange={(e) => handleChange(e,i)} value={Quantity[`${i}`]} className="form-control" style={{ borderColor: 'blue' }} />
                 </form>
                 </Box> 
  
             
              <Box mx={"3"} >
                    <Button>
                      <Icon
                            as={CheckIcon}
                            color="green"
  
                            onClick={()=>handleClick(col,item, i )}
                          />
                      </Button>
                    
                  </Box>
  
            </Flex>
  )})}
          </>
          ))}
          <br></br>
          <Box>
          <button type="submit" className="btn btn-primary " style={{marginLeft : '90%'}} onClick={handleSubmit}>Update Details</button></Box>
          
        </Box>
  
      </>
    );
  }
  