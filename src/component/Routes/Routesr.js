import React,{useState} from 'react'
import Uttarakhand from '../uttarakhand/Uttarakhand'
import Home from '../home/Home'
import {Routes, Route} from "react-router-dom"
import Bangalore from "../bangalore/Bangalore";
import Rajsthan from "../Rajsthan/Rajsthan"
import Assam from '../Assam/Assam';
import Odisha from '../oddisa/Oddisa';
import WestBengal from '../west/West';
import Andhra from '../aandhra/Andhra';
import Telangana from '../telangana/Telangana';
import Goa from '../Goa/Goa';
import Kerala from '../Kerala/Kerala';
import MP from '../mp/MP';
import Maharashtra from "../Maharastra/Maharashtra"
import Form from '../signup/Form';
import Contact from "../contact/Contact"
import Uttar from '../uttarPradesh/Uttar';
import Jammu from '../jammu/Jammu';
import TamilNadu from '../Tamil Nadu/TamilNadu'
import Sikkim from '../Sikkim/Sikkim';
import Advanture from '../advanture/Advanture';
import Profile from '../Profile/Profile';
import About from '../About/About';
// import Profilea from '../pro/pr/Profilea';
import Post  from '../pro/pr/Post/CreatePost';
import ProfileForm from '../pro/pr/ProfileForm';
import UpdatePost from '../pro/pr/Post/UpdatePost';
import Feeds from '../pro/pr/feed/Feeds.js';
// import ProfileFormb from '../pro/pr/About';
// import CreatePost from '../pro/pr/createPost';


import Bihar from '../bihar/Bihar';
import Jhharkhand from '../jhharkhand/Jhharkhand';
import ArunachalPradesh from '../Arunachal Pradesh/ArunachalPradesh';
import Nagaland from '../Nagaland/Nagaland';

// import { SearchProvider } from '../home/SearchContext';
import Navbar from '../navabar/Navabar'

const Routesr = () => {
  return (
   <>
    <Routes>
       <Route path='/jhharkhand' element={<Jhharkhand/>} ></Route>
         <Route path='/arunachalPradesh' element={<ArunachalPradesh/>} ></Route>
         <Route path='/nagaland' element={<Nagaland/>} ></Route>
         <Route path='/bihar' element={<Bihar/>} ></Route>
          {/* <Route path='/profileFormb' element={<ProfileFormb/>} ></Route> */}
          <Route path='/feeds' element={<Feeds/>} ></Route>
         <Route path='/post' element={<Post/>} ></Route>
         <Route path='/profileForm' element={<ProfileForm/>} ></Route>
         <Route path='/updatePost' element={<UpdatePost/>} ></Route>
     {/* <Route path='/profilea' element={<Profilea/>} ></Route> */}
    <Route path='/profile' element={<Profile/>} ></Route>
    <Route path='/tamilNadu' element={<TamilNadu/>} ></Route>
    <Route path='/sikkim' element={<Sikkim/>} ></Route>
    <Route path='/jammu' element={<Jammu/>} ></Route>

<Route path='/uttar' element={<Uttar/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/Advanture' element={<Advanture/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
{/* <Route path='/createPost' element={<CreatePost />}></Route> */}

          <Route path='/form' element={<Form/>} ></Route>
      <Route path='/goa' element={<Goa/>} ></Route>
      <Route path='/kerala' element={<Kerala/>} ></Route>
      <Route path='/maharashtra' element={<Maharashtra/>} ></Route>
       <Route path='/mP' element={<MP/>} ></Route>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/andhra' element={<Andhra/>} ></Route>
      <Route path='/uttarakhand' element={<Uttarakhand/>} ></Route>
      <Route path='/bangalore' element={<Bangalore/>} ></Route>
      <Route path='/rajsthan' element={<Rajsthan/>} ></Route>
      <Route path='/assam' element={<Assam/>} ></Route>
      <Route path='/odisha' element={<Odisha/>} ></Route>
      <Route path='/westBengal' element={<WestBengal/>} ></Route>
      <Route path='/telangana' element={<Telangana/>} ></Route>
      

    </Routes>
    </>
  )
}

export default Routesr
