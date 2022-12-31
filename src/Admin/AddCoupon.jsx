import React from 'react';
import { addCoupon, getCoupon, getOneCoupon } from "../redux/DataReducer/action";
import FormInput from '../Forms/Forms';
import {useNavigate} from 'react-router-dom';
import { Box, Flex, VStack, Heading, FormControl, FormLabel, RadioGroup, Radio, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import moment from "moment";
import TextField from '@material-ui/core/TextField';


// import other pkg
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { val1 } from "./SubMenu";
import { val2 } from "./SideBar";


// import utils

// const setToast = (
//     toast,
//     title,
//     status,
//     duration = 2000,
//     description
//   ) => {
//     toast({
//       title,
//       description,
//       status,
//       duration,
//       isClosable: true,
//       position: "top",
//     });
//   };
let val = { h: "Add Coupon", status: '', code: '', category: '', startDate: '', endDate: '', type: '', value: '', limit: '' };
const AddCoupon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const location = useLocation();
    const [isEditted, setisEditted] = useState(false)
    const toast = useToast();




    if (location?.state?.mode==='edit') {
        if (!isEditted) {
            dispatch(getOneCoupon(location.state.id, location.state.mode)).then(response => {
                val = response.data[0];
                val.h = "Edit Coupon";
                const a=moment(val.startDate).utc().format('YYYY-MM-DD');
                const b=moment(val.endDate).utc().format('YYYY-MM-DD');
                val.startDate=a;
                val.endDate=b;
                setisEditted(true)

            });
        }
    }

    else if( val2?.h!=='abc'){
        return;
    }
    else if(val1?.h==='Add Coupon'){
        val=val = { h: "Add Coupon", status: '', code: '', category: '', startDate: '', endDate: '', type: '', value: '', limit: '' };
        val1.h="nope";
        

        // }
    }




    const handleSubmit = (event) => {
        event.preventDefault()
        let target = event.target;
        let x = {}

        for (let i = 0; i < target.couponStatus.length; i++) {
            if (target.couponStatus[i].checked) {
                x.status = target.couponStatus[i].value;
                break;
            }
        }
        x.code = target.couponCode.value;
        x.category = target.discountCategory.value
        x.startDate = target.StartDate.value;
        x.endDate = target.EndDate.value;

        for (let i = 0; i < target.couponType.length; i++) {
            if (target.couponType[i].checked) {
                x.type = target.couponType[i].value;
                break;
            }
        }
        x.value = target.DiscountValue.value;

        x.limit = target.CouponLimit.value;

        dispatch(addCoupon(x), toast).then(() => {
            toast({
                title: "success",
                description: "suceess",
                status: "success",
                duration: 2000,
                isClosable: true,
                position: "top",
            });
            dispatch(getCoupon());
        });


        target.reset();
        navigate("/coupon",{state:{mode:'add'}});

    }


    // x.status=target.couponStatus[i].value;
    // x.code=target.couponCode.value;
    // x.category=target.discountCategory.value
    // x.startDate=target.StartDate.value;
    // x.endDate=target.EndDate.value;
    // x.type=target.couponType[i].value;
    // x.value=target.DiscountValue.value;
    // x.limit=target.CouponLimit.value;



    return (
<>            <Heading>{val.h}</Heading><br></br>
            <Box
                m="auto"
                w={"95%"}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                p={"1.1rem"}
            >
                <Flex
                    textAlign={"center"}
                    justifyContent={"center"}
                    my={"5"}
                >

<form onSubmit={handleSubmit}>
    <fieldset>
       
 

 
 
       
 
<p style={{position: 'relative',float: 'left' ,paddingRight:'30px' }}>
        <label >Coupon Code: <input defaultValue={val.code} style={{ border: '2px solid black'}} name="couponCode" /></label>
        <p style={{paddingTop:'60px' }} defaultValue={val.status}  key={val.status} name='couponStatus'>
        <RadioGroup name='couponStatus' defaultValue={val.status} style={{ alignItems: 'flex-start', float: 'left' }}>
            <FormLabel as='legend'>Coupon Status</FormLabel>

            <VStack spacing='24px'>
                <Radio value='Active'>Active</Radio>
                <Radio value='In-Active'>In-Active</Radio>
                <Radio value='Future Plan'>Future Plan</Radio>
            </VStack>
        </RadioGroup></p>
        
      </p>
 
 
       
 
<p style={{position: 'relative',float: 'right',paddingLeft:'30px'   }}>
<label >Discount Value: <input defaultValue={val.value} key={val.value} style={{ border: '2px solid black'}} name="DiscountValue" /></label>

<p style={{position: 'relative',paddingTop:'60px' }} id='bt1' name='couponType'>
<RadioGroup name='couponType' defaultValue={val.type} key={val.type} style={{ float: 'right', alignItems: 'flex-start' }}>
<FormLabel as='legend'>Coupon Type</FormLabel >
<VStack spacing='24px'>
    <Radio value='percentage'>Percentage</Radio>
    <Radio value='fixed amount'>Fixed Amount</Radio>
    <Radio value='free shipping'>Free Shipping</Radio>
</VStack>
</RadioGroup></p>
{/* <p style={{position: 'relative',paddingTop:'60px' }} id='bt1' name='couponType'>
        Coupon Type :
        <label style={{display:'block',padding:'20px'}}><input style={{padding:'40px'}}  type="radio" name="couponType" value="percentage" checked={val.type==='percentage'?'checked':''} /> Percentage</label>
        <label style={{display:'block',padding:'20px'}}><input style={{padding:'40px'}} type="radio" checked={val.type==='fixed amount'?'checked':''} name="couponType" value="fixed amount" /> Fixed Amount</label>
        <label style={{display:'block',padding:'20px'}}><input style={{padding:'40px'}} type="radio" checked={val.type==='free shipping'?'checked':''} name="couponType" value="free shipping" /> Free Shipping</label>
      </p> */}
      </p>
 
      

      
 
      <p>
        <label style={{position: 'relative',paddingRight:'30px',paddingTop:'30px' }}>
          Coupon Category
          <br />
          <select name='discountCategory' defaultValue={val.category} key={val.category} style={{ border: '2px solid black',width:'500px'}}>
            <option>All</option>
            <option>Shoes</option>
            <option>jeans</option>
            <option>Women's</option>
            <option>Men's</option>
          </select>
        </label>
      </p>
 

 <p style={{paddingTop:'60px',paddingBottom:'60px'}}>
 <label >Limit: <input defaultValue={val.limit} key={val.limit} style={{ border: '2px solid black'}} name="CouponLimit" /></label>
 </p>
 
       
 

 
 <p style={{position: 'relative',float: 'left',paddingRight:'220px'   }}>
        <label>Start Date:<input defaultValue={val.startDate} key={val.startDate} style={{ border: '2px solid black'}} type="date" name="StartDate"/></label>
      </p> 
       
 
<p>
        <label>End Date:<input defaultValue={val.endDate} key={val.endDate} style={{ border: '2px solid black'}} type="date" name="EndDate"/></label>
      </p>
      
      <p>
      {/* <label for="birthday">Birthday:</label> */}
  {/* <input type="date" id="birthday" name="birthday"/> */}
      </p>
 
       
 

 
<p style={{position: 'relative',paddingTop:'60px'   }}>
    <Button variant="primary" className='mt-5 py-2 px-4'
            type="submit"
            style={{ float: 'center', justifyContent: 'center', alignItems: 'center' }}
            >
                Update
    </Button>
      </p>
      
      
 
     </fieldset>
  
  </form>
  


                    {/* <Form onSubmit={handleSubmit} >
                        <Row className="mt-6 px-3">
                            <Field
                                xs={12}
                                lg
                                as={Col}
                                inpClass='py-2'
                                className="p-0"
                                name="couponCode"
                                controlId="coupon-code-input"
                                text="Coupon Code"
                                size='sm'
                                // placeholder={val.code}
                                defaultValue={val.code}
                            />
                            <label>
                                Coupon Code
                                <input type="text" name="couponCode" size='sm' xs={12}
                                lg defaultValue={val.code} />
                            </label>
                            <FormInput
                                xs={12}
                                lg
                                as={Col}
                                inpClass='py-2'
                                className="p-0 ms-lg-5 mt-3 mt-lg-0"
                                name="DiscountValue"
                                controlId="discount-value-input"
                                text="Discount Value"
                                size='sm'
                                placeholder={val.value}
                            />
                        </Row>


                        <Row className="mt-3 mt-lg-4 px-3" >
                            <FormControl as='fieldset' >

                                <RadioGroup name='couponStatus' value='Active' style={{ alignItems: 'flex-start', float: 'left' }}>
                                    <FormLabel as='legend'>Coupon Status</FormLabel>

                                    <VStack spacing='24px'>
                                        <Radio value='Active'>Active</Radio>
                                        <Radio value='Non-Active'>Non-Active</Radio>
                                        <Radio value='Future Plan'>Future Plan</Radio>
                                    </VStack>
                                </RadioGroup>


                                <RadioGroup name='couponType' value={val.type} style={{ float: 'right', alignItems: 'flex-start' }}>
                                    <FormLabel as='legend'>Coupon Type</FormLabel >
                                    <VStack spacing='24px'>
                                        <Radio value='percentage'>Percentage</Radio>
                                        <Radio value='fixed amount'>Fixed Amount</Radio>
                                        <Radio value='free shipping'>Free Shipping</Radio>
                                    </VStack>
                                </RadioGroup>
                            </FormControl>
                        </Row><br></br>
                        <Row className="mt-3 mt-lg-4 px-3">
                            <FormLabel as='legend'>Discount Category</FormLabel ><br></br>

                            <div style={{ border: '2px solid black', float: 'left' }}>
                                <select name='discountCategory' style={{ width: '100%', float: 'left' }}>
                                    <option value="women">Women's</option>
                                    <option value="men">Men's</option>
                                    <option selected value="shoes">Shoes</option>
                                </select>
                            </div>
                            <br></br>
                            <FormInput
                                xs={12}
                                lg
                                as={Col}
                                inpClass='py-2'
                                className="p-0 ms-lg-5 mt-3 mt-lg-0"
                                name="CouponLimit"
                                controlId="Limit-value-input"
                                text="Coupon Limit"
                                size='sm'
                                placeholder={val.limit}
                            />

                        </Row>
                        <Row className="mt-6 px-3">
                            <FormInput
                                xs={12}
                                lg
                                as={Col}
                                inpClass='py-2'
                                className="p-0 ms-lg-5 mt-3 mt-lg-0"
                                name="StartDate"
                                controlId="Start-input"
                                text="Start Date"
                                size='sm'
                                placeholder="Enter The Start Date"
                                type="date"
                            />
                            <FormInput
                                xs={12}
                                lg
                                as={Col}
                                inpClass='py-2'
                                className="p-0 ms-lg-5 mt-3 mt-lg-0"
                                name="EndDate"
                                controlId="End-input"
                                text="End Date"
                                size='sm'
                                placeholder="Enter The End Date"
                                type="date"
                            />

                        </Row>

                        <Button
                            variant="primary" className='mt-5 py-2 px-4'
                            type="submit"
                            style={{ float: 'center', justifyContent: 'center', alignItems: 'center' }}

                        >
                            Update
                        </Button>
                    </Form> */}
                </Flex>
                
            </Box>
        </>
    )
}




export default AddCoupon