import React from 'react'
import { menu } from '../../layouts/menu';
import {   Menu } from 'antd';
import { Link} from 'react-router-dom';

const AHeader = () => {
  
  return (
    <div className='w-screen h-[46px] bg-gray-200 flex gap-3 items-center p-2.5'>
      {
        menu?.map((item, index)=> {
          return <Link key={index} to={item?.key}>{item?.label}</Link>
        })
      }
   
  </div>
  )
}

export default AHeader
