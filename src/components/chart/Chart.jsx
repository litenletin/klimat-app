import React, { useEffect, useState } from "react";
import "./Chart.css";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//Installerat npm install recharts, https://recharts.org/en-US/guide

/* 
UPPDATERAD:
- Tagit bort legend som visar -0°C och +0°C
- Ändrat datan visar från år 2006
- Lagt till label för båda axlar
*/

//Eget tooltip-innehåll, (active) för att endast visas vid hover, payload tar datan från viewboxen och tar den första [0] som är valuen från Y-axeln så att medeltemperaturen kan renderas ut, label är X-axeln, https://www.youtube.com/watch?v=e4en8kRqwe8
function CustomToolTip({ active, payload, label }) {
  if (active) {
    return (
      <div className="customTooltip">
        <span>Medeltemperatur:</span>
        <p>{payload[0].value}°C</p>
        <p>År: {label}</p>
      </div>
    )
  }
  return null;
}

/* Diagramkomponenten */
export function Chart() {

  const [chartData, setchartData] = useState([]);

  /*Datan finns i en json-fil i public, how to fetch data från https://upmostly.com/tutorials/how-to-display-json-data-in-react-table*/
  const fetchData = () => {
    fetch("/data/temperaturedata.json")
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setchartData(actualData);
        console.log(chartData);
      })
  };

  /*Sorterar datan från vänster (tidigare år) till höger (senare år) i kronologisk ordning, filter visar från vilket år som ska visas*/
  const data = chartData
    .sort((a, b) => a.Year - b.Year)
    .filter(x => x.Year > 2006);

  /*Skapar två olika färger för om datan är under eller över 0 grader, tar bort gradient-effekten*/
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.Mean));
    const dataMin = Math.min(...data.map((i) => i.Mean));

    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }
    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chartContainer" style={{ boxShadow: '1px 3px 10px black', }}> {/*UPPDATERING: lagt till boxShadow */}
      <h3 className="font-link-h3" >Jordens medeltemperatur år 2007 – 2016</h3>
      {/* Visar två rutor med samma färger som diagrammet för minus 0°C och över 0°C */}
      {/*         <div className="legendContainer">
          <div className="box1"></div>
            <p>Under 0°C</p>
          <div className="box2"></div>
            <p>Över 0°C</p>
        </div> */}
      {/*Måste ha width och height i parent annars renderas inte*/}
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          {/*Ändra dimensioner, importera data*/}
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 40,
              left: 0,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/*Vilken data som ska visas på X-axeln*/}
            <XAxis dataKey="Year" padding={{ bottom: 50 }}>

            </XAxis>
            <YAxis label={{ value: 'Grader Celsius (°C)', angle: -90, position: 'insideLeft' }}></YAxis>
            <Tooltip
              cursor={{ stroke: "black", strokeWidth: 1 }}
              content={<CustomToolTip />}
            />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                {/*Ändra färg på diagrammet*/}
                <stop offset={off} stopColor="#F76245" /* stopColor="red" */ stopOpacity={1} />
                <stop offset={off} stopColor="#67A2B3" /* stopColor="blue" */ stopOpacity={1} />
              </linearGradient>
            </defs>
            {/*Ändra typ, vilken data som ska visas på Y-axeln, färg på linje, storlek på tooltip-punkt*/}
            <Area
              type="monotone"
              dataKey="Mean"
              stroke="black"
              fill="url(#splitColor)"
              activeDot={{ r: 6 }}>
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="xaxisLabel">År</p>
      <p className="chartSource">Källa: GCAG & GISTEMP</p>
    </div>
  );
}