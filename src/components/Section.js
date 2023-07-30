import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = (props) => {
  return (
   <Wrap bgImage={props.backgroundImg}> 
    <Fade bottom>
    <ItemText>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
     </ItemText>   
    </Fade>
     <Buttons>
    <Fade bottom>
     <ButtonGroup>
      <LeftButton>
       {props.leftBtnText}
      </LeftButton>
      {/* if the right button exists then only show right button , this done as in accessories the left button was not at center so it was being styled if two button were there hence  */}
      {props.rightBtnText && <RightButton> 
        {props.rightBtnText}
      </RightButton> }
     </ButtonGroup>
     </Fade>
     <DownArrow src="/images/down-arrow.svg"/>
     </Buttons>
   </Wrap>
  )
}

export default Section 
//below view width and view height , bg img path and then adjusting its position and size , no-repeat means inage will not repeat vertically or horizontally it will be showed only once in its original size and position
const Wrap=styled.div` 
width: 100vw;
height: 100vh;
background-size:cover ;
background-position:center ;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:${props=> `url("/images/${props.bgImage}")`} 


`//vh-> vertical height
const ItemText=styled.div`
padding-top: 10vh;
text-align: center;
`
const ButtonGroup=styled.div`
display: flex;
margin-bottom: 30px;
//if screen adjusted to less , than we write media queries to make components the way we want in minimized screen
@media(max-width:768px){
  flex-direction:column;
}
`
const LeftButton=styled.div`
background-color: rgba(23, 26, 32, 0.8);
height:40px;
width: 256px;
color: white;
display: flex;
justify-content:center;
align-items: center;
border-radius: 100px;
opacity:0.85;
text-transform:uppercase;
font-size: 12px;
cursor:pointer;
margin:8px;

`

const RightButton=styled(LeftButton)`
background-color: white;
color: black;
opacity: 0.65;

`
const DownArrow=styled.img` 
margin-top:20px;
height:40px;
align-self: center;
margin-left: auto;
margin-right: auto;
overflow-x: hidden;
animation: animateDown infinite 1.5s;

`
const Buttons=styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
`
