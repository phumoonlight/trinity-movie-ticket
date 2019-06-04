import React from 'react'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css';
import Header from '../components/header/Header'


function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <DatePicker />
    </div>
  )
}

export default Home
