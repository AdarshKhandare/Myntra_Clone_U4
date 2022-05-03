import styled from "styled-components";

export const Container = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f6;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 3px;
`;
export const NavLogo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 60px;
`;

export const NavCheckOutSteps = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
`;
export const BagCheckout = styled.p`
  color: #20bd99;
  border-bottom: 2px solid #20bd99;
`;
export const AddressCheckout = styled.p`
  color: #696b79;
`;
export const PaymentCheckout = styled.p`
  color: #696b79;
`;

export const DotsCheckout = styled.p``;

export const NavSecure = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  gap: 5px;
  margin-left: 20px;
`;
export const SecureLogo = styled.img`
  width: 30px;
  height: 30px;
`;
export const SecureN = styled.p``;
// padding: 16px;
// border-radius: 4px;
// border: 1px solid #eaeaec;

export const CartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;
export const CartLeft = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddressDiv = styled.div`
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #eaeaec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-left: 30%;
`;
export const DeliverTo = styled.p``;
export const ChangeButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ff3f6c;
  border-radius: 4px;
  margin-right: 0;
  color: #ff3f6c;
  background: #fff;
  font-size: 12px;
  font-weight: 600;
cursor: pointer;
  &:hover {
    background-color: #ff3f6c;
    color: #fff;
  }
`;
export const AvailableofferDiv = styled.div`
  margin-left: 30%;
  border-radius: 4px;
  border: 1px solid #eaeaec;
`;
export const TopLA = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: -13px;
`;
export const AvaOffer = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
export const FirstOffer = styled.p`
  font-size: 12px;
`;

export const NoConviDiv = styled.div`
  margin-left: 30%;
  display: flex;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  border-radius: 4px;
  gap: 5px;
  text-align: center;
  align-items: center;
`;
export const LogoTruck = styled.img`
  width: 35px;
  height: 30px;
`;
export const NoConvi = styled.p``;

export const CartItemDiv = styled.div`
  margin-left: 30%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  display: flex;
  font-size: 14px;
`;
export const Imagediv = styled.div`
  flex: 1;
  margin-right: 10px;
`;
export const ItemIamge = styled.img`
  width: 150px;
  height: 170px;

  object-fit: fill;
`;
export const ItemInfoDiv = styled.div`
  flex: 2;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 1px;
`;
export const Brand = styled.p`
  font-weight: 600;
  margin-bottom: -5px;
`;
export const Name = styled.p`
  font-weight: 200;
`;

export const Filtercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px 0px;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  cursor: pointer;
`;

export const FilterTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  border: none;
  font-size: 14px;
  background-color: whitesmoke;
  cursor: pointer;
`;

export const FilterSizeOption = styled.option`
  cursor: pointer;
`;

export const PriceDis = styled.div`
  display: flex;
  font-size: 14px;
  gap: 10px;
`;
export const Price = styled.p``;
export const Oprice = styled.p`
  text-decoration: line-through;
  color: lightgray;
`;
export const PercentOff = styled.p`
  color: #ff3f6c;
`;

export const RemoveButtonDiv = styled.div`
  flex: 1;
  text-align: right;
`;
export const RButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

export const WishListItem = styled.div`
  display: flex;
  margin-left: 30%;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  align-items: center;
  text-align: center;
  gap: 5px;
`;
export const WishName = styled.p`
  font-weight: 600;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const CartRight = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 40%;
  padding: 24px 0 0 16px;
`;
export const CouponApplyDiv = styled.div`
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  margin-right: 40%;
`;

export const NameC = styled.p`
  font-weight: 500;
`;
export const ApplyCoupondiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const AppCou = styled.p`
  margin-right: 120px;
  font-weight: 600;
`;
export const ApplyButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ff3f6c;
  border-radius: 4px;
  margin-right: 10px;
  color: #ff3f6c;
  background: #fff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #ff3f6c;
    color: #fff;
  }
`;

export const AllPriceDiv = styled.div`
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  margin-right: 40%;
`;
export const PriceDetailsT = styled.p`
  font-size: 12px;
  font-weight: 600;
`;
export const TmrpDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Tmrp = styled.p``;
export const Tmrprs = styled.p``;
export const DmrpDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Dmrp = styled.p``
export const Dmrprs = styled.p`
  color: #03a685;
`;
export const CoupDisDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CoupDis = styled.p``
export const CoupDisrs = styled.p`
  color: #ff3f6c;
`;
export const CoviFeediv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CoviFee = styled.p``
export const CoviFeeKM = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #ff3f6c;
  font-weight: 700;
  font-size: 12px;
  margin-right: 130px;
`;
export const CoviFeers = styled.p`
  color: #03a685;
`;


export const TotalPriceDiv = styled.div`
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  margin-right: 40%;
`;
export const TotalAmountdiv = styled.div`
display: flex;
justify-content: space-between;
font-weight: 700;
`;
export const TotalAmount = styled.p``;
export const TotalAmountrs = styled.p``;

export const PlaceorderDiv = styled.div`
width: 100%;
`;
export const PlaceorderButton = styled.button`
  cursor: pointer;
  background-color: #ff3f6c;
  color: #fff;
  width: 100%;
  border: none;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing:1px;
`;

export const Hr = styled.hr`
  width: 70%;
  height: 1px;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
`;

export const PaymentImg = styled.img`
width: 60%;
`

export const ContactUs = styled.button`
  border: none;
  background-color: #fff;
  font-weight: 600;
  cursor: pointer;
  margin-right: 300px;

  &:hover {
    border-bottom: 1px solid black;
  }
`;
