import React, { useState } from 'react';
import styled from 'styled-components';
import harry from '../images/HarryP.jpg'
import ron from '../images/RonW.jpg'
import hermione from '../images/HermioneG.jpg'

const data = [
  {rank: 1, label: 'Harry Potter', img: harry},
  {rank: 2, label: 'Ron Weasley', img: ron},
  {rank: 3, label: 'Hermione Granger', img: hermione},
]
const Ranks = () => {
  const [select,setSelect] = useState("Course");

  const Selected = (selected) => {
    setSelect(selected);

  }

  return <RankCon>
    <RankSwitch>
      <CourseRankbtn  className={select==="Section" ? "visible":"hidden"} onClick={Selected.bind(this,"Section")}>Course Rank</CourseRankbtn>
      <SectionRankbtn className={select==="Course" ? "visible":"hidden"} onClick={Selected.bind(this,"Course")}>Section Rank</SectionRankbtn>
    </RankSwitch>
    <TableConSection className={select==="Section" ? "visible":"hidden"} >
    <h2>RANK</h2>
    <table>
        
      {data.map((val, key) => {
        return (
          <tr key = {key}>
            <td className = "rank"> {val.rank} </td>
            <td className="pic"> <RankPic src = {val.img}/>   </td>
            <td className = "label" >{val.label}</td>
          </tr>
        )
      })}
    </table>
    </TableConSection >
    <TableConCourse className={select==="Course" ? "visible":"hidden"}>
    <h2>RANK</h2>
    <table>
        
      {data.map((val, key) => {
        return (
          <tr key = {key}>
            <td className = "rank"> {val.rank} </td>
            <td className="pic"> <RankPic src = {val.img}/>   </td>
            <td className = "label" >{val.label}</td>
          </tr>
        )
      })}
    </table>
    </TableConCourse>
  </RankCon>;
};

const RankSwitch = styled.div`
  height: 20px;
  width: 100%;
  position: relative;
  margin-top: -40px;
`
const CourseRankbtn = styled.button`
 border: none;
  width: 50%;
  height: 50px;
  border-radius: 5px;
  margin-top: 0px;
  border-top-left-radius:20px;
  color: #fff;
  &.visible{
    background: rgba(135, 51, 209, 0.096);
  }
    &.hidden{
    background: rgba(40, 7, 68, 0.32);
  }
`
const SectionRankbtn = styled.button`
  border: none;
  width: 50%;
  height: 50px;
  border-radius: 5px;
  border-top-right-radius:20px;
  color:#fff;
  &.visible{
    background: rgba(135, 51, 209, 0.096);
  }
  &.hidden{
    background: rgba(40, 7, 68, 0.32);
  }
`
const RankCon = styled.div`
  position: relative;
  height: 500px;
  width: 600px;
  margin: auto;
  background: rgba(220, 198, 239, 0.32);
  border-radius: 20px;
  padding-top:40px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  & table {
    grid-gap: 1rem;
    margin: auto;
    display: block;
    color: #fff;
    width: 500px;
    height: 100%;
    position: relative;
    font-family: halant;
  }
  & th {
    text-align: center;
    margin: auto;
    position: relative;
    padding: auto;
    padding-bottom: 1rem;
    
  }
  & tr:nth-child(even) { background:  linear-gradient(0deg, rgba(84, 66, 191, 0.31), rgba(84, 66, 191, 0.31)), linear-gradient(0deg, rgba(202, 110, 235, 0.4), rgba(202, 110, 235, 0.4)), rgba(202, 110, 235, 0.4);}
  & tr{
    margin: auto;
  }
  & td {
    width: 20%;
    &.rank {
      width: 30%;
      text-align: center;
    }
    &.label{
      width: 500px;
    }
    &.pic{
      text-align: center;
    }
  }
`
const RankPic = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 1px solid #fff;
`
const TableConSection = styled.div`
    margin: 20px 60px;
    width: 500px;
    & h2{
      font-family: halant;
      font-weight: 600;
      color: white;
      text-align: center;
      font-size: 20px;
      margin-top: 60px;
    }
    &.visible{
    visibility:visible;
  }
  &.hidden{
    visibility: hidden;
  }
`
const TableConCourse = styled.div`
   margin: 20px 60px;
    width: 500px;
    position: absolute;
    top: 43px;
    & h2{
      font-family: halant;
      font-weight: 600;
      color: white;
      text-align: center;
      font-size: 20px;
     
    }
    &.visible{
    visibility:visible;
  }
  &.hidden{
    visibility: hidden;
  }
`
export default Ranks;