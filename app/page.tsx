'use client'
import styles from './page.module.css'
import List from '@/components/List'
import Filter from '@/components/Filter'
import { useEffect, useState } from 'react'

export default function Home() {

  return (
    <main>
      <Filter></Filter>
      <List></List>
    </main>
  )
}
