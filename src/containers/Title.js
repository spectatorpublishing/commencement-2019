import React from 'react';
import styled from 'styled-components'
import Button from 'react-button-component'

const TitleWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://www.motherjones.com/wp-content/uploads/2018/06/panda-research-6-27-18-2.jpg")
`

const ClassDaysNum = styled.div`
    visibility:hidden;
    @media only screen and (max-width: 992px){
        visibility:visible;
        padding-left:15vw;
        width:35vw;
        font-size:2rem;
    }
`
const ClassDaysBody = styled.div`
    visibility:hidden;
    @media only screen and (max-width: 992px){
        visibility:visible;
        width:65vw;
        height:15vh;
    }
`

const ClassDaysContainer = styled.div`
    visibility:hidden;
    @media only screen and (max-width: 992px){
        visibility:visible;
        display:flex;
        flex-direction:inline-row;
        justify-content:space-around;
        background:white;
    }
`

const TitleButton = Button.extend`
    background-color:white;
    height:9vh;
    width:17vw;
    border: 5px;	
    border-radius: 25px;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 10vw;
    @media only screen and (max-width: 992px){
        font-size: 1.2rem;
        width:50vw;
        height:3vh;
        padding-bottom: 0vw;
        
        height:9vh;
    }	
`

const SectionContainer=styled.div`
    display:flex;
    flex-direction:row;
    height:15vh;
    width:80vw;
    // background-color: green;
    justify-content:space-between;
    @media only screen and (max-width: 992px){
        display:flex;
        flex-direction:column;
        justify-conent:space-around;
        width:50vw;
        height:40vh;
        overflow:hidden;
        text-align:center;
        text-decoration: underline; 
        color:white;
        font-size:1.5rem;
        font-weight:800;
        padding-bottom:20vh;
    }
`
const CommencementHeader=styled.div`
    display:flex;
    height:85vh;
    width:100vw;
    justify-content:space-around;
    align-items:center;
    color:white;
    font-size:7.8rem;
    font-weight:800;
    padding-bottom: 0vw;
    text-transform: uppercase;
    @media only screen and (max-width: 992px){
        padding-bottom: 30vw;
        word-wrap: break-word;
        width:50vw;
        padding-top:20vh;
        height:20vh;
        text-align:center;
        color:white;
        font-size:2.5rem;
        font-weight:800;
        
    }
`

export default class Title extends React.Component {
    
    render(){
        const SectionButtons = this.props.sections.map((el, i)=>(
            <TitleButton onClick={()=>{this.props.navigateTo(i)}} key={i}>{el}</TitleButton>
        ))
        return(
            <TitleWrapper>
                <CommencementHeader>Commencement 2019</CommencementHeader>
                <SectionContainer>
                {SectionButtons}
                </SectionContainer>
            </TitleWrapper>
        )
    }
}