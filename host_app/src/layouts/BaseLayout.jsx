import { useOutlet } from 'react-router-dom'

export const BaseLayout = () => {
  const outlet = useOutlet()
  return <>{outlet}</>
}
