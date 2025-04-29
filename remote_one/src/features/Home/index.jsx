import React from 'react'
const AButton = React.lazy(() => import('host/AButton'))

const Home = () => {
  return (
    <div>
      Home MFE1
      <AButton />
    </div>
  )
}

export default Home
