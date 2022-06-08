
  import { format, parseISO, subDays } from "date-fns";
  import { useState } from "react";
  import styled from "styled-components";
  import { Pie } from "react-chartjs-2";
  import { Chart as ChartJS } from "chart.js/auto";
  
    
    export default function PieGames() {
      const UserData = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823,
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345,
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555,
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555,
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234,
        },
      ];
  
  
      const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
     
   
          {
           // fill: -1,
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
          //  borderColor: "rgb(49, 255, 166)",
            color: "#fff",
            borderWidth: 3,
            //backgroundColor: "#fff",
            pointBackgroundColor:"rgb(255, 169, 245)"
           
          },
          
        ],
      });
  
  
  
      return (
          <Con>
       <Pie data={userData}  
       options={ {
          plugins: {
            legend: {
              labels: {
                color: '#f0f0f0'
              }
            },
            title: {
              display: true,
              color: '#efefef',
              text: ' Activeness'
          }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
        
          scales: {
              x: {
               borderColor: '#ff222252',
                grid: {
                  color: '#88878723'
                },
                  ticks:{
                    color:"#eeeeee"
                  }
              },
              y: {
                grid: {
                  color: '#e0e0e013'
                },
                ticks:{
                  color:"#d2d2d2"
                }
              }
        }
     } }
      
      />
     
        </Con>
      );
    }
  
    const Con = styled.div`
    padding: .5rem ;
      margin:0 auto ;
      width: 270px ;
     
    `
    
    function CustomTooltip({ active, payload, label }) {
      if (active) {
        return (
          <div className="tooltip">
            <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
            <p>${payload[0].value.toFixed(2)} CAD</p>
          </div>
        );
      }
      return null;
    }
   