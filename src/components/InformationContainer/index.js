import data from '../../common/assets/png/Data.png'
import { InformationContainer, InformationTitle, TitleLeft } from "./styles";

const Information = () => {
  return (
    <InformationContainer>
    <img src = {data} alt = "" className = "data" />
    <TitleLeft>Marcenas mattis egestas</TitleLeft>
    <InformationTitle> <p> Erdum et malesuada fames ac ante ileum primmer in 
    faucibus uspendisse porta. </p></InformationTitle>
    </InformationContainer>
    )
  }
  
  export default Information;

/* import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from  'swiper/react'

import data from '../../common/assets/png/Data.png'
import data2 from '../../common/assets/png/Data2.png'
import data3 from '../../common/assets/png/Data3.png'
import data4 from '../../common/assets/png/Data4.png'
import data5 from '../../common/assets/png/Data5.png'
import data6 from '../../common/assets/png/Data6.png'
import { InformationContainer, InformationTitle, TitleLeft } from "./styles";

//import "swiper/css";
//import "swiper/css/pagination"

import "./styles.css";

SwiperCore.use([Pagination]);

const Information = () => {
  return (
      <InformationContainer>    
      <Swiper pagination={{
  "dynamicBullets": true
}} className="mySwiper">
  <SwiperSlide><img src = {data} alt  = "" className = "data" /></SwiperSlide>
  <SwiperSlide><img src = {data2} alt = "" className = "data2" /></SwiperSlide>
  <SwiperSlide><img src = {data3} alt = "" className = "data3" /></SwiperSlide>
  <SwiperSlide><img src = {data4} alt = "" className = "data4" /></SwiperSlide>
  <SwiperSlide><img src = {data5} alt = "" className = "data5" /></SwiperSlide>
  <SwiperSlide><img src = {data6} alt = "" className = "data6" /></SwiperSlide>
  </Swiper>
        
        <TitleLeft>Marcenas mattis egestas</TitleLeft>
        <InformationTitle> <p> Erdum et malesuada fames ac ante ileum primmer in 
        faucibus uspendisse porta. </p></InformationTitle>
      </InformationContainer>
  )
}

export default Information; */
/* 
import Swiper from 'swiper';

import data from '../../common/assets/png/Data.png'
import data2 from '../../common/assets/png/Data2.png'
import data3 from '../../common/assets/png/Data3.png'
import data4 from '../../common/assets/png/Data4.png'
import data5 from '../../common/assets/png/Data5.png'
import data6 from '../../common/assets/png/Data6.png'
import { InformationContainer, InformationTitle, TitleLeft } from "./styles";

const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

const Information = () => {
  return (
    <InformationContainer>
    <div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><img src = {data} alt  = "" className = "data" /></div>
			<div class="swiper-slide"><img src = {data2} alt = "" className = "data2" /></div>
			<div class="swiper-slide"><img src = {data3} alt = "" className = "data3" /></div>
			<div class="swiper-slide"><img src = {data4} alt = "" className = "data4" /></div>
			<div class="swiper-slide"><img src = {data5} alt = "" className = "data5" /></div>
			<div class="swiper-slide"><img src = {data6} alt = "" className = "data6" /></div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
    <TitleLeft>Marcenas mattis egestas</TitleLeft>
    <InformationTitle> <p> Erdum et malesuada fames ac ante ileum primmer in 
    faucibus uspendisse porta. </p></InformationTitle>
    </InformationContainer>
    )
  }
  
  export default Information; */