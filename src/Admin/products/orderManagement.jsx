import {
    Box,
    Button,
    Image,
    Flex,
    useMediaQuery,
    Heading,
    Text,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import React from "react";
  import axios from "axios";
  import swal from "sweetalert";
  import { useEffect, useState } from "react";
  import { useLocation } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import {
    deleteCoupon,
    getCoupon,
    getData,
    deleteData,
    updateData,
  } from "../../redux/DataReducer/action";
  import AdminNavbar from "../AdminNavbar";
  import { AdminUpdate } from "./ViewSku";
  import { DeleteIcon, Icon, EditIcon, ArrowForwardIcon, ViewIcon } from "@chakra-ui/icons";
  import { ProductUpdate } from "./editProduct1";
  const OrderPage = () => {
    const [isLargerThan] = useMediaQuery("(min-width: 468px)");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [prod, setProd] = useState([]);
  
    // const status = location.state.status;
    // const id = location.state.id
    const products = useSelector((state) => state.dataReducer.products);
  
    const deleteProduct = (id) => {
      dispatch(deleteData(id)).then(() => {
        dispatch(getData());
      });
      const formData = new FormData();
  
      formData.append("productId", id);
      console.log(id);
  
      axios.post("http://localhost:4000/del/", formData).then((res) => {
        console.log(res.status);
        // if (res.data.status === 200) {
        // swal("Success", res.data.message, "success");
  
        console.log(formData.get("productId"));
      });
    };
    const handleClick = (email) =>{
        navigate("/viewSku",{state:{email:email, mode: 'get'}});
      }
    const axiosTest = async () => {
        const response = await axios.get("http://localhost:4000/getUser");
        setProd(response.data);
      };
      useEffect(() => {
        axiosTest();
      }, []);
   
    useEffect(() => {
      dispatch(getData());
    }, [dispatch]);
  
    return (
      <>
        <AdminNavbar />
        <br />
        <Heading>Order Details</Heading>
        <br></br>
  
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
            {" "}
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                S No.
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                name
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Email
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Phone Number
              </Text>
            </Box>
            {/* <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                address
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                skuid
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Quantity
              </Text>
            </Box>
            
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Total Amount
              </Text>
            </Box> */}
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="20%"
              >
                <Box mx={"3"}>
                  <Button>
                    {/* <Icon float="left" as={ViewIcon} color="red" /> */}
                    Orders
                  </Button>
                </Box>
                {/* <Box mx={"3"}>
                  <Button>
                    <Icon as={EditIcon} float="right" color="red" />
                  </Button>
                </Box> */}
              </Flex>
            </Box>
          </Flex>
          {prod.map((item, index) => (
            
            
            
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"space-between"}
              my={"5"}
              fontSize={["7px", "10px", "12px", "15px"]}
            >
              <Box w="15%">{index + 1}</Box>
              {/* <Box width={"15%"} mx={"2"}>
                <Image
                  width={"100%"}
                  src={item.image[0]}
                  alt={item.productName}
                />
              </Box> */}
              <Box w="15%">{item.name}</Box>
              {/* <Box w="15%" >{item.limit===null?'none':item.limit}</Box>
              <Box w="15%" >{item.type==="percentage" ? '':'₹'}{item.value}{item.type==="percentage" ? '%':''}</Box>
              <Box w="15%" >{new Date(item.startDate).toDateString()}</Box>
              <Box w="15%" >{new Date(item.endDate).toDateString()}</Box>
              <Box w="15%" bg={item.status==="Active" ? '#198754':'#DC3444'}><Text color="white">{item.status}</Text></Box> */}
              {isLargerThan ? <Box w="15%">{item.email}</Box> : null}
              <Box w="15%">{item.mobile}</Box>
              {/* {isLargerThan ? <Box w="15%">{item.address}</Box> : null}
            
              <Box w="15%">{item.skuid}</Box>
              <Box w="15%">{item.quantity}</Box>
              <Box w="15%">{item.TotalAmount}</Box> */}
              {/* <Box
                w="15%"
                bg={item.Status === "Stock Updated" ? "#198754" : "#DC3444"}
              >
                <Text color="white">{item.skuid}</Text>
                
              </Box> */}

              <Box>
                <Flex
                  alignItems={"left"}
                  justifyContent={"space-between"}
                  w="10%"
                >
                  <Box mx={"3"}>
                    <Button>
                      <Icon
                        as={ViewIcon}
                        color="Green"
                        onClick={() => handleClick(item.email)}
                      />
                    </Button>
                  </Box>
                  {/* <Box mx={"3"}>
                    <ProductUpdate
                      id={item.productId}
                      products={products}
                      dispatch={dispatch}
                    />
                  </Box> */}
                </Flex>
              </Box>
            </Flex>
            
          ))}
        </Box>
      </>
    );
  };
  
  export default OrderPage;
  