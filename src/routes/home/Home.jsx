import React from 'react'
import Directory from '../../components/directory/Directory.jsx'
import categories from '../../categories.json'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
        <Directory categories={categories} />
    </div>
  )
}

export default Home