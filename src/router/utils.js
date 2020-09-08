import React from 'react'
import { AsyncComponent } from '@/components'

export const importer = file => () => import(/* webpackChunkName: "chunk-[request]" */ `@/containers/${file}`)

export const flattenRoutes = routes => routes.reduce((pre, cur) => {
  if (cur.children) {
    return [...pre, ...flattenRoutes(cur.children)]
  }
  const Component = React.lazy(importer(cur.component))
  pre.push({
    ...cur,
    Component: () => <AsyncComponent loadingDelay={50}>
      <Component />
    </AsyncComponent>
  })
  return pre
}, [])