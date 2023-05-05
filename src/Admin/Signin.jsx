import { useNavigate, useLocation } from "react-router";
import { useState, useContext } from "react";
import useAuth from "../Admin/hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/AuthReducer/action";
// import {login} fom "../"
import { AuthContext } from "./Context/authProvider";
// import { useContext } from 'react';
// import useAuth from "./hooks/useAuth";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";
const Signin = () => {
  const navigate = useNavigate();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const location = useLocation();
  const dispatch = useDispatch();
  const from = "/viewProduct";

  // console.log(location.state?.from?.pathname );

  const { setIsLoggedIn } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const toast = useToast();
  const handleEye = () => {
    setEye((prev) => !prev);
  };

  const API = axios.create({
    // `${process.env.REACT_APP_API_BASE_URL}createUser`
    // baseURL: "http://localhost:4000",
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("adminLogin", {
        name,
        password,
      }).then((res) => {
        console.log(res);
        if (res?.data.name) {
          const role = res?.data.role;
          console.log({ role: `${role}`, name: `${name}` });
          setIsLoggedIn({ role: `${role}`, name: `${name}` });
          // setIsLoggedIn(true);
          // console.log(auth, 'asdf');
          setName("");
          setPassword("");
          var userInfo = {
            name: res.data.name,
            role: `${role}`,
            loggedIn: true,
          };
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          // localStorage.setItem('token', res.data.token);
          navigate(from, { replace: true });
        } else {
          console.log("incorrect submission", res?.data.message);
          setError(res?.data.message);
        }
      });
      console.log("working");
      toast({
        title: "Login Succesful",
        description: "You are logged in.",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });

      // if (name && password) {
      //   const params = {
      //     name,
      //     password,
      //   };
      //   dispatch(login(params, toast)).then((res) => {
      //     // console.log(res.payload)
      //     if (res.payload.msg === "login successfully") {
      //       const role = res.payload.role;
      //       setIsLoggedIn({"role":`${role}`, "name":`${name}`});
      //       toast({
      //         title: "Login Success",
      //         description: "You are successfully logged in",
      //         status: "success",
      //         duration: 3000,
      //         isClosable: true,
      //         position: "top",
      //       });
      //       navigate(from, { replace: true });
      //     } else {
      //       toast({
      //         title: res.payload.msg,
      //         status: "error",
      //         duration: 3000,
      //         isClosable: true,
      //         position: "top",
      //       });
      //     }
      //   });
      // }
    } catch (err) {
      if (!err?.response) {
        setError("no server response");
        console.log("eror");
      } else {
        const something = err.response.data.message;
        console.log(something);
        toast({
          title: "Login failed.",
          description: "Incoorect Username or password.",
          description: something,
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
        setError("registeration failed");
      }
    }
  };

  return (
    <>
      {/* <div className="App">
        <form  onSubmit={handleSubmit}>
        <p>{error}</p>
      <h1>SignIn</h1>
      <div>
        <label htmlFor="username">Username</label>
        <input 
        type='text'
        id = 'username'
        onChange={(e) => setName(e.target.value)}
        required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
        type='text'
        id = 'password'
        onChange={(e) => setPassword(e.target.value)}
        required
        />
      </div>
      <button disabled = {!name && !password ? true : false}>Submit</button>
        </form>
    </div> */}

      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textTransform={"uppercase"}>
              Sign in to your account
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={eye ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleEye}>
                      <ViewIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"black"}
                  color={"whitesmoke"}
                  _hover={{
                    bg: "none",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={handleSubmit}
                >
                  {loading ? <Spinner /> : "Sign in"}
                </Button>
              </Stack>
              {/* <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?
                  <RouterLink to="/register" color={"blue.400"}>
                    Signup
                  </RouterLink>
                </Text>
              </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Signin;
