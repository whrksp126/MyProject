import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const LoadingToRedirect = () => {
  const [count, setCount] = useState(100);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => ++currentCount)
    }, 1)

    count === 100 && history.push('/login')
    return () => clearInterval(interval)
  }, [count, history])

  return (
    <div>
     <p> 유저 정보 확인 중 {count} % </p>
    </div>
  )
}

export default LoadingToRedirect
