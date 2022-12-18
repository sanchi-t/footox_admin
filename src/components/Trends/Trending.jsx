import { Box, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getMensData } from "../../redux/PagesReducer/action";
import { HomeDis } from "../HomeDisplay/HomeDisplay";
const Trending = () => {
  const dispatch = useDispatch();
  const mensD = useSelector((store) => store.pagesReducer.mensD);

  useEffect(() => {
    if (mensD?.length === 0) {
      dispatch(getMensData());
    }
  }, [dispatch, mensD?.length]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 16,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Heading align={"left"} fontFamily={"Times New Roman Times serif"} fontSize= {"35px"} fontWeight={"bold"}> New Arrivals</Heading>
      <Box borderTop="1px solid grey" borderBottom="1px solid grey" padding={"20px"}>
        
        <Slider {...settings} centerPadding={"35px"}>
          {mensD?.length > 0 &&
            mensD.map((item) => {
              return <HomeDis key={item.key} item={item} />;
            })}
        </Slider>
      </Box>
    </div>
  );
};

export default Trending;
