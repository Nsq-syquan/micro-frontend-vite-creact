import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonField, InputField } from 'host/fields'

const Home = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")

  return (
    <div className='flex flex-col gap-3 items-center justify-center h-screen'>
      Home MFE1
      <InputField  value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
      <ButtonField title="Thông báo và trở về trang chủ" onClick={()=> {
        navigate("/")        
        alert(inputValue)
      }}   />
      
    </div>
  )
}

export default Home
