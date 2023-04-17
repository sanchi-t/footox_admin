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
// import {  EditIcon} from "@chakra-ui/icons";
const EditUser = ({ emailid, users }) => {
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

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  let match;
  const handleEye = () => {
    setEye((prev) => !prev);
  };

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

  useEffect(() => {
    if (emailid) {
      //   const users = axios.get(`${process.env.REACT_APP_API_BASE_URL}getUserByEmail`);
      //   console.log(users)
      if (users) {
        setName(users.name);
        setEmail(users.email);
        setPhone(users.phone);
        setPassword(users.password);
        setRole(users.role);
        setStatus(users.status);
      }
    }
  }, []);
  console.log(emailid, "asdfghj");
  console.log(status, "sta");
  //   console.log(users, "amaan");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("heloo Addu");
    console.log(validName, validPass);
    if (validName) {
      try {
        console.log(REGISTER_URL);
        var data = {
          name: name,
          email: email,
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
        axios.post(`http://localhost:4000/editUser`, data).then((res) => {
          console.log(res.status);

          toast({
            title: "Successfull",
            description: "User successfully Updated",
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
          toast({
            title: "error",
            description: "No server response",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        } else if (err?.response?.status === 409) {
          setErrors("employee already exist");
          toast({
            title: "error",
            description: "Employee already exits",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
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
      <Button onClick={onOpen} color="green">
        <Icon as={EditIcon} />
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
              {/* <Divider my={4} borderColor={"black"} />
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
              </FormControl> */}
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
                  //   placeholder= {roles}
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
                <Switch
                  isChecked={status === "active"}
                  onChange={() => {
                    if (status === "active") {
                      setStatus("Inactive");
                    }
                    if (status === "Inactive") {
                      setStatus("active");
                    }
                  }}
                >
                  {status === "active" ? "Active" : "Inactive"}
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
                Edit User
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditUser;
