import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styles from "./Grafico.module.css"
import { PieChart, Pie } from 'recharts';

import { AreaChart, Area } from 'recharts';
import { curveCardinal } from 'd3-shape';

const Grafico = ({setMostrar,grafico}) => {
    //console.log(grafico)
    setMostrar(false)
    const data = [
        {name: "janeiro", gastos: grafico[0].total_mes, pv: 2400, amt: 2400},
        {name: "fevereiro", gastos: grafico[1].total_mes , pv: 2400, amt: 2400},
        {name: "março", gastos: grafico[2].total_mes, pv: 2400, amt: 2400},
        {name: "abril", gastos: grafico[3].total_mes, pv: 2400, amt: 2400},
        {name: "maio", gastos: grafico[4].total_mes, pv: 2400, amt: 2400},
        {name: "junho", gastos: grafico[5].total_mes, pv: 2400, amt: 2400},
        {name: "julho", gastos: grafico[6].total_mes, pv: 2400, amt: 2400},
        {name: "agosto", gastos: grafico[7].total_mes, pv: 2400, amt: 2400},
        {name: "setembro", gastos: grafico[8].total_mes, pv: 2400, amt: 2400},
        {name: "outubro", gastos: grafico[9].total_mes, pv: 2400, amt: 2400},
        {name: "novembro", gastos: grafico[10].total_mes, pv: 2400, amt: 2400},
        {name: "dezembro", gastos: grafico[11].total_mes, pv: 2400, amt: 2400},
    ];

      
    const cardinal = curveCardinal.tension(0.2);

    const data2 = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    
  return (
   
    <div className={styles.cardGrafico} >
        <BarChart  width={1200} height={400} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="gastos" fill="#8884d8" barSize={30} />
        </BarChart>
        
        <PieChart width={400} height={400}>
          <Pie
            dataKey="gastos"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      
        
        <AreaChart
          width={1200}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="gastos" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="gastos" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
      
    </div>
  )
}

export default Grafico