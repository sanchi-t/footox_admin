import React from "react";



import { BsHeartFill, BsHeart, BsAlarm, BsSearch, BsPerson } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Text,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../../img/disc1.png";
import logo2 from "../../img/disc2.png";
import logo3 from "../../img/disc3.png";

//import { FiUser } from "react-icons/fi";
import { BsSuitHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { DarkModeBtn } from "../DarkMode/DarkModeBtn";
import { useSelector } from "react-redux";
import SideMenu from "../Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import './Navbar.css';
import { GiMonsterGrasp } from "react-icons/gi";

const sliderStyle={
 
  width: "10px",
  height: "10px",
  borderRadius: "100%",
  background: "black",
  border: 0,
 
}

const Navbar = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const auth = useSelector((state) => state.AuthReducer.isAuth);

  const cart = useSelector((store) => store.cart.cart);
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const { colorMode } = useColorMode();
  const baseStyle = {
    color: "black",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "#027bff",
    textDecoration: "none",
    transition: "0.5s",
    
    borderBottom: "2px solid black",
  };

  const handleHome = () => {
    navigate("/");
  };
  const handleCart = () => {
    navigate("/cart");
  };
  const handleHeart = () => {
    navigate("/wishlist");
  };
  const handleSignup = () => {
    navigate("/register");
  };
  return (
    <div className="Navbar">
      
		{/* <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
		<div class="slide">
			<img src={logo} height="300"alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
		<div class="slide">
			<img src={logo} height="500" alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
		<div class="slide">
			<img src={logo} height="300"alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
		<div class="slide">
			<img src={logo} height="500" alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="500" alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
		<div class="slide">
			<img src={logo} height="300"alt="" />
		</div>
    <div class="slide">
			<img src={logo} height="200" alt="" />
		</div>
		<div class="slide">
			<img src={logo} height="500" alt="" />
		</div> */}
    <div className="maindiscbody">
      <span className="span1"><p className="navdisc">Free Shipping</p><p className="navdisc">Cash On Delivery</p><p className="navdisc">7 day exchange policy</p><p className="navdisc">Great Offers!!</p></span></div>

    
    
		

     
      
      <Flex
      
      
        h={"8vh"}
        
        display="flex"
        justifyContent={"right"}
        gap="20px"
        boxShadow={"4xl"}
        shadowColor= {'#171717'}
        alignItems={"center"}
        bg={colorMode==="dark"?'none':'#D0E9E2'}
       
      >
{/*         
        {auth ? (
          <Box>
            <Profile colorMode={colorMode} />
          </Box>
        ) : (
          <Button
            bg={"black"}
            color={"whitesmoke"}
            border={"1px solid beige"}
            Icon={"fa heart"}
            size={"25px"}
            
            
            _hover={{
              bg: "none",
              color: "teal",
              
            }}
            onClick={handleSignup}
          >
            Sign up
          </Button>
          
        )}
       <Icon
                w={6}
                h={6}
                my="4"
                mx="3"
                as={BsSuitHeart}
                cursor={"pointer"}
              />
         {auth ? (
          <Box>
            <Profile colorMode={colorMode} />
          </Box>
        ) : (
          <Button
          
            Icon={BsAlarm}
            bg={"black"}
            color={"whitesmoke"}
            border={"5px solid beige"}
            _hover={{
              bg: "none",
              color: "teal",
              
            }}
            onClick={handleSignup}
          >
            Track Order
          </Button>
          
        )} */}
         <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/login"
            >
              
              <Text
              
                color={colorMode === "dark" ? "white" : "black"}
                fontSize={"15px"}
                my="4"
                
                mx="2"
                fontFamily={"GiMonsterGrasp"}
                fontWeight={"bold"}
              >
                Login/Signup
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/login"
            >
              <Text
                fontSize={"15px"}
                color={colorMode === "dark" ? "white" : "black"}
                fontWeight={"bold"}
                fontFamily={"GiMonsterGrasp"}
                my="9"
                mx="2"
              >
                Track Order
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/login"
            >
              <Text
                fontSize={"15px"}
                color={colorMode === "dark" ? "white" : "black"}
                fontWeight={"bold"}
                fontFamily={"GiMonsterGrasp"}
                my="9"
                mx="2"
              >
                Help
              </Text>
              
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/login"
            >
              <Text
                fontSize={"15px"}
                color={colorMode === "dark" ? "white" : "black"}
                fontWeight={"bold"}
                fontFamily={"GiMonsterGrasp"}
                my="9"
                mx="2"
              >
                Returns
              </Text>
              
            </NavLink>

            <hr></hr>
        
       <Box mr={['5','6','7','9']}> <DarkModeBtn /></Box>
      </Flex>
      <br></br>
      
      <Flex fontWeight="bold">
        
        <HStack onClick={handleHome} cursor={"pointer"}>
        &nbsp; &nbsp;
        <img style={{height: 70 }} src={require('./logofootox.png')} />
        </HStack>
        <Spacer />
       
        {isLargerThan ? (
          <HStack>
            &nbsp; &nbsp;
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/"
            >
             
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                fontFamily={"GiMonsterGrasp"}
                fontWeight={"bold"}
                fontSize={"18px"}
                my="4"
                gap="20px"
                mx="2"
              >
                Home
              </Text>
            </NavLink>
            &nbsp;
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/allproducts"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                fontFamily={"GiMonsterGrasp"}
                fontWeight={"bold"}
                fontSize={"18px"}
                my="4"
                gap="20px"
                mx="2"
              >
                NewArrivals
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/men"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                fontFamily={"GiMonsterGrasp"}
                fontWeight={"bold"}
                fontSize={"18px"}
                my="4"
                gap="20px"
                mx="2"
              >
                Men
              </Text>
            </NavLink>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/women"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                fontFamily={"GiMonsterGrasp"}
                fontWeight={"bold"}
                fontSize={"18px"}
                my="4"
                gap="20px"
                mx="2"
              >
                Women
              </Text>
            </NavLink>
            &nbsp; &nbsp;
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to="/shoes"
            >
              <Text
                color={colorMode === "dark" ? "white" : "black"}
                fontFamily={"GiMonsterGrasp"}
                fontWeight={"bold"}
                fontSize={"18px"}
                my="4"
                mx="2"
                gap="20px"
              >
                Shoes
              </Text>
            </NavLink>
          </HStack>
        ) : null}

        <Spacer />

        <HStack>
          {/* <Box>
            <Icon
              w={6}
              h={6}
              my="4"
              mx={isLargerThan ? "3" : "1"}
              as={BsSearch}
            />
          </Box> */}

          <Box onClick={handleHeart}>
            <Flex
              onClick={handleCart}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              
              

                <Icon
                w={6}
                h={6}
                my="4"
                mx="3"
                as={BsSearch}
                cursor={"pointer"}
              />
               &nbsp; &nbsp;
              <Icon
                w={6}
                h={6}
                my="4"
                mx="3"
                as={BsPerson}
                cursor={"pointer"}
              />
              &nbsp; &nbsp;
              <Icon
                w={6}
                h={6}
                my="4"
                mx="3"
                as={BsSuitHeart}
                cursor={"pointer"}
              />
            
              <Text
                position="relative"
                top="-15px"
                left="-25px"
                borderRadius="50%"
                p="0rem 0.3rem"
                bg="blue.500"
                color="white"
              >
                {wishlist ? wishlist.length : 0}
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex
              onClick={handleCart}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent={"center"}
            >
              <Icon w={6} h={6} my="4" mx="3" as={BsBag} cursor={"pointer"} />
              <Text
                position="relative"
                top="-15px"
                left="-25px"
                borderRadius="50%"
                p="0rem 0.3rem"
                bg="blue.500"
                color="white"
              >
                {cart ? cart.length : 0}
              </Text>
            </Flex>
          </Box>
          <Box> {!isLargerThan && <SideMenu />}</Box>
        </HStack>
      </Flex>
   
      
</div>
  );
};

export default Navbar;

//BsSearch Icon