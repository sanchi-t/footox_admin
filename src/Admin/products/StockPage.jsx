import { Box, Button, Image,Flex, useMediaQuery,Heading,Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getCoupon, getData, deleteData } from "../../redux/DataReducer/action";
import AdminNavbar from "../AdminNavbar";
import { ViewSku } from "./ViewSku";
import { DeleteIcon, Icon, EditIcon , ViewIcon} from "@chakra-ui/icons";

const StockPage = () => {
    const [isLargerThan] = useMediaQuery("(min-width: 468px)");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const products = useSelector((state) => state.dataReducer.products);
  
  const deleteProduct = (id) => {
    dispatch(deleteData(id)).then(() => {
      dispatch(getData());
    });
  };
  const handleClick = (id) =>{
    navigate("/viewSku",{state:{id:id, mode: 'get'}});
  }
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <AdminNavbar />
      <br />
      <Heading>Stock</Heading><br></br>

      <Box
        m="auto"
        w={"95%"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"1.1rem"}
      >
        <Flex
            alignItems={"left"}
            textAlign={"left"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          >  <Box w="20%" ><Text fontSize='1.2em' fontWeight='bold'>S No.</  Text></Box>
             {/* <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>Image</Text></Box> */}
            
            <Box w="20%" ><Text fontSize='1.2em' fontWeight='bold'>Product Id</Text></Box>
            <Box w="35%" ><Text fontSize='1.2em' fontWeight='bold'>Name</Text></Box>
            {/* <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>Gender</Text></Box>
            <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>Selling price</Text></Box> */}
            {/* <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>Brand</Text></Box> */}
            {/* <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>START DATE</Text></Box>
            <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>END DATE</Text></Box> */}
            {/* <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>STATUS</Text></Box> */}
           
            <Box>
              <Flex
                alignItems={"left"}
                justifyContent={"space-between"}
                w="10%"
              >
                {/* <Box mx={"5"}>
                  <Button>
                    <Icon
                      float='left'
                      as={DeleteIcon}
                      color="red"
                    />
                    
                  </Button>
                  </Box> */}
                  <Box mx={"5"}>
                  <Button>

                    <Icon
                  
                      as={ViewIcon}
                      float='right'
                      color="red"
                     
                    />
                    </Button>
                </Box>
                
              </Flex>
            </Box>
          </Flex>
        {products.map((item, index) => (
          <Flex
            alignItems={"left"}
            textAlign={"left"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["10px", "12px", "15px", "17px"]}
          >
            
            <Box w="20%" >{index+1}</Box>
            {/* <Box width={"15%"} mx={"2"}>
              <Image width={"100%"} src={item.image[0]} alt={item.productName} />
            </Box> */}
            <Box w="20%" >{item.productId}</Box>
            {/* <Box w="15%" >{item.limit===null?'none':item.limit}</Box>
            <Box w="15%" >{item.type==="percentage" ? '':'₹'}{item.value}{item.type==="percentage" ? '%':''}</Box>
            <Box w="15%" >{new Date(item.startDate).toDateString()}</Box>
            <Box w="15%" >{new Date(item.endDate).toDateString()}</Box>
            <Box w="15%" bg={item.status==="Active" ? '#198754':'#DC3444'}><Text color="white">{item.status}</Text></Box> */}
            {isLargerThan ? <Box w="35%">{item.productName}</Box> : null}
            {/* <Box w="15%">{item.productGender}</Box>
            <Box w="15%">{item.selling_price}</Box> */}
            {/* <Box w="15%">{item.brand}</Box> */}
             {/* <Box w="15%" bg={item.status==="Active" ? '#198754':'#DC3444'}><Text color="white">{item.status}</Text></Box>  */}
            <Box>
              <Flex
                alignItems={"left"}
                justifyContent={"space-between"}
                w="15%"
              >
                <Box mx={"5"} w="15%">
                  <Button >
                    <Icon
                      as={ViewIcon}
                     
                      color="green"
                      onClick={() => handleClick(item.productId)}
                    />
                  </Button>
                </Box>
                {/* <Box mx={"5"} >
                  
                   
                        <ViewSku
                        id={item.productId}/> 
                     {/* </Button> */}
                    {/* <Link to="/viewSku"> <Icon
                          as={ViewIcon}
                          color="Green"
                          
                        /></Link> */}
                  
                {/* </Box> */} 
                
              </Flex>
            </Box>
          </Flex>
           ))}   
      </Box>
    </>
  );
};

export default StockPage;