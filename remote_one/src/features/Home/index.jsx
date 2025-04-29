import React from 'react'
import { useNavigate } from 'react-router-dom'
const AButton = React.lazy(() => import('host/AButton'))

const Home = () => {
  const navigate = useNavigate()

  return (
    <div>
      Home MFE1
      <AButton title="Trở về trang chủ host" onClick={()=> navigate("/")}   />
    </div>
  )
}

export default Home
