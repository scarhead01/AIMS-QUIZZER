
  import { format, parseISO, subDays } from "date-fns";
  import { useState } from "react";
  import styled from "styled-components";
  import { Line } from "react-chartjs-2";
  import  Chart   from "chart.js/auto";
  import gradient from 'chartjs-plugin-gradient';
  
  Chart.register(gradient);
    
    export default function PerTake() {
  
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
      const UserData1 = [
        {
          id: 1,
          year: 2016,
          userGain: 50000,
          userLost: 823,
        },
        {
          id: 2,
          year: 2017,
          userGain: 85677,
          userLost: 345,
        },
        {
          id: 3,
          year: 2018,
          userGain: 20888,
          userLost: 555,
        },
        {
          id: 4,
          year: 2019,
          userGain: 60000,
          userLost: 4555,
        },
        {
          id: 5,
          year: 2020,
          userGain: 10000,
          userLost: 234,
        },
      ];
  
      const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
     
   
          {
           // fill: -1,
           label: "Beverages",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(143, 252, 205, 0.551)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
           
           
            fill:true,
           //  backgroundColor:gradient,
            borderColor: "rgb(49, 255, 166)",
           // color: "#fff",
            borderWidth: 3,
            
            //backgroundColor: "#fff",
           // pointBackgroundColor:"rgb(255, 169, 245)"
           
          },
          
          {
            // fill: -1,
            label: "Foods",
             data: UserData1.map((data) => data.userGain),
             backgroundColor: [
               "rgba(251, 34, 255, 0.626)",
              
             ],
            
            
             fill:true,
            //  backgroundColor:gradient,
             borderColor: "rgb(223, 95, 255)",
            // color: "#fff",
             borderWidth: 3,
             
             //backgroundColor: "#fff",
            // pointBackgroundColor:"rgb(255, 169, 245)"
            
           },
           
          
        ],
      });
  
  
  
      return (
          <Con>
       <Line data={userData}  
  
        //labels={{ labels: UserData.map((data) => data.year)}}
  
       options={ {
          plugins: {
            gradient,
            legend: {
              labels: {
                color: '#efefef'
              }
            },
            title: {
              display: true,
              color: '#eeeeee',
              text: ' Activeness'
          }
          },
          interaction: {
            intersect: false,
            mode: 'index',
          },
        
          scales: {
              xAxes: {
               borderColor: '#ff222252',
                grid: {
                  color: '#88878723'
                },
                  ticks:{
                    color:"#e8e8e8"
                  }
              },
              y: {
                grid: {
                  color: '#e0e0e013'
                },
                ticks:{
                  color:"#f0f0f0"
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
   