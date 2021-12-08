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
import { Swiper, SwiperSlide } from "swiper/react";

import data from '../../common/assets/png/Data.png'
import data2 from '../../common/assets/png/Data2.png'
import data3 from '../../common/assets/png/Data3.png'
import data4 from '../../common/assets/png/Data4.png'
import data5 from '../../common/assets/png/Data5.png'
import data6 from '../../common/assets/png/Data6.png'
import { InformationContainer, InformationTitle, TitleLeft } from "./styles";

import "swiper/css";
import "swiper/css/pagination"

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