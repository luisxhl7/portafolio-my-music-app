import React, { useEffect, useState } from 'react'
import { AppRouter } from '../../routers/AppRouter'

export const App = () => {
  const [user, setUser] = useState(false)
  useEffect(() => {
    setUser(localStorage.getItem('accessToken'))
  }, [])
  
  return (
    <>
      <AppRouter/>
    </>
  )
}
