import React from 'react'
import './Augmentic.css'

 import Divider from '@mui/material/Divider';
 import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import myImage from '../images/1600_x264.webp';
import myImage1 from '../images/ambush.webp';
import myImage2 from '../images/frame_243_x264_001.webp';
import myImage3 from '../images/1600_1_x264.webp';
import myImage4 from '../images/9c74fb71b7c403531f56667520faabc9.webp';




 

const Augmentic = () => {
  return (
    <div>
    
<div class="hr-theme-slash-2">
  <div class="hr-line"></div>
<img style={{ height:"50px", width:"50px",position:'relative',top:'10px',zIndex: 1,borderRadius:'13px' }} src={myImage4} alt="yoast seo" /> 
  <div class="hr-icon"></div>
  <div class="hr-line"></div>
</div>

<div class="hr-theme-slash-3">

<h2>UPROCK AGENCY</h2>
<p>Design Lab</p>
<button type="button" class="button">
		<span class="button__text">Hire Us</span>
		<span class="button__icon">
			<ion-icon name="cloud-download-outline"></ion-icon>
		</span>
	</button>
	<script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
</div>

<div class="hr-theme-slash-4">
<h2>More By UPROCK AGENCY </h2>


</div>

<div class="hr-theme-slash-5">
<p>View Profile </p>


</div>

<div class="hr-theme-slash-7">
<div class="profile-pic">
<img style={{ height:"210px", width:"300px",position:'relative',top:"130px",zIndex: 1,borderRadius:'13px' }} src={myImage} alt="yoast seo" /> 
		<div class="edit"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
	</div>

  <div class="profile-pic">
  <img style={{ height:"210px", width:"300px",position:'relative',top:"130px",zIndex: 1,borderRadius:'13px' }} src={myImage2} alt="yoast seo" /> 
		<div class="edit"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
	</div>

  <div class="profile-pic">
  <img style={{ height:"210px", width:"300px",position:'relative',top:"130px",zIndex: 1,borderRadius:'13px' }} src={myImage3} alt="yoast seo" />
		<div class="edit"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
	</div>

  <div class="profile-pic">
  <img style={{ height:"210px", width:"300px",position:'relative',top:"130px",zIndex: 1,borderRadius:'13px' }} src={myImage1} alt="yoast seo" /> 
		<div class="edit"><a href="#"><i class="fa fa-pencil fa-lg"></i></a></div>
	</div>



 




</div>


    </div>
      




);}
export default Augmentic
