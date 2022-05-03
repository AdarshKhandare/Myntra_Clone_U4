import styled from "styled-components";

export const Container = styled.div`
font-size: 12px;
`;

export const AddressFormDiv = styled.div`
  display: flex;
`;
export const FormLeftdiv = styled.div`
  width: 60%;
`;
export const FormDiv = styled.form`
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 20px;
`;
export const Headings = styled.p`
font-size: 20px;
font-weight: 600;
margin: 0;

`
export const ContactDetailsdiv = styled.div`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid #eaeaec;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const NameInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;
export const ContactInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;

export const Addressdiv = styled.div`
  border-radius: 4px;
  padding: 8px ;
  border: 1px solid #eaeaec;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;
export const PinCodeInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;
export const FullAddInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;
export const TownInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;
export const CityInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;
export const StateInput = styled.input`
  border-radius: 4px;
  width: 450px;
  height: 25px;
  padding: 5px;
  font-size: 14px;
`;

export const SaveAddressdiv = styled.div`
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 20px;
  width: 74%;
`;
export const SaveHome = styled.button`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ff3f6c;
  width: 80px;
  height: 40px;
  font-size: 14px;

  &:hover {
    background-color: #ff3f6c;
    color: #fff;
  }
`;
export const SaveWork = styled.button`
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ff3f6c;
  width: 80px;
  height: 40px;
  font-size: 14px;
  &:hover {
    background-color: #ff3f6c;
    color: #fff;
  }
`;
export const ButtonDiv = styled.div`
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
  width: 74%;
`;


export const AddAddressButton = styled.button`
  cursor: pointer;
  background-color: #ff3f6c;
  color: #fff;
  width: 100%;
  border: none;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const AddressCheckoutAdd = styled.p`
  color: #20bd99;
  border-bottom: 2px solid #20bd99;
`;
export const DotsCheckoutAdd = styled.p`
  color: #20bd99;
`;
export const FormRightDiv = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 40%;
  padding: 24px 0 0 16px;
`;