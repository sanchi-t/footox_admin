import {
  Box,
  Button,
  Image,
  Flex,
  useMediaQuery,
  Heading,
  Text,
  border,
  Spacer,
  Input,
} from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import React from "react";
  import axios from "axios";
  import swal from "sweetalert";
  import { useEffect, useState } from "react";
  import { useLocation } from "react-router-dom";
  import { useDispatch, useSelector } from "react-redux";
  import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Select } from "@chakra-ui/react";

  import {
    deleteCoupon,
    getCoupon,
    getData,
    deleteData,
    updateData,
  } from "../../redux/DataReducer/action";
  import AdminNavbar from "../AdminNavbar";
  // import toastr from "toastr";
  import { AdminUpdate } from "./ViewSku";
  import { DeleteIcon, Icon, EditIcon, ArrowForwardIcon, ViewIcon, CheckIcon } from "@chakra-ui/icons";
  import { ProductUpdate } from "./editProduct1";
  const OrderPage = () => {
    const [isLargerThan] = useMediaQuery("(min-width: 468px)");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [prod, setProd] = useState([]);
    const [InputFilter, setInputFilter] = useState("");
  const [Attribute, setAttribute] = useState("");
  const [operator, setOperator] = useState();
    // const [data, setData] = useState({});
  
    // const status = location.state.status;
    // const id = location.state.id
    const products = useSelector((state) => state.dataReducer.products);

    const handleInputFilter = (e) => {
      const add = e.target.value;
      setInputFilter(add);
    };
  
    const handleAttributes = (e) => {
      const att = e.target.value;
      setAttribute(att);
    };
    // console.log(Attribute);
  
    const handleOperator = (e) => {
      const op = e.target.value;
      setOperator(op);
    };
    const textStyle = {
      borderColor: "grey",
      textAlign: "center",
      border: "none",
    };
    const handleStatus = (e, i) => {
      const smriti = e.target.value;

    }
  
  
    // const deleteProduct = (id) => {
    //   dispatch(deleteData(id)).then(() => {
    //     dispatch(getData());
    //   });
    //   const formData = new FormData();
  
    //   formData.append("productId", id);
    //   console.log(id);
  
    //   axios.post("http://localhost:4000/del/", formData).then((res) => {
    //     console.log(res.status);
    //     // if (res.data.status === 200) {
    //     // swal("Success", res.data.message, "success");
  
    //     console.log(formData.get("productId"));
    //   });
    // };
    const handleClick = (orderid) =>{
        navigate("/viewSku",{state:{orderid:orderid}});
      }
      const data = new FormData();
      const handleShipped = (e, orderid) => {

        const val = e.target.value;
       

        const aman = {'orderid':orderid, 'Status': val};
      // data.append("emai", email);
      // data.append("Status", "Order Shipped");
        console.log(val);

        const update = axios.put("http://localhost:4000/updateOrder", aman).then((res) => {
          console.log(res.data);
          // if (res.data.status === 200) {
          swal("Success", val, "success").then(()=>{
            // window.location.reload(false);
          })
        //  toastr.success("Hurrah!!", 'Order Shipped');
        }); 

      }
    const axiosTest = async () => {
        const response = await axios.get("http://localhost:4000/getOrder");
        setProd(response.data);
      };
      useEffect(() => {
        axiosTest();
      }, []);
   
    useEffect(() => {
      dispatch(getData());
    }, [dispatch]);
    // console.log(InputFilter);

    const filteredProducts2 = prod.filter((items) => {
      if (InputFilter === "") {
        return items;
      } else {
        if (operator === "Equals") {
          if (Attribute === "Order Id") {
            if (items._id === InputFilter) {
              return items;
              // console.log(items);
            }
          } else if (Attribute === "Name") {
            if (items.name_reciever === InputFilter) {
              return items;
            }
          } else if (Attribute === "SkuId") {
            for(let i = 0; i< items.items.length; i++){
            if (items.items[i].id === InputFilter) {
              return items;
            }}
          } else if (Attribute === "Mobile") {
            if (items.mobile_reciever === InputFilter) {
              return items;
            }
          }else if (Attribute === "Status") {
            if (items.status === InputFilter) {
              return items;
            }
          }
        }else if(operator==='Contains'){
          if (Attribute === "Order Id") {
            if (items._id.includes(InputFilter)) {
              return items;
              // console.log(items);
            }
          } else if (Attribute === "Name") {
            if (items.name_reciever.toLowerCase().includes(InputFilter)) {
              return items;
            }
          } else if (Attribute === "SkuId") {
            for(let i = 0; i< items.items.length; i++){
            if (items.items[i].id.toLowerCase().includes(InputFilter) ) {
              return items;
            }}
          } else if (Attribute === "Mobile") {
            if (items.mobile_reciever.toLowerCase().includes(InputFilter)) {
              return items;
            }
          }else if (Attribute === "Status") {
            if (items.status.toLowerCase().includes(InputFilter)) {
              return items;
            }
          }
        }
      }
    });
  
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
          <Flex alignItems={"left"} textAlign={"left"}>
          <Box
            m="auto"
            w={"40%"}
            p={"1rem"}
          >
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"stretch"}
              my={"1"}
            >
              <Container className="rounded border-right-0-dark">
                <Row>
                  <Col className="rounded border border-dark">

                    <Select
                      //   name="Color"
                      // variant="outline"
                      style={{border: 'none'}}
                      placeholder="Attribute"
                      onChange={(e) => handleAttributes(e)}
                    >
                      <option value="Order Id">Order Id</option>
                      <option value="Name">Name</option>
                      <option value="Mobile">Mobile</option>
                      <option value="SkuId">SkuId</option>
                      <option value="Status">Status</option>
                    </Select>
                  </Col>
                  <Col className="rounded border border-dark">
                    <Select
                      //   name="Color"
                      style={{border: 'none'}}
                      placeholder="Operations"
                      onChange={(e) => handleOperator(e)}
                    >
                      <option value="Contains">Contains</option>
                      <option value="Equals">Equals</option>
                    </Select>
                  </Col>
                  <Col className="rounded border border-dark">
                    <Input
                      type={"text"}
                      style={textStyle}
                      onChange={handleInputFilter}
                      value={InputFilter}
                    ></Input>
                  </Col>

                 
                </Row>

                
              </Container>
            </Flex>
          </Box>
          <Spacer />
        </Flex>

          <Flex
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["5px", "7px", "10px", "12px"]}
          >
            {" "}
            <Box w="10%">
              <Text fontSize="1.4em" fontWeight="bold">
                S No.
              </Text>
            </Box>
            <Box w="13%">
              <Text fontSize="1.4em" fontWeight="bold">
              Order Id
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.4em" fontWeight="bold">
                Name
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.4em" fontWeight="bold">
                Mobile No.
              </Text>
            </Box>
            <Box w="20%">
              <Text fontSize="1.4em" fontWeight="bold">
                Address
              </Text>
            </Box>
            {/* <Box w="15%">
              <Text fontSize="1.4em" fontWeight="bold">
                Skuid
              </Text>
            </Box> */}
            <Box w="20%">
              <Text fontSize="1.4em" fontWeight="bold">
                Status
              </Text>
            </Box>
            {/* <Box w="15%">
              <Text fontSize="1.4em" fontWeight="bold">
                Quantity
              </Text>
            </Box> */}
            
            <Box w="15%">
              <Text fontSize="1.4em" fontWeight="bold">
                Total
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.4em" fontWeight="bold">
                Payment Mode
              </Text>
            </Box>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="20%"
              >
                <Box mx={"3"}>
                  <Button>
                    <Icon float="left" as={ViewIcon} color="red" />
                    
                  </Button>
                </Box>
                {/* <Box mx={"3"}>
                  <Button>
                    <Icon as={CheckIcon} float="right" color="red" />
                  </Button>
                </Box> */}
              </Flex>
            </Box>
          </Flex>
          {filteredProducts2.map((item, index) => (
            
            
            
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"space-between"}
              my={"5"}
              fontSize={["5px", "7px", "10px", "12px"]}
            >
              <Box w="10%" fontSize="1.2em">{index + 1}</Box>
              {/* <Box width={"15%"} mx={"2"}>
                <Image
                  width={"100%"}
                  src={item.image[0]}
                  alt={item.productName}
                />
              </Box> */}
              <Box w="10%" fontSize="1.2em">{item._id}</Box>
              <Box w="15%" fontSize="1.2em">{item.name_reciever}</Box>
              <Box w="15%" fontSize="1.2em">{item.mobile_reciever}</Box>
              {/* <Box w="20%" fontSize="1.2em">{item.address}</Box> */}
               {isLargerThan ? <Box w="20%" fontSize='1.2em'>{item.address}</Box> : null}
             
              <Box w="20%" >
              <Select
                          name="Color"
                          className="form-control"
                          onChange={(e) => handleShipped(e,item._id)}
                          style={{ borderColor: "green"}}
                          placeholder={item.status}
                        >
                          {/* <option value="">--Select Color--</option> */}
                          <option value='Order Shipped'>Order Shipped</option>
                          <option value="Order Delivered">Order Delivered</option>
                          {/* <option value="Green">Green</option>
                          <option value="Grey">Grey</option>
                          <option value="White">White</option> */}
                        </Select>
                {/* <Text color="green" fontSize='1.2em'>{item.status}</Text> */}
                </Box>
              {/* bg={item.Status==="Order Confirmed" ? '#198754':'#DC3444'} */}
             
              <Box w="15%">{item.total}</Box>
              <Box w="15%">{item.payment}</Box>
              
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
                        onClick={() => handleClick(item._id)}
                      />
                    </Button>
                  </Box>
                  {/* <Box mx={"3"}>
                    <Button>
                      <Icon
                        as={CheckIcon}
                        color="Green"
                        onClick={() => handleShipped(item._id)}
                      />
                    </Button>
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