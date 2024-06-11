import {ResponsiveContainer,Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Label } from 'recharts';
import styles from "./Grafico.module.css"
import { PieChart, Pie } from 'recharts';

import { AreaChart, Area } from 'recharts';
import { curveCardinal } from 'd3-shape';
import {  Center, Flex, FormLabel, Heading } from '@chakra-ui/react';

const Grafico = ({gastos,setMostrar,grafico}) => {
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

    function convertePorcento(valor){
      let x = 100*(valor/gastos)  
      return Math.round(x)
    }

    const dataPorcento = [
      {name: "janeiro", gastos: convertePorcento(grafico[0].total_mes), pv: 2400, amt: 2400},
      {name: "fevereiro", gastos: convertePorcento(grafico[1].total_mes) , pv: 2400, amt: 2400},
      {name: "março", gastos: convertePorcento(grafico[2].total_mes), pv: 2400, amt: 2400},
      {name: "abril", gastos: convertePorcento(grafico[3].total_mes), pv: 2400, amt: 2400},
      {name: "maio", gastos: convertePorcento(grafico[4].total_mes), pv: 2400, amt: 2400},
      {name: "junho", gastos: convertePorcento(grafico[5].total_mes), pv: 2400, amt: 2400},
      {name: "julho", gastos: convertePorcento(grafico[6].total_mes), pv: 2400, amt: 2400},
      {name: "agosto", gastos: convertePorcento(grafico[7].total_mes), pv: 2400, amt: 2400},
      {name: "setembro", gastos: convertePorcento(grafico[8].total_mes), pv: 2400, amt: 2400},
      {name: "outubro", gastos: convertePorcento(grafico[9].total_mes), pv: 2400, amt: 2400},
      {name: "novembro", gastos: convertePorcento(grafico[10].total_mes), pv: 2400, amt: 2400},
      {name: "dezembro", gastos: convertePorcento(grafico[11].total_mes), pv: 2400, amt: 2400},
  ];

  const dataSobrou = [
    {name: "janeiro", saldo: 4500-grafico[0].total_mes, pv: 2400, amt: 2400},
    {name: "fevereiro", saldo: 4500-grafico[1].total_mes , pv: 2400, amt: 2400},
    {name: "março", saldo: 4500-grafico[2].total_mes, pv: 2400, amt: 2400},
    {name: "abril", saldo: 4500-grafico[3].total_mes, pv: 2400, amt: 2400},
    {name: "maio", saldo: 4500-grafico[4].total_mes, pv: 2400, amt: 2400},
    {name: "junho", saldo: 4500-grafico[5].total_mes, pv: 2400, amt: 2400},
    {name: "julho", saldo: 4500-grafico[6].total_mes, pv: 2400, amt: 2400},
    {name: "agosto", saldo: 4500-grafico[7].total_mes, pv: 2400, amt: 2400},
    {name: "setembro", saldo: 4500-grafico[8].total_mes, pv: 2400, amt: 2400},
    {name: "outubro", saldo: 4500-grafico[9].total_mes, pv: 2400, amt: 2400},
    {name: "novembro", saldo: 4500-grafico[10].total_mes, pv: 2400, amt: 2400},
    {name: "dezembro", saldo: 4500-grafico[11].total_mes, pv: 2400, amt: 2400},
];

      
    const cardinal = curveCardinal.tension(0.2);

  //grafico de pizza
  
  const COLORS = [
    'red',
    '#00C49F',
    '#FFBB28', 
    '#FF8042',
    "purple",
    "black",
    "#0088FE",
    "pink",
    '#00fecb',
    "gray",
    "#ff0040",
    "#221e38"
  ];

  
  const RADIAN = Math.PI / 180;
  
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="none" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
   
    <div className={styles.cardGrafico} >
      
    <Flex flexDirection={["column","column","row","row"]} marginTop="2rem" w="100%" alignItems="center" justifyContent="center" gap="2rem" >
        
        <div>
          <Heading marginBottom="1rem" textAlign="center" >Gráfico quantitatitivo das despesas</Heading>
          <BarChart className={styles.cardGrafico}  width={400} height={300} data={data}>
              <XAxis legend="none" dataKey="name" stroke="none" />
              <YAxis />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
              <Bar dataKey="gastos" fill="green" barSize={10} />
          </BarChart>
        </div>
        
        <div>
          <Heading marginBottom="1rem" >Gráfico do percentual das despesas</Heading>
           {/* <PieChart width={400} height={400}>
            <Pie
              dataKey="gastos"
              isAnimationActive={true}
              data={dataPorcento}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="green"
              label
            />
            <Tooltip />
          </PieChart>  */}
        <Flex alignItems="center"  >
        <PieChart width={300} height={300} >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="gastos"
            isAnimationActive={true}
            
          >
            {data.map((entry, index) => (
              <Cell  key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
       
            
        <Flex  w="280px" flexWrap="wrap" marginLeft="1rem"  alignItems="center" justifyContent="space-between"  >
          {COLORS.map( (cor,index) => (
            <Flex  marginTop="0.5rem" gap="0.5rem" alignItems="center" justifyContent="center" key={index} >
              <Flex borderRadius="10px" w="15px" h="15px" background={cor} />
              <FormLabel color='black' >{data[index].name}: {((data[index].gastos/gastos)*100).toFixed(0)}%</FormLabel>
            </Flex>
          ))}
        </Flex>

      </Flex>  
        </div>
        
    </Flex>

      <Center margin="2rem 0" >
        <div>
        <Heading>Gráfico do saldo do mês</Heading>
          <AreaChart
            width={400}
            height={400}
            data={dataSobrou}
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
            <Area type="monotone" dataKey="saldo" stroke="green" fill="green" />
          </AreaChart>
        </div>
      </Center>

      
       

    </div>
  )
}

export default Grafico