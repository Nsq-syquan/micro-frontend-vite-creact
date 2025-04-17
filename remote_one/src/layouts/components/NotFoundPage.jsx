import NotFoundPageImage from '../../assets/not_found.jpg'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      }}
    >
      <img src={NotFoundPageImage} alt='' width={600} height={300} />
      <span onClick={() => {
          navigate(-1)
        }}>Quay lại</span>
    </div>
  )
}

export default NotFoundPage
