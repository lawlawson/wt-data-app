import React from 'react';
import '../Metrics/Metrics.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
  {
    name: 'Quarter 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Quarter 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Quarter 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Quarter 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function Metrics() {
  return (
    <div className='container component metrics-block'>
      <div className='row'>
        <div className='col-xs-12'>
          <div className='card bottom-position'>
            <div className='card-body'>
              <h5>Metrics</h5>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='pv'
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
                <LineChart type='monotone' dataKey='uv' stroke='#82ca9d' />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
