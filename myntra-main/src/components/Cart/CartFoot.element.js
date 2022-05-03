import styled from "styled-components";

export const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  padding: 8px 16px;
  border: 1px solid #eaeaec;
`;

export const PaymentImg = styled.img`
  width: 60%;
`;

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
