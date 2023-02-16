import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  Box,
  Stack,
  useColorMode,
  Select
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
// import { AddData } from "./AddModal";
// import StockUpdate from "./products/viewProduct1";
import { getData } from "../redux/DataReducer/action";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <Icon
          as={HamburgerIcon}
          color={colorMode === "dark" ? "white" : "black"}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Dashboard</DrawerHeader>

          <DrawerBody mt={"1rem"}>
            <Stack spacing={"8"}>
              <Box>
                <Link to="/">Home</Link>
              </Box>
              <Box>
              
              <Menu isLazy>
              <MenuButton>Products</MenuButton>
                  <MenuList>
                    <MenuItem><Link to="/addproduct">Add products</Link></MenuItem>
                    <MenuItem><Link to="/viewProduct">Product Details</Link></MenuItem>
                    {/* <MenuItem>Product edit</MenuItem> */}
                  </MenuList>
</Menu>
          
              </Box>
              <Box>
                <Link to="/StockPage">Stock Managment</Link>
              </Box>
              <Box>
                <Link to="/orderManagement">Order Managment</Link>
              </Box>
              <Box>
                <Link to="/Instagram">Instagram Links</Link>
              </Box>
              <Box>
                <Link to="/SendMail">Send Mail</Link>
              </Box>
              <Box>
                <Link to="/women">Women's</Link>
              </Box>
              <Box>
                <Link to="/shoes">Shoes</Link>
              </Box>
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
