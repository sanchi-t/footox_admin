// import React, { useState } from 'react';
// import {
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Text,
//   useDisclosure,
//   useToast,
// } from '@chakra-ui/react';
// import { EditIcon, Icon } from "@chakra-ui/icons";
// const CreateUser = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     // Perform signup logic here (e.g. call API)
//     setTimeout(() => {
//       setIsLoading(false);
//       onClose();
//       toast({
//         title: 'Account created.',
//         description: 'Your account has been successfully created.',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });
//     }, 2000);
//   };

//   return (
//     <>
//       {/* <Button colorScheme="blue" onClick={onOpen}>
//         Sign up
//       </Button> */}
//       <Button colorScheme="blue" onClick={onOpen}>
//           <Icon as={EditIcon} />
//         </Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent
//           as="form"
//           onSubmit={handleSubmit}
//           p={6}
//           mx="auto"
//           maxW="md"
//         >
//           <ModalHeader textAlign="center">Create an account</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <FormControl id="email" isRequired>
//               <FormLabel>Email address</FormLabel>
//               <Input
//                 type="email"
//                 placeholder="Enter your email address"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//             </FormControl>
//             <FormControl id="password" mt={4} isRequired>
//               <FormLabel>Password</FormLabel>
//               <Input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//             </FormControl>
//             <Text mt={4} textAlign="center">
//               By clicking "Sign up", you agree to our{' '}
//               <Text as="a" color="blue.500" href="#">
//                 Terms of Service
//               </Text>{' '}
//               and{' '}
//               <Text as="a" color="blue.500" href="#">
//                 Privacy Policy
//               </Text>
//               .
//             </Text>
//           </ModalBody>
//           <ModalFooter justifyContent="center">
//             <Button
//               type="submit"
//               colorScheme="blue"
//               isLoading={isLoading}
//               loadingText="Signing up..."
//               animation="pulse"
//               variant="solid"
//             >
//               Create User
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default CreateUser;

import { useState, useEffect } from "react";
import { EditIcon, Icon, ViewIcon } from "@chakra-ui/icons";
import axios from "axios";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Select,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";

const CreateUser = ({ toggled, toggle }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [roles, setRole] = useState("");
  const [validName, setValidName] = useState(false);
  const [status, setStatus] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [eye, setEye] = useState(false);
  const [getUser, setGetUser] = useState(false);
  const toast = useToast();
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // validation logic goes here
  //     setIsSubmitting(true);
  //   };
  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  let match;
  const handleEye = () => {
    setEye((prev) => !prev);
  };

  if (roles === "admin") {
    match = "/register_hr";
  } else if (roles === "SE") {
    match = "/register-se";
  } else if (roles === "Marketers") {
    match = "/register-marketer";
  }
  const REGISTER_URL = match;
  useEffect(() => {
    setValidName(USER_REGEX.test(name));
  }, [name]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(password);
    console.log(result);
    setValidPass(result);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("heloo Addu");
    console.log(validName, validPass);
    if (validName && validPass) {
      try {
        console.log(REGISTER_URL);
        var data = {
          name: name,
          email: email,
          password: password,
          phone: phone,
          status: status ? "active" : "Inactive",
          role: roles,
        };

        // fetch(`http://localhost:4002${REGISTER_URL}`, {
        //     method: 'POST',
        //     headers: {'content-Type': 'application/json'},
        //     body:JSON.stringify({
        //         name: name, email: email, password: password
        //     })
        // });
        console.log(data);
        // `http://localhost:4000/createUser`
        // `${process.env.REACT_APP_API_BASE_URL}createUser`
        axios.post(`${process.env.REACT_APP_API_BASE_URL}createUser`, data).then((res) => {
          console.log(res.status);
          toggle(!toggled);

          toast({
            title: "Successfull",
            description: "User successfully created",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        });

        setName("");
        setEmail("");
        // setPassword('');
        setPhone(0);
        setStatus("");
        // setMatchPassword('');
        setPassword("");
        onClose();
      } catch (err) {
        if (!err?.response) {
          setErrors("no server response");
        } else if (err?.response?.status === 409) {
          setErrors("employee already exist");
        } else {
          setErrors("registeration failed");
        }
      }
    }
  };

  return (
    <>
      {/* <Button onClick={onOpen}>Sign up</Button> */}
      {/* <Button colorScheme="blue" onClick={onOpen}>
           <Icon as={EditIcon} />
      </Button> */}
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
        style={{ float: "right", marginRight: "3em" }}
      >
        Create User
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create User</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <Divider my={4} borderColor={"black"} />
              <FormControl id="password" mt={4} isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={eye ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleEye}>
                      <ViewIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Divider my={4} borderColor={"black"} />
              <FormControl isRequired isInvalid={errors.phone}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>
              <Divider my={4} borderColor={"black"} />
              <FormControl isRequired isInvalid={errors.role}>
                <FormLabel>Role</FormLabel>
                <Select
                  placeholder="Select a role"
                  value={roles}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="admin">Admin</option>
                  <option value="supervisor">SuperVisor</option>
                  <option value="operator">Operator</option>
                </Select>
                <FormErrorMessage>{errors.role}</FormErrorMessage>
              </FormControl>
              <Divider my={4} borderColor={"black"} />
              <FormControl isRequired>
                <FormLabel>Status</FormLabel>
                <Switch isChecked={status} onChange={() => setStatus(!status)}>
                  {status ? "Active" : "Inactive"}
                </Switch>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                isLoading={isSubmitting}
                type="submit"
                onClick={handleSubmit}
              >
                Create User
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUser;
