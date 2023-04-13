import { Button } from "@chakra-ui/react";
import axios from "axios";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getOneCoupon, updateData } from "../redux/DataReducer/action";
import EditUser from "./editUserModal";
import { EditIcon, Icon, CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
// import { addData} from "../redux/DataReducer/action";
import {
  deleteCoupon,
  getCoupon,
  getData,
  deleteData,
  addData,
} from "../redux/DataReducer/action";
import AdminNavbar from "./AdminNavbar";
import CreateUser from "./createUserModal";
export function Users() {
  const [isToggle, setIsToggle] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  // const [orders, setOrders] = useState({})
  const [prod1, setProd] = useState([]);
  // // const [orders, setOrders] = useState([]);
  // // const [currentProducts, setCurrentProducts] = useState({});

  // const id = 1
  // // const [room, setRooms] = useState("");
  // const products = useSelector((state) => state.dataReducer.products);
  // const location = useLocation();
  const toggleButton = () => {
    setIsToggle(!isToggle);
  };
  const deleteUser = (email) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_SERVER}deleteEmployee/`, { email })
      .then((res) => {
        console.log(res.status, "status");
        console.log(res.data, "data");
        setIsDelete(res.data);
      });
  };

  const axiosTest = async () => {
    await axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}getEmployee`)
      .then((response) => {
        setProd(response.data);
      })
      .catch((error) => {
        // error is handled in catch block
        if (error.response) {
          // status code out of the range of 2xx
          console.log("Data :", error.response.data);
          alert(error.response.data.error);
          console.log("Status :" + error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
        } else {
          // Error on setting up the request
          console.log("Error", error.message);
        }
      });
    // console.log(response.data.error,'aman');
    // console.log(prod);
  };
  // axiosTest();
  useEffect(() => {
    axiosTest();
    console.log(isToggle);
  }, [isToggle, isDelete]);
  console.log(isToggle, "message");
  console.log(isDelete, "messageDelete q ");

  return (
    <>
      <AdminNavbar />

      <br></br>
      <Heading>
        Users
        <CreateUser toggled={isToggle} toggle={toggleButton} />
      </Heading>
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
          <Box w="25%">
            <Text fontSize="1.2em" fontWeight="bold">
              SNo.
            </Text>
          </Box>
          <Box w="25%">
            <Text fontSize="1.2em" fontWeight="bold">
              Name
            </Text>
          </Box>
          <Box w="25%">
            <Text fontSize="1.2em" fontWeight="bold">
              email
            </Text>
          </Box>
          <Box w="25%">
            <Text fontSize="1.2em" fontWeight="bold">
              Phone
            </Text>
          </Box>
          <Box w="25%">
            <Text fontSize="1.2em" fontWeight="bold">
              Role
            </Text>
          </Box>
          <Box w="25%">
            <Text fontSize="1.2em" fontWeight="bold">
              Status
            </Text>
          </Box>
          <Flex alignItems={"center"} justifyContent={"space-between"} w="10%">
            <Box mx={"3"}>
              <Button>
                <Icon float="left" as={EditIcon} color="red" />
              </Button>
            </Box>
            <Box mx={"3"}>
              <Button>
                <Icon as={DeleteIcon} float="right" color="red" />
              </Button>
            </Box>
          </Flex>
        </Flex>

        {prod1.map((items, index) => (
          <Flex
            alignItems={"center"}
            textAlign={"center"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          >
            <Box w="25%">{index + 1}</Box>

            <Box w="25%">{items?.name}</Box>

            <Box w="25%">{items?.email}</Box>
            <Box w="25%">{items?.phone}</Box>
            <Box w="25%">{items?.role}</Box>
            <Box w="25%">{items?.status ? items.status : "Inactive"}</Box>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="10%"
              >
                
                <Box mx={"3"}>
                  <EditUser
                    emailid={items?.email}
                    users = {items}
                  />
                </Box>
                <Box mx={"3"}>
                  <Button>
                    <Icon
                      as={DeleteIcon}
                      color="red"
                      onClick={() => deleteUser(items?.email)}
                    />
                  </Button>
                </Box>
              </Flex>
          </Flex>
        ))}

        <br></br>
      </Box>
    </>
  );
}
