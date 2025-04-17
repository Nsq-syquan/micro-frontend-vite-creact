
import { Navigate, useOutlet } from 'react-router-dom'

export const AuthLayout = () => {
  const outlet = useOutlet()
//   check login
//   if (getCookie('token') ) {
//     return <Navigate to='/' replace />
//   }

  return <>{outlet}</>
}
