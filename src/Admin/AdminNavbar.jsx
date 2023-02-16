import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useDispatch} from "react-redux";
// import { AddData } from "./AddModal";
import { getData } from "../redux/DataReducer/action";
// import { useState } from "react";
import SideBar from "./SideBar";
// import SideBar from "./sideBar1";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const logoutHandler = () => {
    new Promise((res, rej) => {
      res(localStorage.removeItem("token"));
      res(localStorage.removeItem("userInfo"));
    }).then(() => {
      navigate("/login");
      window.location.reload();
    });
  };
  return (
    <>

    <Box h="8vh" bg={"black"} mx={"5"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box mx={"5"}>
          <SideBar />
        </Box>
        <Box mx={"5"}>
          <Menu>
            <MenuButton
              fontSize={"11px"}
              my={"2"}
              mx={"2"}
              as={Button}
              rightIcon={<AiFillCaretDown />}
            >
              Aman Jain
            </MenuButton>
            <MenuList>
              <MenuItem as={"Button"} onClick={logoutHandler}>
                Logout
              </MenuItem>
            </MenuList>
            
            {/* <AddData
                    
                    dispatch={dispatch}
                    getData={getData}
                  /> */}
          </Menu>
        </Box>
      </Flex>
    </Box>
    </>
  );
};

export default AdminNavbar;


 //   return (
                    //     <Flex
                    //       alignItems={"center"}
                    //       textAlign={"center"}
                    //       justifyContent={"space-between"}
                    //       my={"5"}
                    //       fontSize={["7px", "10px", "12px", "15px"]}
                    //     >
                    //       <Box w="15%">{aman}</Box>
                    //       <Box w="15%">
                    //         {products.productId}/{col}/{item}
                    //       </Box>
                    //       <Box w="15%" textColor="Black">
                    //         {products.productId}
                    //       </Box>
                    //       {/* ))}  */}
                    //       <Box w="15%">{products.productName}</Box>
  
                    //       <Box w="15%">
                    //         <form>
                    //           <input
                    //             type="Number"
                    //             required
                    //             key={item._id}
                    //             // textAlign='center'
                    //             placeholder={
                    //               aman - 1 < len ? prod[aman - 1].Quantity : "0"
                    //               // prod.find((x)=> x.SKUId=== sku).
                    //             }
                    //             onChange={(e) => handleChange(e, i)}
                    //             value={Quantity[`${i}`]}
                    //             className="form-control"
                    //             style={
                    //               textSytle
                    //             }
                    //           />
                    //           {/* placeholder={ prod[i].Quantity!==null ? prod[i].Quantity : '0'} */}
                    //           {/* <p contenteditable="true">This is an editable paragraph.</p> */}
                    //         </form>
                    //         {/* <Box w="15%" bg={item.Status==="Stock Updated" ? '#198754':'#DC3444'}><Text color="white">{item.Status}</Text></Box>  */}
                    //       </Box>
  
                    //       <Box mx={"3"}>
                    //         <Button>
                    //           <Icon
                    //             as={CheckIcon}
                    //             color="green"
                    //             onClick={() =>
                    //               handleClick(products.productId, col, item, i)
                    //             }
                    //           />
                    //         </Button>
                    //       </Box>
                    //     </Flex>
                    //   );

                    
