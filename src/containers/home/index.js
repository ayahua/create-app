import React from 'react'
import { useHistory } from 'react-router-dom'

function Home () {
  const history = useHistory()

  function handleClickConfig () {
    history.push('/config/list')
  }
  return (
    <div>
      Home
      <button onClick={handleClickConfig}>go config</button>
    </div>
  )
}

export default Home
