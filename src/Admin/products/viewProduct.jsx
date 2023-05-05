import {
  Box,
  Button,
  Image,
  Flex,
  useMediaQuery,
  Heading,
  Text,
  Spacer,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { lazy } from "react";
import axios from "axios";
import swal from "sweetalert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Select } from "@chakra-ui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
// const AdminNavbar = lazy(()=>import("../AdminNavbar"))
import { AdminUpdate } from "../Users";
import { DeleteIcon, Icon, EditIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { ProductUpdate } from "./editProduct1";
const ProductPage = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [prod, setProd] = useState([]);
  const [InputFilter, setInputFilter] = useState("");
  const [Attribute, setAttribute] = useState("");
  const [operator, setOperator] = useState();
  var userInfo = JSON.parse(localStorage.getItem('userInfo'))|| 'null';
  var role = userInfo.role||'nothing'

  // const status = location.state.status;
  // const id = location.state.id
  const products = useSelector((state) => state.dataReducer.products);
  console.log(products, "asdfgh");
  const textStyle = {
    borderColor: "grey",
    textAlign: "center",
    border: "none",
  };
  const deleteProduct = (id) => {
    dispatch(deleteData(id)).then(() => {
      dispatch(getData());
    });
    const formData = new FormData();

    formData.append("productId", id);
    console.log(id);

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}del/`, formData)
      .then((res) => {
        console.log(res.status);
        // if (res.data.status === 200) {
        // swal("Success", res.data.message, "success");

        console.log(formData.get("productId"));
      });
  };

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

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const filteredProducts2 = products.filter((items) => {
    if (InputFilter === "") {
      return items;
    } else {
      if (operator === "Equals") {
        if (Attribute === "Product Id") {
          if (items.productId === InputFilter) {
            return items;
            // console.log(items);
          }
        } else if (Attribute === "Product Name") {
          if (items.productName === InputFilter) {
            return items;
          }
        } else if (Attribute === "Gender") {
          if (items.skuid === InputFilter) {
            return items;
          }
        } else if (Attribute === "Quantity") {
          if (items.Quantity === parseInt(InputFilter)) {
            return items;
          }
        } else if (Attribute === "Status") {
          if (items.Quantity === InputFilter) {
            return items;
          }
        }
      } else if (operator === "Contains") {
        if (Attribute === "Product Id") {
          if (items.productId.includes(InputFilter)) {
            return items;
            // console.log(items);
          }
        } else if (Attribute === "Product Name") {
          if (items.productName.toLowerCase().includes(InputFilter)) {
            return items;
          }
        } else if (Attribute === "Gender") {
          if (items.Gender.toLowerCase().includes(InputFilter)) {
            return items;
          }
        } else if (Attribute === "Quantity") {
          if (items.Quantity === parseInt(InputFilter)) {
            return items;
          }
        } else if (Attribute === "Status") {
          if (items.Status.toLowerCase().includes(InputFilter)) {
            return items;
          }
        }
      }
    }
  });
  console.log(filteredProducts2, "nishu");

  return (
    <>
      <AdminNavbar />
      <br />
      <Heading>Product Details</Heading>
      <br></br>

      <Box
        m="auto"
        w={"100%"}
        boxShadow={"rgba(0, 0, 0, 0.12) 0px 3px 8px"}
        p={"1.1rem"}
      >
        <Flex alignItems={"left"} textAlign={"left"}>
          <Box m="auto" w={"40%"} p={"1rem"}>
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
                      style={{ border: "none" }}
                      placeholder="Attribute"
                      onChange={(e) => handleAttributes(e)}
                    >
                      <option value="Product Id">Product Id</option>
                      <option value="Product Name">Product Name</option>
                      <option value="Gender">Gender</option>
                      <option value="Quantity">Quantity</option>
                      <option value="Status">Status</option>
                    </Select>
                  </Col>
                  <Col className="rounded border border-dark">
                    <Select
                      //   name="Color"
                      style={{ border: "none" }}
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
                Image
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Product Id
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Name
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Gender
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Selling Price
              </Text>
            </Box>
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                Quantity
              </Text>
            </Box>
            {/* <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>START DATE</Text></Box>
            <Box w="15%" ><Text fontSize='1.2em' fontWeight='bold'>END DATE</Text></Box> */}
            <Box w="15%">
              <Text fontSize="1.2em" fontWeight="bold">
                STATUS
              </Text>
            </Box>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="20%"
              >
                <Box mx={"3"}>
                {role !== 'operator' && role !== 'supervisor' &&(
                  <Button>
                    <Icon float="left" as={DeleteIcon} color="red" />
                  </Button>
                )}
                </Box>
                <Box mx={"3"}>
                {role !== 'operator' && (
                  <Button>
                    <Icon as={EditIcon} float="right" color="red" />
                  </Button>
                )}
                </Box>
              </Flex>
            </Box>
          </Flex>
          {filteredProducts2.map((item, index) => (
            <Flex
              alignItems={"center"}
              textAlign={"center"}
              justifyContent={"space-between"}
              my={"5"}
              fontSize={["7px", "10px", "12px", "15px"]}
            >
              <Box w="15%">{index + 1}</Box>
              <Box width={"15%"} mx={"2"}>
                <LazyLoadImage
                  width={"100%"}
                  src={item.image[0][0]}
                  alt={item.productName}
                  effect="blur"
                />
              </Box>
              <Box w="15%">{item.productId}</Box>
              {isLargerThan ? <Box w="15%">{item.productName}</Box> : null}
              <Box w="15%">{item.productGender}</Box>
              <Box w="15%">{item.selling_price}</Box>
              <Box w="15%">{item.Quantity ? item.Quantity : 0}</Box>
              <Box
                w="15%"
                bg={item.Status === "Stock Updated" ? "#198754" : "#DC3444"}
              >
                <Text color="white">{item.Status}</Text>
              </Box>
              <Box>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  w="10%"
                >
                  <Box mx={"3"}>
                  {role !== 'operator' && role !== 'supervisor' && (
                    <Button>
                      <Icon
                        as={DeleteIcon}
                        color="red"
                        onClick={() => deleteProduct(item.productId)}
                      />
                    </Button>
                  )}
                  </Box>
                  <Box mx={"3"}>
                  {role !== 'operator' && (
                    <ProductUpdate
                      id={item.productId}
                      products={products}
                      dispatch={dispatch}
                    />
                  )}
                  </Box>
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
