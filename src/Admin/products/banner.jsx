import { Box, Button, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getBannerData } from "../../redux/DataReducer/action";
import { AdminUpdate } from "../AdminModal";
import AdminNavbar from "../AdminNavbar";
import { DeleteIcon, Icon } from "@chakra-ui/icons";

const Banner = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 468px)");
  const dispatch = useDispatch();

  const products = useSelector((state) => state.dataReducer.products);
  const deleteProduct = (id) => {
    dispatch(deleteData(id)).then(() => {
      dispatch(getBannerData());
    });
  };
  useEffect(() => {
    console.log('admin?');
    dispatch(getBannerData());
  }, [dispatch]);

  return (
    <>
      <AdminNavbar />
      <br />
      <Box
        m="auto"
        w={"95%"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={"1rem"}
      >
        {(products[0]?.images!=undefined) &&(
          <>
        {products.map((item) => (
          <Flex
            alignItems={"center"}
            textAlign={"left"}
            justifyContent={"space-between"}
            my={"5"}
            fontSize={["7px", "10px", "12px", "15px"]}
          > 
            <Box w="15%">{item.name}</Box>
            <Box width={"300px"} mx={"2"}>
              <Image width={"100%"} src={item.images[0]} alt={'item.name'} />
            </Box>
            <Box>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w="10%"
              >
                <Box mx={"3"}>
                  <Button>
                    <Icon
                      as={DeleteIcon}
                      color="red"
                      onClick={() => deleteProduct(item.id)}
                    />
                  </Button>
                </Box>
                <Box mx={"3"}>
                  <AdminUpdate
                    id={item.id}
                    products={products}
                    dispatch={dispatch}
                    getBannerData={getBannerData}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        ))}
        </>
        )}
      </Box>
    </>
  );
};

export default Banner;