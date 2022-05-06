import { LocalOfferOutlined } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { AllPriceDiv, AppCou, ApplyButton, ApplyCoupondiv, CartRight, CoupDis, CoupDisDiv, CoupDisrs, CouponApplyDiv, CoviFee, CoviFeediv, CoviFeeKM, CoviFeers, Dmrp, DmrpDiv, Dmrprs, NameC, PlaceorderButton, PlaceorderDiv, PriceDetailsT, Tmrp, TmrpDiv, Tmrprs, TotalAmount, TotalAmountdiv, TotalAmountrs, TotalPriceDiv } from './CartRight.element';
import {auth} from "../../firebse/firebase-config"
const CartRightS = () => {
  const navigate = useNavigate();

  const placeOrder = () => {
    if(auth){
      navigate("/address")
      console.log("useravailabel",auth)
    }
    else{
      navigate("/register")
    }
  }
  return (
    <CartRight>
      <CouponApplyDiv>
        <NameC>Coupons</NameC>
        <ApplyCoupondiv>
          <LocalOfferOutlined sx={{ width: "25px", height: "25px" }} />
          <AppCou>Apply Coupons</AppCou>
          <ApplyButton>APPLY</ApplyButton>
        </ApplyCoupondiv>
      </CouponApplyDiv>
      <AllPriceDiv>
        <PriceDetailsT>PRICE DETAILS (1 items)</PriceDetailsT>
        <TmrpDiv>
          <Tmrp>TOTAL MRP</Tmrp>
          <Tmrprs>₹1,200</Tmrprs>
        </TmrpDiv>
        <DmrpDiv>
          <Dmrp>Discount on MRP</Dmrp>
          <Dmrprs>-₹1,600</Dmrprs>
        </DmrpDiv>
        <CoupDisDiv>
          <CoupDis>Coupon Discount</CoupDis>
          <CoupDisrs>Apply Coupon</CoupDisrs>
        </CoupDisDiv>
        <CoviFeediv>
          <CoviFee>ConvenienceFee</CoviFee>
          <CoviFeeKM>Know More</CoviFeeKM>
          <CoviFeers>FREE</CoviFeers>
        </CoviFeediv>
      </AllPriceDiv>
      <TotalPriceDiv>
        <TotalAmountdiv>
          <TotalAmount>Total Amount</TotalAmount>
          <TotalAmountrs>₹1,200</TotalAmountrs>
        </TotalAmountdiv>
        <PlaceorderDiv>
          <PlaceorderButton onClick={placeOrder}>PLACE ORDER</PlaceorderButton>
        </PlaceorderDiv>
      </TotalPriceDiv>
    </CartRight>
  );
}

export default CartRightS