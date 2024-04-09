import React from 'react'
import { Layouts } from '../../components/Layouts'
import { Hero } from '../../components/Hero'
import { Card } from '../../components/Card'

export const Home = () => {
  return (
    <Layouts>
      <Hero/>
      <Card/>
    </Layouts>
  )
}
