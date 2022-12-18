import React from "react";
// import './Carousel.css';
import { useTheme } from "@material-ui/core/styles";
import {
  Box,
  // IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const settings = {
  dots: true,
  arrows: false,
  slide: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
var sectionStyle = {
  filter: 'invert(100%)'

  //backgroundImage: 'none',
  //backgroundImage: "url("+"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E"+")"
};
const sliderStyle={
 
  width: "10px",
  height: "10px",
  borderRadius: "100%",
  background: "black",
  border: 0,
 
}

export default function Carousel() {
  const theme = useTheme();
  const [index, setActiveStep] = React.useState(0);
 
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const [slider, setSlider] = React.useState(null);
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });
  const cards = [
    {
      id: 1000,
      title: "",
      text: "",
      image:
        "https://img.freepik.com/free-psd/winter-sale-banner-design-template_23-2149123167.jpg?w=1380&t=st=1669321937~exp=1669322537~hmac=54b79e5c2deafdb96c11525a59196181d4cfa7d5d579acb4ca62877a7c6fa5c8",
    },
  ];

  return (

<div>
  
  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={sliderStyle}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" style={sliderStyle}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style={sliderStyle}></button>
  </div>
  <div className="carousel-inner" style={{height: '610px'}} overflow="visible">
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" style={sectionStyle}></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" style={sectionStyle}></span>
    <span className="visually-hidden" >Next</span>
  </button>
    <div className="carousel-item active">
    <img src='https://i.pinimg.com/originals/af/c5/2d/afc52d024edc3c9afc2c65f00bd7df11.jpg' className="h-100 d-inline-block" alt="..."/>    </div>
    <div className="carousel-item">
    <img src='https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-854.jpg?w=2000' className="h-100 d-inline-block" alt="..."/>    </div>
    
    <div className="carousel-item">
      <img src='https://www.futbolemotion.com/imagescontenidos/lanzamientos/nike-street-gato/banner.jpg' className="h-100 d-inline-block" alt="..."/>
    </div>
    
  </div>
</div>

  
  
    <Box
      position={"relative"}
      marginTop={"40px"}
      marginBottom={"90px"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}>
      
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
          key={card.id}
          height={"3xl"}
          color="whitesmoke"
          position="relative"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
           // backgroundImage="linear-gradient(teal,skyblue,royalblue)"
          background='url(https://cdn11.bigcommerce.com/s-g2v98q4kwy/images/stencil/original/carousel/651/11.18_Banner_Clearance.jpg?c=2) center/cover no-repeat'
          
          >
            {/* This is the block if we need to change, to customize the caption */}
            <Container size="container.lg" height="600px" m="auto" position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                  
                </Heading>
                <Text fontSize={['sm', 'md', 'lg', 'xl']} color="">
                  {card.text}
                </Text>
                <Flex gap={isLargerThan ? "2rem" : "1rem"} justify={"center"}>
                  {/* <Button
                   fontSize={['xs','sm', 'md', 'lg', 'xl']}
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/men">MENS SHOP </Link>
                    
                  </Button>
                  <Button
                    fontSize={["10px", "sm", "md", "lg"]}
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/women">WOMENS SHOP </Link>
                  </Button>
                  <Button
                    fontSize={["10px", "sm", "md", "lg"]}
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/shoes">SPORTS KIT </Link>
                  </Button> */}
                </Flex>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
</div>
  );
};
//     <Box
//       position={"relative"}
//       height={"600px"}
//       width={"full"}
//       overflow={"hidden"}
//     >
//       {/* CSS files for react-slick */}
//       <link
//         rel="stylesheet"
//         type="text/css"
//         charSet="UTF-8"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//       />
//       <link
//         rel="stylesheet"
//         type="text/css"
//         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//       />
//       {/* Left Icon */}
//       {/* <IconButton
//         aria-label="left-arrow"
//         variant="ghost"
//         position="absolute"
//         left={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickPrev()}
//       >
//         <BiLeftArrowAlt size="40px" />
//       </IconButton> */}
//       {/* Right Icon */}
//       {/* <IconButton
//         aria-label="right-arrow"
//         variant="ghost"
//         position="absolute"
//         right={side}
//         top={top}
//         transform={"translate(0%, -50%)"}
//         zIndex={2}
//         onClick={() => slider?.slickNext()}
//       >
//         <BiRightArrowAlt size="40px" />
//       </IconButton> */}
//       {/* Slider */}
//       <Slider {...settings} ref={(slider) => setSlider(slider)}>
//         {cards.map((card) => (
//           <Box
//           key={card.id}
//           height={"6xl"}
//           color="whitesmoke"
//           position="relative"
//           backgroundPosition="center"
//           backgroundRepeat="no-repeat"
//           backgroundSize="cover"
//          // backgroundImage="linear-gradient(teal,skyblue,royalblue)"
//          background='url(https://img.freepik.com/free-photo/front-view-cyber-monday-shopping-cart-with-bags-copy-space_23-2148657638.jpg?w=1380&t=st=1664900415~exp=1664901015~hmac=89c39369bd2b9d5caa08a3b57e7c2ff809dbaea870971c47018c09ddb72496b9) center/cover no-repeat'
//         >
//           <Box
//             key={card.id+1}
//             height={"6xl"}
//             color="whitesmoke"
//             position="relative"
//             backgroundPosition="center"
//             backgroundRepeat="no-repeat"
//             backgroundSize="cover"
//            // backgroundImage="linear-gradient(teal,skyblue,royalblue)"
//            background='url(https://png.pngtree.com/thumb_back/fw800/background/20201010/pngtree-black-friday-sale-background-design-template-banner-discount-vector-poster-business-image_407567.jpg) center'
//           >
//             {/* This is the block if we need to change, to customize the caption */}
//             <Container size="container.lg" height="600px" m="auto" position="relative" >
//               <Stack
//                 spacing={6}
//                 w={"full"}
//                 maxW={"lg"}
//                 position="absolute"
//                 top="50%"
//                 transform="translate(0, -50%)"
//               >
//                 <Heading fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}>
//                   {card.title}
//                 </Heading>
//                 <Text fontSize={['sm', 'md', 'lg', 'xl']} color="">
//                   {card.text}
//                 </Text>
//                 <Flex gap={isLargerThan ? "2rem" : "1rem"} justify={"center"}>
//                   <Button
//                    fontSize={['xs','sm', 'md', 'lg', 'xl']}
//                     bg="black"
//                     color="whitesmoke"
//                     _hover={{
//                       border: "1px solid black",
//                       background: "none",
//                       color: "blue",
//                     }}
//                   >
//                     <Link to="/men">MENS SHOP </Link>
//                   </Button>
//                   <Button
//                     fontSize={["10px", "sm", "md", "lg"]}
//                     bg="black"
//                     color="whitesmoke"
//                     _hover={{
//                       border: "1px solid black",
//                       background: "none",
//                       color: "blue",
//                     }}
//                   >
//                     <Link to="/women">WOMENS SHOP </Link>
//                   </Button>
//                   <Button
//                     fontSize={["10px", "sm", "md", "lg"]}
//                     bg="black"
//                     color="whitesmoke"
//                     _hover={{
//                       border: "1px solid black",
//                       background: "none",
//                       color: "blue",
//                     }}
//                   >
//                     <Link to="/shoes">SPORTS KIT </Link>
//                   </Button>
//                 </Flex>
//               </Stack>
//             </Container>
//           </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
//
