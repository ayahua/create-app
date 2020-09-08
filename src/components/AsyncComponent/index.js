import React, { Suspense, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Loading } from '@/components'

const AsyncComponent = ({ children, loadingDelay = 0 }) => {
  const [loading, setLoading] = useState(false)
  const delay = useRef(null)

  useEffect(() => {
    delay.current = setTimeout(() => setLoading(true), loadingDelay)
    return () => {
      delay.current = null
    }
  }, [loadingDelay])

  return (
    <Suspense fallback={loading && <Loading helperText='页面加载中...' />}>
      {children}
    </Suspense>
  )
}

AsyncComponent.propTypes = {
  children: PropTypes.any,
  loadingDelay: PropTypes.number
}

export default AsyncComponent
