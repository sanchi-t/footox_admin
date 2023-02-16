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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFilter } from "react-icons/fa";
import {
  deleteCoupon,
  getCoupon,
  getData,
  deleteData,
  updateData,
} from "../../redux/DataReducer/action";
import AdminNavbar from "../AdminNavbar";
import { useParams } from "react-router-dom";
// import { ViewSku } from "./ViewSku";
import {
  DeleteIcon,
  Icon,
  EditIcon,
  ViewIcon,
  ArrowForwardIcon,
  CheckIcon,
  DragHandleIcon,
  SearchIcon
} from "@chakra-ui/icons";
import { AdminUpdate } from "../AdminModal";
import { ViewDetails } from "./viewDetails";
import swal from "sweetalert";
const StockPage = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");

  // const { quant } = useParams();
  var newObject = {};
  let num = 0;
  const navigate = useNavigate();
  // const [showhide, setShowhide] = useState('');
  const products = useSelector((state) => state.dataReducer.products);
  const [prod, setProd] = useState([]);
  const [Quantity, setQuantity] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);

  const deleteProduct = (id) => {
    dispatch(deleteData(id)).then(() => {
      dispatch(getData());
    });
  };

  const textSytle = {
    borderColor: "blue" ,textAlign: 'center', border: "none" 
  };

  const mystyle = {
    marginLeft: "1240px",
    marginTop: "-45px",
  };
  var len = prod.length;
  // console.log(prod.Quantity);
  const handleClick = (id, col, item, i) => {
    const aman = id + "/" + col + "/" + item;

    console.log(newObject);
    console.log(prod);

    console.log(products);
    // console.log(currentProducts);

    if (newObject[i]) {
      var quant = newObject[i].value;
    }
    const data = new FormData();

    if (quant) {
      data.append("productId", id);
      data.append("SKUId", aman);
      data.append("Quantity", quant);
      console.log(data.get("productId"));

      axios.post("http://localhost:4000/admin5/", data).then((res) => {
        console.log(res.status);
        // if (res.data.status === 200) {
        swal("Success", res.data.message, "success");
      });

      const currentProducts = prod.filter((item) => item.productId === id);
      var sum = 0;
      for (let i = 0; i < currentProducts.length; i++) {
        sum = sum + currentProducts[i].Quantity;
      }
      console.log(sum);
      const payload = {
        Quantity: sum,
        Status: "Stock Updated",
      };
      dispatch(updateData(id, payload)).then(() => {
        dispatch(getData());
      });
    } else {
      swal("Quantity can't be empty");
    }
  };

  const handleChange = (e, id) => {
    newObject = { ...Quantity };
    newObject[`${id}`] = { value: e.target.value };
    console.log(newObject);
  };

  const dispatch = useDispatch();
  //   const handleshowhide = (e) => {
  //     e.preventDefault();
  //     const getuser = e.target.value;
  //     console.log(getuser);
  //     setShowhide('1');

  // }
  const axiosTest = async () => {
    const response = await axios.get("http://localhost:4000/getStock");
    // console.log(response.data)
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
      <Heading>
        <p style={{ marginRight: "1270px" }}>Stock</p>
        <p style={mystyle}>
          <AdminUpdate />
        </p>
      </Heading>
      {/* <br></br> */}

      <Box
        m="auto"
        w={"100%"}
        boxShadow={"rgba(0, 0, 0, 0.12) 0px 3px 8px"}
        p={"1.1rem"}
      >
        <Flex alignItems={"left"} textAlign={"left"}>
         
          <Box
            m="auto"
            w={"20%"}
            // boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            // alignItems={"right"}
            p={"1rem"}
          ><Flex
          alignItems={"center"}
          textAlign={"center"}
          justifyContent={'stretch'}
          my={"1"}
          // fontSize={["7px", "10px", "12px", "15px"]}
        >
            <Text fontSize="2em" fontWeight="bold" color='Highlight' >
            Filter
              </Text>
              <Button colorScheme='messenger' variant='solid'>
              
              <Icon
                as={SearchIcon}
                color="aqua"
                bgSize={'2px'}
                // aria-label="Filter"
                // onClick={() =>
                //   handleClick(products.productId, col, item, i)
                // }
              />
            </Button>
            </Flex>
          </Box>
           <Spacer />
        </Flex>
        {/* <br></br> */}

        <Box
          m="auto"
          w={"100%"}
          boxShadow={"rgba(0.24, 0, 0, 0.24) 0px 3px 8px"}
          p={"1.1rem"}
        >
          <Flex
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          >
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                SNO.
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                SKU
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Product Id
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Product Name
              </Text>
            </Box>

            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Quantity
              </Text>
            </Box>
            <Box mx={"3"}>
              <Button>
                <Icon as={EditIcon} float="right" color="red" />
              </Button>
            </Box>
          </Flex>
        {filteredProducts.length >= 0&&(
          <>
          {products.map((products, num1) => (
            <>
              {products.color.map((col, index) => (
                <>
                  {products.Sizes[index].map((item, i) => {
                    num = num + 1;

                    var aman = num;

                    var sku =  products.productId + "/" + col + "/" +item

                    return (
                      <Flex
                        alignItems={"center"}
                        textAlign={"center"}
                        justifyContent={"space-between"}
                        my={"5"}
                        fontSize={["7px", "10px", "12px", "15px"]}
                      >
                        <Box w="15%">{aman}</Box>
                        <Box w="15%">
                          {products.productId}/{col}/{item}
                        </Box>
                        <Box w="15%" textColor="Black">
                          {products.productId}
                        </Box>
                        {/* ))}  */}
                        <Box w="15%">{products.productName}</Box>

                        <Box w="15%">
                          <form>
                            <input
                              type="Number"
                              required
                              key={item._id}
                              // textAlign='center'
                              placeholder={
                                aman - 1 < len ? prod[aman - 1].Quantity : "0"
                                // prod.find((x)=> x.SKUId=== sku).
                              }
                              onChange={(e) => handleChange(e, i)}
                              value={Quantity[`${i}`]}
                              className="form-control"
                              style={
                                textSytle
                              }
                            />
                            {/* placeholder={ prod[i].Quantity!==null ? prod[i].Quantity : '0'} */}
                            {/* <p contenteditable="true">This is an editable paragraph.</p> */}
                          </form>
                          {/* <Box w="15%" bg={item.Status==="Stock Updated" ? '#198754':'#DC3444'}><Text color="white">{item.Status}</Text></Box>  */}
                        </Box>

                        <Box mx={"3"}>
                          <Button>
                            <Icon
                              as={CheckIcon}
                              color="green"
                              onClick={() =>
                                handleClick(products.productId, col, item, i)
                              }
                            />
                          </Button>
                        </Box>
                      </Flex>
                    );
                  })}
                </>
              ))}
            </>
          ))}
          </>
        )}
          
          <br></br>
          {/* <Box>
        <button type="submit" className="btn btn-primary " style={{marginLeft : '90%'}} onClick={handleSubmit}>Update Details</button></Box> */}
        </Box>
        {/* </Flex> */}
      </Box>
    </>
  );
};

export default StockPage;
