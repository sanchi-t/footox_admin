import {
  Box,
  Flex,
  useMediaQuery,
  Heading,
  Text,
  Spacer,
  Input,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Select } from "@chakra-ui/react";

import { getData } from "../../redux/DataReducer/action";
import AdminNavbar from "../AdminNavbar";

const ReturnPage = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const dispatch = useDispatch();
  const [prod, setProd] = useState([]);
  const [InputFilter, setInputFilter] = useState("");
  const [Attribute, setAttribute] = useState("");
  const [operator, setOperator] = useState();
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

  //   const handleShipped = (e, orderid) => {
  //     const val = e.target.value;

  //     const aman = { orderid: orderid, Status: val };
  //     console.log(val);

  //     const update = axios
  //       .put(`${process.env.REACT_APP_API_BASE_URL}updateOrder`, aman)
  //       .then((res) => {
  //         console.log(res.data);

  //         swal("Success", val, "success").then(() => {});
  //       });
  //   };
  const axiosTest = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE_URL}getReturnOrder`
    );
    setProd(response.data);
  };
  console.log(prod);
  useEffect(() => {
    axiosTest();
  }, []);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
          for (let i = 0; i < items.items.length; i++) {
            if (items.items[i].id === InputFilter) {
              return items;
            }
          }
        } else if (Attribute === "Mobile") {
          if (items.mobile_reciever === InputFilter) {
            return items;
          }
        } else if (Attribute === "Status") {
          if (items.status === InputFilter) {
            return items;
          }
        }
      } else if (operator === "Contains") {
        if (Attribute === "Order Id") {
          if (items._id.includes(InputFilter)) {
            return items;
          }
        } else if (Attribute === "Name") {
          if (
            items?.order_details?.items?.name_reciever
              .toLowerCase()
              .includes(InputFilter)
          ) {
            return items;
          }
        } else if (Attribute === "SkuId") {
          if (
            items?.order_details?.items.id.toLowerCase().includes(InputFilter)
          ) {
            return items;
          }
        } else if (Attribute === "Mobile") {
          if (items.mobile_reciever.toLowerCase().includes(InputFilter)) {
            return items;
          }
        } else if (Attribute === "Status") {
          if (
            items?.order_details?.status.toLowerCase().includes(InputFilter)
          ) {
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
      <Heading>Return Details</Heading>
      <br></br>

      <Box
        m="auto"
        w={"95%"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
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
          <Box w="13%">
            <Text fontSize="1.4em" fontWeight="bold">
              Order Name
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
          <Box w="20%">
            <Text fontSize="1.4em" fontWeight="bold">
              Status
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.4em" fontWeight="bold">
              Return Reason
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.4em" fontWeight="bold">
              Comment
            </Text>
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
            <Box w="10%" fontSize="1.2em">
              {index + 1}
            </Box>

            <Box w="10%" fontSize="1.2em">
              {item._id}
            </Box>
            <Box w="13%" fontSize="1.2em">
              {item?.order_details?.items?.productName}
            </Box>
            <Box w="15%" fontSize="1.2em">
              {item?.order_details.name_reciever}
            </Box>
            <Box w="15%" fontSize="1.2em">
              {item?.order_details.mobile_reciever}
            </Box>

            {isLargerThan ? (
              <Box w="20%" fontSize="1.2em">
                {item?.order_details.address}
              </Box>
            ) : null}

            <Box w="20%">
              <Select
                name="Color"
                className="form-control"
                // onChange={(e) => handleShipped(e, item._id)}
                style={{ borderColor: "green" }}
                placeholder={item.status}
              >
                <option value="Order Shipped">Order Shipped</option>
                <option value="Order Delivered">Order Delivered</option>
              </Select>
            </Box>

            <Box w="15%" fontSize="1.2em">
              {item?.returnReason}
            </Box>
            <Box w="15%" fontSize="1.2em">
              {item.comment}
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default ReturnPage;
