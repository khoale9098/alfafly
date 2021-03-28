import * as React from 'react'

export interface Icons extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode
  size?: string | number
  color?: string
  title?: string
}
