import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Loading from "../components/Loading/Loading";
import Trending from "../components/Trends/Trending";
import { imagesData } from "../utils/data";
import Navbar from "../components/Navbar/Navbar"
import './home.css'
import logo from '../img/fexible.gif';
import logo1 from '../img/1.gif';
import logo2 from '../img/shoe.gif';
import logo3 from '../img/sus.gif';
import logo4 from '../img/123.jpg';
import logo5 from '../img/shoes.png';
import logo6 from '../img/coupon1.png';

const Home = () => {
  const loading = useSelector((store) => store.pagesReducer.isLoading);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/> <br/>
      {loading ? (
        <Loading />
      ) : (
        <Box w="95%" m="auto">
          <Carousel />
          <Trending />
        </Box>
      )}

      <Box my={"10"}>
        <Stack spacing={"5"} mx={"9"} my={"6"} paddingTop={"50px"}>
          <Heading textAlign={"left"} fontFamily={"Times New Roman Times serif"} fontSize= {"35px"} fontWeight={"bold"}>WHO ARE YOU SHOPPING FOR?</Heading>
          <Box gap="1rem" paddingTop={"50px"} paddingBottom={"50px"} style={{backgroundColor:"#D0E9E2"}}>
          <div class="container" >
              <div class="row">
                <div class="col-sm">
                <Box
                
                h={"100%"}
                overflow="hidden"
                position={"relative"}
                gridTemplateColumns={[1, 2, 3]}
              >
                <Image
                  transition={"all ease 0.3s"}
                  objectFit={"cover"}
                  position={"relative"}
                  w="100%"
                  h={"60vh"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  src={"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"}
                  alt={imagesData[0].title}
                />
                <Text
                  position={"absolute"}
                  color={"black"}
                  top={["260px", "230px", "220px", "230px", "310px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                  fontFamily={"Open Sans sans-serif"}

                >
                  {"sports"}
                </Text>
                <Button
                  onClick={() => navigate(imagesData[0].route)}
                  position={"absolute"}
                  top={["300px", "270px", "270px", "300px", "385px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  p={"1rem 4rem"}
                  mt={0}
                  border={"none"}
                  _hover={{ transition: "0,5s", bg: "black", color: "white" }}
                >
                  SHOP NOW
                </Button>
              </Box>
                </div>
                <div class="col-sm">
                <Box
                h={"100%"}
                overflow="hidden"
                position={"relative"}
                gridTemplateColumns={[1, 2, 3]}
              >
                <Image
                  transition={"all ease 0.3s"}
                  objectFit={"cover"}
                  position={"relative"}
                  w="100%"
                  h={"60vh"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  src={"https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80"}
                  alt={"imagesData[1].title"}
                />
                <Text
                  position={"absolute"}
                  color={"#825C39"}
                  top={["260px", "230px", "220px", "230px", "310px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  fontSize={["6xl"]}
                  fontFamily={"Open Sans sans-serif"}
                >
                  {"casual"}
                </Text>
                <Button
                  onClick={() => navigate(imagesData[0].route)}
                  position={"absolute"}
                  top={["300px", "270px", "270px", "300px", "385px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  p={"1rem 4rem"}
                  mt={0}
                  border={"none"}
                  _hover={{ transition: "0,5s", bg: "black", color: "white" }}
                >
                  SHOP NOW
                </Button>
              </Box>
                </div>
                <div class="col-sm">
                <Box
                h={"100%"}
                overflow="hidden"
                position={"relative"}
                gridTemplateColumns={[1, 2, 3]}
              >
                <Image
                  transition={"all ease 0.3s"}
                  objectFit={"cover"}
                  position={"relative"}
                  w="100%"
                  h={"60vh"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  src={"https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"}
                  alt={imagesData[2].title}
                />
                <Text
                  position={"absolute"}
                  color={"#E3DFE2"}
                  top={["260px", "230px", "220px", "230px", "310px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                  fontFamily={"Open Sans sans-serif"}

                >
                  {"sneakers"}
                </Text>
                <Button
                  onClick={() => navigate(imagesData[0].route)}
                  position={"absolute"}
                  top={["300px", "270px", "270px", "300px", "385px"]}
                  left={["15px", "50px", "50px", "50px", "50px"]}
                  p={"1rem 4rem"}
                  mt={0}
                  border={"none"}
                  _hover={{ transition: "0,5s", bg: "black", color: "white" }}
                >
                  SHOP NOW
                </Button>
              </Box>
                </div>
              </div>
            </div>
            <div style={{paddingTop:50}}>
            
              
              <Box
                h={"100%"}
                // backgroundColor={"#2E8185"}
                overflow="hidden"
                position={"relative"}
                gridTemplateColumns={[1, 2, 3]}
              >
                <Image
                  // height="20px"
                  padding="20px"
                  transition={"all ease 0.3s"}
                  objectFit={"cover"}
                  position={"relative"}
                  w="100%"
                  h={"95vh"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  src={logo4}
                  alt={"item.title"}
                />
                <Text
                  position={"absolute"}
                  color={"#D6854B"}
                  top={["260px", "230px", "220px", "230px", "270px"]}
                  left={["15px", "50px", "50px", "50px", "100px"]}
                  fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                  fontFamily={"Open Sans sans-serif"}

                >
                  {"MEN"}
                </Text>
                <Button
                  onClick={() => navigate("item.route")}
                  position={"absolute"}
                  top={["300px", "270px", "270px", "300px", "350px"]}
                  left={["15px", "50px", "50px", "50px", "100px"]}
                  p={"1rem 4rem"}
                  mt={0}
                  border={"none"}
                  _hover={{ transition: "0,5s", bg: "black", color: "white" }}
                >
                  SHOP NOW
                </Button>
                </Box>
                <Box
                h={"100%"}
                // backgroundColor={"#2E8185"}
                overflow="hidden"
                position={"relative"}
                gridTemplateColumns={[1, 2, 3]}
              >
                <Image
                  // height="20px"
                  padding="20px"
                  transition={"all ease 0.3s"}
                  objectFit={"cover"}
                  position={"relative"}
                  w="100%"
                  h={"95vh"}
                  _hover={{
                    transform: "scale(1.2)",
                    transformOrigin: "50% 50%",
                  }}
                  src={"https://images.pexels.com/photos/2044228/pexels-photo-2044228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  alt={"item.title"}
                />
                <Text
                  position={"absolute"}
                  color={"#121615"}
                  top={["260px", "230px", "220px", "230px", "270px"]}
                  left={["15px", "50px", "50px", "50px", "100px"]}
                  fontSize={["2xl", "3xl", "4xl", "5xl", "6xl"]}
                  fontFamily={"Open Sans sans-serif"}

                >
                  {"WOMEN"}
                </Text>
                <Button
                  onClick={() => navigate("men?sortBy=")}
                  position={"absolute"}
                  top={["300px", "270px", "270px", "300px", "350px"]}
                  left={["15px", "50px", "50px", "50px", "100px"]}
                  p={"1rem 4rem"}
                  mt={0}
                  border={"none"}
                  _hover={{ transition: "0,5s", bg: "black", color: "white" }}
                >
                  SHOP NOW
                </Button>
              </Box>
            </div>
          </Box>
          <Flex
          my={"7"}
          // bg="#D0E9E2"
          color={"black"}
          p="2rem "
          justify={"right"}
          gap="2rem"
          display={"block"}
          paddingTop="80px"
        >
          <Heading  class="head">Why Choose us!</Heading>
          <p style={{"paddingLeft":"200px","paddingRight":"200px"}}>Our shoes are designed for all-day comfort, so you can wear them anywhere, any time. Say hello to a leaner closet and that walking-on-clouds feeling you've always dreamed of. Your feet will thank you.</p><br></br>
          <div style={{paddingLeft:100,paddingRight:100}}>
          <div id="outer">
          <img src= {logo} style={{width:130}}/>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <img src ={logo1} style={{height: 130}}/>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
          <img src={logo2} style={{ height: 130}} />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
            <img src={logo3} style={{ height: 130 }} />
          </div><br></br>

          <div id="inner">
            {/* <img src={logo} style={{ width: 130 }} /> */}
            <h3>Flexible &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Light weight&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Quality&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sustainability</h3>
            
          </div>
          </div>
          
        </Flex>
        <Heading class="head">Coupon And Discounts</Heading>


          <Image src={logo6} style={{paddingLeft:170,paddingRight:0}}></Image>
          <Image src={logo5} style={{height:600}}></Image>


        </Stack>
      </Box>
      <Box my={"10"}>
        <Stack
          spacing={"5"}
          mx={"7"}
          my={"6"}
          w="95%"
          m="auto"
          textAlign={"left"}
        >
          {/* <Text fontSize={["sm", "md", "lg", "xl"]}>
            As a creator, you look for ways to excel and express yourself when
            and where you can, from reaching for that last rep to evolving your
            streetwear style. Log miles or tear down the baseline in men's shoes
            with responsive cushioning. Rep an athletic style off the field in
            lifestyle apparel born of sport heritage. From athletes to
            streetwear enthusiasts, adidas men’s clothing and shoes exist to let
            you go harder, dig deeper, and get the most out of yourself, from
            the pitch to the street to the road less traveled.
          </Text> */}
        </Stack>
        <br></br>
        <hr></hr>
        <Flex
          my={"7"}
          // bg="#D0E9E2"
          color={"black"}
          p="2rem "
          justify={"right"}
          gap="2rem"
          display={"block"}
          paddingTop="80px"
        >
          {/* <Heading class="head">Why Choose us</Heading> */}
          {/* <p style={{ "paddingLeft": "200px", "paddingRight": "200px" }}>Our shoes are designed for all-day comfort, so you can wear them anywhere, any time. Say hello to a leaner closet and that walking-on-clouds feeling you've always dreamed of. Your feet will thank you.</p><br></br>
          <div style={{ paddingLeft: 100, paddingRight: 100 }}> */}
            <div id="outer">
            <img src={"https://cdn.iconscout.com/icon/premium/png-128-thumb/return-policy-1451839-1226834.png"} style={{ width: 130 }} />
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <img src={"https://media.istockphoto.com/id/480824303/photo/made-in-india-blue-grunge-round-stamp.jpg?s=612x612&w=is&k=20&c=WQbYYsoaD7xmUJ91sI4-EsM_kjjnIzGWzIci2554Ku8="} style={{ height: 130 }} />
            <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <img src={"https://cdn-icons-png.flaticon.com/128/4947/4947265.png"} style={{ height: 130 }} />
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
              {/* <img src={logo3} style={{ height: 130 }} /> */}
            </div><br></br>
            <div id="inner">
            {/* <img src={logo} style={{ width: 130 }} /> */}
            <h3>No asked question &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Made in India &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Free Delivery</h3>
            
          </div>

            {/* <div id="inner"> */}
              {/* <img src={logo} style={{ width: 130 }} /> */}
              {/* <h3>Flexible Returns &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Light weight&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Quality&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h3> */}
              {/* <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
  */}
            {/* </div> */}
          {/* </div> */}

        </Flex>
        
        <Flex
          my={"10"}
          bg="#D0E9E2"
          color={"black"}
          p="3rem "
          justify={"center"}
          gap="2rem"
          display={"block"}
        >
          <Heading>JOIN FOOTOX TODAY AND GET 15% OFF</Heading>
          
          <Button
            my={"4"}
            bg="black"
            color="whitesmoke"
            p="1.5rem 2rem"
            border={"1px solid beige"}
            _hover={{
              background: "none",
              color: "teal",
              border: "1px solid black",
            }}
            onClick={() => navigate("/register")}
          >
            Sign Up
          </Button>
        </Flex>
        
      </Box>
    </div>
  );
};

export default Home;