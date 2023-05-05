import {
  Box,
  Button,
  Flex,
  useMediaQuery,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoupon, getCoupon } from "../redux/DataReducer/action";
import AdminNavbar from "./AdminNavbar";
import { DeleteIcon, Icon, EditIcon } from "@chakra-ui/icons";
const CouponPage = () => {
  sessionStorage.removeItem("id");
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.dataReducer.products);

  const deleteCoupons = (id) => {
    console.log("del", id);
    dispatch(deleteCoupon(id)).then(() => {
      dispatch(getCoupon());
    });
  };
  var userInfo = JSON.parse(localStorage.getItem("userInfo")) || "null";
  var role = userInfo.role || "nothing";
  const editCoupons = (id) => {
    console.log("before", id);
    sessionStorage.setItem("id", id);
    navigate("/couponAdd", { state: { id: id, mode: "edit" } });
  };

  useEffect(() => {
    dispatch(getCoupon());
  }, [dispatch]);
  console.log("zsa", products[0]);
  return (
    <>
      <AdminNavbar />
      <br />
      <Heading>COUPONS</Heading>
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
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              CODE
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              TYPE
            </Text>
          </Box>
          <Box w="10%">
            <Text fontSize="1.2em" fontWeight="bold">
              LIMIT
            </Text>
          </Box>
          <Box w="10%">
            <Text fontSize="1.2em" fontWeight="bold">
              DISCOUNT
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              START DATE
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              END DATE
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              STATUS
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              CATEGORY
            </Text>
          </Box>
          <Box w="15%">
            <Text fontSize="1.2em" fontWeight="bold">
              PRODUCT
            </Text>
          </Box>

          <Box>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              w="10%"
            >
              <Box mx={"3"}>
                {role !== "operator" && role !== 'supervisor' &&(
                  <Button>
                    <Icon float="left" as={DeleteIcon} color="red" />
                  </Button>
                )}
              </Box>
              <Box mx={"3"}>
                {role !== "operator" && (
                  <Button>
                    <Icon as={EditIcon} float="right" color="red" />
                  </Button>
                )}
              </Box>
            </Flex>
          </Box>
        </Flex>
        {products.map((item, index) => (
          <Flex
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          >
            <Box w="15%">{item.code}</Box>
            <Box w="15%">{item.type}</Box>
            <Box w="10%">{item.limit === null ? "none" : item.limit}</Box>
            <Box w="10%">
              {item.type === "percentage" ? "" : "₹"}
              {item.value}
              {item.type === "percentage" ? "%" : ""}
            </Box>
            <Box w="15%">{new Date(item.startDate).toDateString()}</Box>
            <Box w="15%">{new Date(item.endDate).toDateString()}</Box>
            <Box w="15%" bg={item.status === "Active" ? "#198754" : "#DC3444"}>
              <Text color="white">{item.status}</Text>
            </Box>
            <Box w="15%">{item.category}</Box>
            <Box w="15%">
              {item.Id === null || item.Id === undefined ? "none" : item.Id}
            </Box>

            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="10%"
              >
                <Box mx={"3"}>
                  {role !== "operator" && role !== 'supervisor' &&(
                    <Button>
                      <Icon
                        as={DeleteIcon}
                        color="red"
                        onClick={() => deleteCoupons(item._id)}
                      />
                    </Button>
                  )}
                </Box>
                <Box mx={"3"} onClick={() => editCoupons(item._id)}>
                  {role !== "operator" && (
                    <Button>
                      <Icon as={EditIcon} color="red" />
                    </Button>
                  )}
                </Box>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  );
};

export default CouponPage;
