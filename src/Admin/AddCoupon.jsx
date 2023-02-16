import React from 'react';
import { addCoupon, getCoupon, getOneCoupon } from "../redux/DataReducer/action";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import ReactQuill from 'react-quill';
import {useNavigate} from 'react-router-dom';
import { Box, Flex, VStack, Heading, FormControl, FormLabel, RadioGroup, Radio, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';
import moment from "moment";
import AdminNavbar from './AdminNavbar';
import { Switch, SimpleGrid } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'


// import other pkg
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useState } from 'react';


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
    const [showhide, setShowhide] = useState('');


    const location = useLocation();
    const [isEditted, setisEditted] = useState(false)
    const toast = useToast();
    const handleshowhide = (e) => {
        e.preventDefault();
        const getproduct = e.target.value;
        if(getproduct==='None'){
            setShowhide(getproduct);
        }
        else{
            setShowhide('');
        }
        // let data = color;
        // data.push(e.target.value);

        console.log(e.target.value);

    }




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


    // else if(val1?.h==='Add Coupon'){
    //     val=val = { h: "Add Coupon", status: '', code: '', category: '', startDate: '', endDate: '', type: '', value: '', limit: '' };
        

    //     // }
    // }




    const handleSubmit = (event) => {
        event.preventDefault()
        let target = event.target;
        let x = {}
        x.status = target.couponStatus.value;
        x.code = target.couponCode.value;
        x.category = target.discountCategory.value
        x.startDate = target.StartDate.value;
        x.endDate = target.EndDate.value;
        x.type = target.couponType.value;
        x.value = target.DiscountValue.value;
        if(showhide!=''){
            x.Id=target.couponProductId.value;
        }
        x.limit = target.CouponLimit.value;
        console.log('sanchitx',x);

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
        
        val={};
        target.reset();
        navigate("/coupon",{state:{mode:'add'}});

    }
    // console.log(errorlist,'errorlist');





    return (

<>

<AdminNavbar />

<div className="container-fluid px-4 ">
                <div className="card mt-4">
                    <div className="card-header">
                        <Heading >{val.h}</Heading>

                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">

                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                                </li>

                               
                                <li className="nav-item" role="presentation">
                                    {/* <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">Price</button> */}
                                    <Link to="/coupon" className='nav-link' style={{ float: 'right' }}>View Coupon</Link>
                                </li>

                            </ul>
                            <div className="tab-content row" id="myTabContent">
                                <div className="tab-pane card-body border fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <br></br>
                                    <div className='row g-0'>
                                        <div className='col-sm-6 col-md-border'>


                                            <div className="form-group row mb-3 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label  " style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Coupon Code</p></label>
                                                <div className='col-sm-8 gx-5 mb-3'>
                                                    <input type="text" name="couponCode" defaultValue={val.code} className="form-control" style={{ borderColor: 'grey' }} />
                                                    {/* <small className="text-danger">{'errorlist.productName'}</small> */}
                                                </div>

                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Discount Value</p></label>
                                                <div className='col-sm-8 '>
                                                    <input type="text" name="DiscountValue" defaultValue={val.value} className="form-control" style={{ borderColor: 'grey' }} />
                                                    {/* <small className="text-danger">{'errorlist.productId'}</small> */}
                                                </div>
                                            </div>

                                            <div className="form-group row mb-3 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Coupon Type </p></label>
                                                <div className='col-sm-8 mb-3'>

                                                <Select name='couponType' className="form-control" style={{ borderColor: 'grey' }} placeholder="--Select Type--">
                                                    {/* <option value="">--Select Color--</option> */}
                                                    <option value="percentage">Percentage</option>
                                                    <option value="fixed amount">Fixed Amount</option>
                                                    <option value="free shipping">Free Shipping</option>
                                                    
                                                </Select>
                                                    {/* <small className="text-danger">{'errorlist.selling_price'}</small> */}

                                                </div>
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Coupon Status</p></label>
                                                <div className='col-sm-8'>
                                                <Select name='couponStatus' className="form-control" style={{ borderColor: 'grey' }} placeholder="--Select Status--">
                                                    {/* <option value="">--Select Color--</option> */}
                                                    <option value="Active">Active</option>
                                                    <option value="In-Active">In-Active</option>
                                                    <option value="Future Plan">Future Plan</option>
                                                   
                                                </Select>
                                                    {/* <small className="text-danger">{'errorlist.original_price'}</small> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col'>
                                        <div className="form-group row mb-3 gx-5 g-0">
                                        
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Limit</p></label>
                                                <div className='col-sm-8 mb-3'>
                                                    <input type="text" name="CouponLimit" defaultValue={val.limit} className="form-control" style={{ borderColor: 'grey' }} />
                                                    {/* <small className="text-danger">{'errorlist.Gender'}</small> */}
                                                </div>

                                                {/* <div className="form-group mb-3"> */}
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Start Date</p></label>

                                                <div className='col-sm-8'>
                                                <input className='form-control' defaultValue={val.startDate} key={val.startDate} style={{ borderColor: 'grey' }} type="date" name="StartDate"/>
                                                    {/* <small className="text-danger">{'errorlist.category'}</small> */}
                                                </div>
                                            </div>

                                            <div className="form-group row mb-5 gx-5 g-0">
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left'}}>End Date</p></label>
                                                <div className='col-sm-8 mb-3' style={{paddingBottom:'2.5px'}}>
                                                <input className='form-control' defaultValue={val.endDate} key={val.endDate} style={{ borderColor: 'grey' }} type="date" name="EndDate"/>
                                                    {/* <small className="text-danger">{'errorlist.Gender'}</small> */}
                                                </div>

                                                {/* <div className="form-group mb-3"> */}
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'initial' }}>Coupon Category</p></label>

                                                <div className='col-sm-8'>
                                                <Select name='discountCategory' onChange={(e) => (handleshowhide(e))} className="form-control" style={{ borderColor: 'grey' }} placeholder="--Select Category--">
                                                    {/* <option value="">--Select Color--</option> */}
                                                    <option value="All">All</option>
                                                    <option value="None">None</option>
                                                    <option value="Shoes">Shoes</option>
                                                    <option value="Jeans">Jeans</option>
                                                    <option value="Men's">Men's</option>
                                                    <option value="Women's">Women's</option>
                                                </Select>
                                                    {/* <small className="text-danger">{'errorlist.category'}</small> */}
                                                </div>
                                                {
                                                    showhide !== '' && (<>
                                                <label className="col-sm-1.5 col-form-label" style={{ fontSize: '20px' }}><p style={{ textAlign: 'left' }}>Product Id</p></label>
                                                <div className='col-sm-8 mb-3'>
                                                <input className='form-control' defaultValue={val.couponProductId} key={val.endDate} style={{ borderColor: 'grey' }} type="text" name="couponProductId"/>
                                                    {/* <small className="text-danger">{'errorlist.Gender'}</small> */}
                                                </div></>)}
                                            </div>

                                        </div>
                                        
                                    </div>
                                    <Button variant="primary" className='mt-5 py-2 px-4' style={{position:'relative',left:'655px'}} type="submit" >
                                        Update
                                    </Button>
                                    <br></br>
                                    
                                    
                                </div>
                                
                            </div>
                            
                            
      
                        </form>
                    </div>
                </div>
            </div>            
{/* 
<Heading>{val.h}</Heading><br></br>
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
        <label >Coupon Code: <input defaultValue={val.code} style={{ border: '1px solid black'}} name="couponCode" /></label>
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
<label >Discount Value: <input defaultValue={val.value} key={val.value} style={{ border: '1px solid black'}} name="DiscountValue" /></label>

<p style={{position: 'relative',paddingTop:'60px' }} id='bt1' name='couponType'>
<RadioGroup name='couponType' defaultValue={val.type} key={val.type} style={{ float: 'right', alignItems: 'flex-start' }}>
<FormLabel as='legend'>Coupon Type</FormLabel >
<VStack spacing='24px'>
    <Radio value='percentage'>Percentage</Radio>
    <Radio value='fixed amount'>Fixed Amount</Radio>
    <Radio value='free shipping'>Free Shipping</Radio>
</VStack>
</RadioGroup></p>
      </p>
 
      

      
 
      <p>
        <label style={{position: 'relative',paddingRight:'30px',paddingTop:'30px' }}>
          Coupon Category
          <br />
          <select name='discountCategory' defaultValue={val.category} key={val.category} style={{ border: '1px solid black',width:'500px'}} >
          <option>All</option>
            <option>None</option>
            <option>Shoes</option>
            <option>jeans</option>
            <option>Women's</option>
            <option>Men's</option>
          </select>
        </label>
      </p>
      {
        showhide !== '' && (
      <p>
        <label style={{position: 'relative',paddingRight:'30px',paddingTop:'30px' }}>
          Product Id: <input defaultValue={val.Id} style={{ border: '1px solid black'}} name="couponProductId" /> 
        </label>
      </p>
      )}
 

 <p style={{paddingTop:'60px',paddingBottom:'60px'}}>
 <label >Limit: <input defaultValue={val.limit} key={val.limit} style={{ border: '1px solid black'}} name="CouponLimit" /></label>
 </p>
 
       
 

 
 <p style={{position: 'relative',float: 'left',paddingRight:'220px'   }}>
        <label>Start Date:<input defaultValue={val.startDate} key={val.startDate} style={{ border: '1px solid black'}} type="date" name="StartDate"/></label>
      </p> 
       
 
<p>
        <label>End Date:<input defaultValue={val.endDate} key={val.endDate} style={{ border: '1px solid black'}} type="date" name="EndDate"/></label>
      </p>
      
      <p>
      </p>
  */}
       
 

 
{/* <p style={{position: 'relative',paddingTop:'60px'   }}>
    <Button variant="primary" className='mt-5 py-2 px-4'
            type="submit"
            style={{ float: 'center', justifyContent: 'center', alignItems: 'center' }}
            >
                Update
    </Button>
      </p> */}
      
      
 
     {/* </fieldset>
  
  </form>
  
                </Flex>
                
            </Box> */}
        </>
    )
}




export default AddCoupon