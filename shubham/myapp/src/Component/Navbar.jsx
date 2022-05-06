import React, { useEffect, useState } from 'react'
import styles from '../Component/style/Navbar.module.css'
// import styles from './Todo.module.css'
import styled from "styled-components"

import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import { getDealsOftheData } from '../redux/actions';
import { useSelect } from '@mui/base';
import DealOftheDayCard from './DealOftheDayCard';

const MainDiv = styled.div`
display: grid;
grid-template-columns: 100px 500px 500px 200px;
background-color: whitesmoke;
justify-content: space-around;
height: 80px;
box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);


`
const Navlink = styled.div`
textDecoration: "none", padding: "5px";
 color: "black";
`
const linkStyle = {
  textDecoration: "none",
  padding: "10px",
  color: "black"
}
const divStyle= {
  position: "sticky",
  top: "0%",
  backgroundColor: "#ffffff",
  zIndex: "1"
    

}
const imgStyle = { height: "30px", margin: "20px" }
const wish = { fontSize: "10px", paddingLeft: "10px" }
const wishIcon = { marginTop: "15px" }
const navStyles = { marginTop: "20px" }
const searchBar = { display: "flex",marginTop: "20px",paddingLeft:"80px" ,backgroundColor:"whitesmoke"}
function Navbar() {





  return (
    <>
    <div style={divStyle}>
    <MainDiv >
        <div style={{}}>
          <img style={imgStyle} src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Myntra_logo.png" alt="" />
        </div>
        <div style={navStyles}>

          <NavLink to="/men" style={linkStyle}> MEN</NavLink>
          <NavLink to="/women" style={linkStyle}> WOMEN</NavLink>
          <NavLink to="/kids" style={linkStyle}> KIDS</NavLink>
          <NavLink to="/home-living" style={linkStyle}> HOME & LIVING</NavLink>
          <NavLink to="/beauty" style={linkStyle}> BEAUTY</NavLink>
          <NavLink to="/studio" style={linkStyle}> STUDIO</NavLink>


        </div>

        <div style={searchBar}>

          <div style={{backgroundColor:"#FFFFFF",height:"20px",marginTop:"2px"}} ><SearchIcon  /></div>
          <div><input type="text" placeholder='Search for products brands and more' style={{ width: "300px", height: "22px", background: "white", marginTop: "0px", border: "none" }}></input></div>

        </div>
        <div style={{ display: "flex" ,paddingLeft:"20px" }}>
          <div style={{ fontSize: "10px" }}><PermIdentityIcon style={{ marginTop: "15px", padding: "0px" }} /> <br />
            profile</div>
          <div style={wish}><FavoriteBorderIcon style={wishIcon} /> <br />
            wishlist
          </div>
          <div style={wish}><ShoppingBagOutlinedIcon style={wishIcon} /> <br />
            bag
          </div>


        </div>

      </MainDiv>
    </div>
      
      

    </>
  )
}

export default Navbar