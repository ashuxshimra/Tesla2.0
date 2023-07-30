import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/carSlice'; //has all the cars from carSlice
import { useSelector } from 'react-redux'; //to select all the cars using this react hook
function Header() {
const [burgerStatus, setBurgerStatus]=useState(false);
const cars=useSelector(selectCars); //selecting all the cars now
// console.log(cars)

  return (
  <Container>
     <a>
      <img src='/images/logo.svg' alt=""/>
     </a>
     <Menu> 
      {/* now map the cars obtained one by one and display as done */}
       {cars && cars.map((car,index)=>( //mapping and getting car one by one and displaying , for each index and putting in car variable
       <a key={index} >{car}</a> //here key index as react tracks child based on key , and since key used here so done 
       ))}
     </Menu>
     <RightMenu>
      <a>Shop</a>
      <a>Tesla Account</a>
      <CustomMenu onClick={()=>setBurgerStatus(true)}/>
     </RightMenu>
     {/* //here passed show as paramter so that props can be used  */}
     <BurNav show={burgerStatus}> 
      {/* the below cross icon was at left we had to align it at the end so whenever to align anything in any place , wrap it and do as done here */}
      <CloseWrapper > 
        <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        {cars && cars.map((car,index)=>( //mapping and getting car one by one and displaying , for each index and putting in car variable
     <li> <a key={index} >{car}</a> </li> //here key index as react tracks child based on key , and since key used here so done 
       ))}
      <li><a >Existing Inventory</a></li>
      <li><a >Used Inventory</a></li>
      <li><a >Trade-in</a></li>
      <li><a >CyberTruck</a></li>
      <li><a >Roadaster</a></li>
      <li><a >Existing Inventory</a></li>
      <li><a >Existing Inventory</a></li>
     </BurNav>
   
  </Container>
  )
}

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display: flex;
align-items:center;
padding: 0 20px;
//meanwning this always keeps sectiobs under header/coontainer with some space between them in any scenario
justify-content:space-between;
// below to stretch the header at the end of screen
top:0;
left:0;
right:0;
//to make everythig bottom of a menu so that contets dont mix up of components
z-index:1;
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;

flex:1;
@media(max-width:768px){
  display:none;
}
a{
  font-weight:600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap:nowrap;
}
`
const RightMenu=styled.div`
display:flex;
align-items:center;

a{
  font-weight:600;
  text-transform: uppercase;
  margin-right:10px;
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;

`
const BurNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
text-align:start;
//below basically means transform this burnav based on the condition that is if props.show is flase then shift it to x-axis by 100% thus disappearing
transform: ${props=> props.show ? `translateX(0)`:`translateX(100%)`};
transition: transform 0.2s ;
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,.2);
}
a{
  font-weight:600;
}
`
const CustomClose=styled(CloseIcon)`
cursor:pointer;

`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;
`

