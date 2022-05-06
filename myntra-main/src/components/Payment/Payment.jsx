import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AddressCheckoutAdd,
  DotsCheckoutAdd,
  FormRightDiv,
} from "../Address/Address.element";
import CartFoot from "../Cart/CartFoot";
import {
  BagCheckout,
  DotsCheckout,
  Logo,
  NavCheckOutSteps,
  NavContainer,
  NavLogo,
  NavSecure,
  PaymentCheckout,
  SecureLogo,
  SecureN,
} from "../Cart/CartNav.element";
import {
  CardCD,
  CardCDdiv,
  CardName,
  CardNumber,
  CashOnDel,
  ChooseMode,
  Cod,
  Container,
  Cvv,
  DotsCheckoutP,
  Emi,
  Emidiv,
  Expiry,
  ExpiryCvv,
  FullpayemntPage,
  Giftleft,
  GiftRight,
  HaveGift,
  HaveGiftLabel,
  NetBank,
  NetBankdiv,
  PayemntMain,
  PaymentCheckoutP,
  PaymentLeft,
  PaymentMethods,
  PaymentMethodsInput,
  PayNowButton,
  Upi,
  Upidiv,
  UpiIcon,
  Wallet,
  Walletdiv,
} from "./Payment.element";
import myntraLogo from "../../Images/myntraLogo.png";
import secure from "../../Images/secure.png";
import {
  AllPriceDiv,
  CoupDis,
  CoupDisDiv,
  CoupDisrs,
  CoviFee,
  CoviFeediv,
  CoviFeeKM,
  CoviFeers,
  Dmrp,
  DmrpDiv,
  Dmrprs,
  PriceDetailsT,
  Tmrp,
  TmrpDiv,
  Tmrprs,
  TotalAmount,
  TotalAmountdiv,
  TotalAmountrs,
  TotalPriceDiv,
} from "../Cart/CartRight.element";
import {
  AvailableofferDiv,
  AvaOffer,
  FirstOffer,
  TopLA,
} from "../Cart/Cart.element";
import {
  AccountBalanceOutlined,
  AccountBalanceWalletOutlined,
  CardGiftcard,
  CreditCardOutlined,
  CurrencyRupeeOutlined,
  DiscountOutlined,
  PaymentsOutlined,
  QrCodeScanner,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";



const Payment = () => {

  const navigate = useNavigate();
    const [creditCardNum, setCreditCardNum] = useState("#### #### #### ####");
    const [cardHolder, setCardHolder] = useState("Your Full Name");
    const [expireMonthYear, setExpireMonthYear] = useState("MM/YY");
    const [cvv, setCvv] = useState("CVV");
      const handleNum = (e) => {
        setCreditCardNum(e.target.rawValue);
      };
       const handleCardHolder = (e) => {
         setCardHolder(e.target.value);
       };

       const handleCvv = (e) => {
         setCvv(e.target.value);
       };

       const handleExpMonthYear = (e) => {
         setExpireMonthYear(e.target.value);
       };
       const handleSubmit = (e) => {
         console.log("Hello")
         navigate("/orderconfirm");
       }
  return (
    <Container>
      <NavContainer>
        <NavLogo>
          <Logo src={myntraLogo} />
        </NavLogo>
        <NavCheckOutSteps>
          <BagCheckout>BAG</BagCheckout>
          <DotsCheckoutAdd>---------</DotsCheckoutAdd>
          <AddressCheckoutAdd>ADDRESS</AddressCheckoutAdd>
          <DotsCheckoutP>---------</DotsCheckoutP>
          <PaymentCheckoutP>PAYMENT</PaymentCheckoutP>
        </NavCheckOutSteps>
        <NavSecure>
          <SecureLogo src={secure} />
          <SecureN>100% SECURE</SecureN>
        </NavSecure>
      </NavContainer>
      <FullpayemntPage>
        <PaymentLeft>
          <AvailableofferDiv>
            <TopLA>
              <DiscountOutlined sx={{ width: "25px", height: "25px" }} />
              <AvaOffer>Bank Offers</AvaOffer>
            </TopLA>
            <FirstOffer>
              10% Instant Discount on IDFC FIRST Bank Cards onamin spend of Rs
              2,500.TCA
            </FirstOffer>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#ff3f6c",
                      marginLeft: "-530px",
                      fontSize: "12px",
                    }}
                  />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    color: "#ff3f6c",
                    fontSize: "12px",
                    marginBottom: "none",
                  }}
                >
                  Show More
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 100 on Paytm Postpaid transaction onamin
                  spend of Rs 1000. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  15% Cashback upto Rs 150 on Freecharge Paylater transaction.
                  TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  10% Cashback upto Rs 200 on Ola Money Postpaid or wallet
                  transaction onamin spend of Rs 1000. TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  Upto Rs 500 Cashback on Mobikwik Wallet Transactions onamin
                  spend of Rs 999.Use code MBK500 on Mobikwik.TCA
                </Typography>
                <Typography sx={{ fontSize: "12px", marginBottom: "5px" }}>
                  5% Cashback upto Rs 150 onaminimum spend of Rs 1,500 with
                  PayZapp. TCA
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AvailableofferDiv>
          <ChooseMode>Choose Payment Mode</ChooseMode>
          <PayemntMain>
            <PaymentMethods>
              <CashOnDel>
                <CurrencyRupeeOutlined sx={{ width: "25px", height: "25px" }} />
                <Cod>Cash On Delivery</Cod>
              </CashOnDel>
              <CardCDdiv>
                <CreditCardOutlined
                  sx={{ width: "25px", height: "25px", color: "#ff3f6c" }}
                />
                <CardCD>Credit/Debit Card</CardCD>
              </CardCDdiv>
              <Upidiv>
                <QrCodeScanner
                  sx={{ width: "25px", height: "25px" }}
                />
                <Upi>GooglePay/PhonePay/Upi</Upi>
              </Upidiv>
              <Walletdiv>
                <AccountBalanceWalletOutlined
                  sx={{ width: "25px", height: "25px" }}
                />
                <Wallet>Paytm/Payzapp/Wallets</Wallet>
              </Walletdiv>
              <NetBankdiv>
                <AccountBalanceOutlined
                  sx={{ width: "25px", height: "25px" }}
                />
                <NetBank>Net Banking</NetBank>
              </NetBankdiv>
              <Emidiv>
                <PaymentsOutlined sx={{ width: "25px", height: "25px" }} />
                <Emi>EMI/Pay Later</Emi>
              </Emidiv>
            </PaymentMethods>
            <PaymentMethodsInput>
              <ChooseMode>CREDIT/DEBIT CARD</ChooseMode>
              <CardNumber
                placeholder="Card Number"
                onChange={handleNum}
                required
              />
              <CardName
                placeholder="Name On card"
                onChange={handleCardHolder}
                required
              />
              <ExpiryCvv>
                <Expiry
                  placeholder="Valid Thru (MM/YY)"
                  onChange={handleExpMonthYear}
                  required
                />
                <Cvv placeholder="CVV" onChange={handleCvv} required />
              </ExpiryCvv>
              <PayNowButton onClick={handleSubmit}>PAY NOW</PayNowButton>
            </PaymentMethodsInput>
          </PayemntMain>
          <HaveGift>
            <Giftleft>
              <CardGiftcard sx={{ width: "25px", height: "25px" }} />
              <HaveGiftLabel>Have a Gift Card?</HaveGiftLabel>
            </Giftleft>
            <GiftRight>APPLY GIFT CARD</GiftRight>
          </HaveGift>
        </PaymentLeft>

        <FormRightDiv>
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
              <CoviFee>Convenience Fee</CoviFee>
              <CoviFeeKM>Know More</CoviFeeKM>
              <CoviFeers>FREE</CoviFeers>
            </CoviFeediv>
          </AllPriceDiv>
          <TotalPriceDiv>
            <TotalAmountdiv>
              <TotalAmount>Total Amount</TotalAmount>
              <TotalAmountrs>₹1,200</TotalAmountrs>
            </TotalAmountdiv>
          </TotalPriceDiv>
        </FormRightDiv>
      </FullpayemntPage>

      <CartFoot />
    </Container>
  );
};

export default Payment;
