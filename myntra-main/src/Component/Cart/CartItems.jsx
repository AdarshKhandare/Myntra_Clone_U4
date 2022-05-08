import React, { useState } from "react";
import {
  AddBoxOutlined,
  Clear,
  CloseFullscreenOutlined,
  CloseOutlined,
  IndeterminateCheckBoxOutlined,
} from "@mui/icons-material";
import {
  Brand,
  CartItemDiv,
  CartItems,
  Filtercontainer,
  FilterPM,
  Imagediv,
  ItemIamge,
  ItemInfoDiv,
  Name,
  Oprice,
  PercentOff,
  Price,
  PriceDis,
  RButton,
  RemoveButtonDiv,
  SizeDiv,
} from "./Cart.element";
import {
  decrease,
  decreaseQty,
  deleteBagData,
  increase,
  increaseQty,
} from "../../redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
const CartItemsDiv = ({
  images,
  id,
  title,
  sizes,
  price,
  off_price,
  discount,
  brand,
}) => {
  const bagData = useSelector((state) => state.bag.bagData);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const handleModelBagClose = (id) => {
    dispatch(deleteBagData(id));
  };

  const increaseQ = (id) => {
    dispatch(increase(id));
  };
  // const increaseQ = () => {
  //   setCount(count + 1);
  // };
  const decreaseQ = () => {
    setCount(count - 1);
  };

  return (
    <CartItemDiv>
      <Imagediv>
        <ItemIamge src={images.image1} />
      </Imagediv>
      <ItemInfoDiv>
        <Brand>{brand}</Brand>
        <Name>{title}</Name>
        <Filtercontainer>
          <SizeDiv>
            <h4>{`Size: ${sizes[3]}`}</h4>
          </SizeDiv>
          <FilterPM>
            <AddBoxOutlined
              onClick={increaseQ}
              sx={{
                backgroundColor: "#fff",
                color: "black",
                marginRight: "5px",
              }}
            />
            <p>{count}</p>
            <IndeterminateCheckBoxOutlined
              onClick={decreaseQ}
              sx={{
                color: "black",
                backgroundColor: "#fff",
                marginLeft: "5px",
              }}
            />
          </FilterPM>
        </Filtercontainer>
        <PriceDis>
          <Price>
            ₹{Math.floor(Number(off_price) * ((100 - Number(discount)) / 100))}
          </Price>
          <Oprice>{`₹${off_price}`}</Oprice>
          <PercentOff>{`${discount}% OFF`}</PercentOff>
        </PriceDis>
      </ItemInfoDiv>
      <RemoveButtonDiv>
        <RButton onClick={() => handleModelBagClose(id)}>
          <Clear sx={{ color: "black", width: "25px", height: "25px" }} />
        </RButton>
      </RemoveButtonDiv>
    </CartItemDiv>
  );
};

export default CartItemsDiv;
