import { CircularProgress } from '@mui/material'
import React from 'react'

const loading = () => {
  return (
    <div style={{margin: '100px', }}>
      <CircularProgress size={24} sx={{color: 'black'}} />
    </div>
  )
}

export default loading
