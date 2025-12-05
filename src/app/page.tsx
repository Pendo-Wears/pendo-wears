import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <Box>
          Pendo Wears
          <Link href='/products'>Products</Link>
    </Box>
  )
}

export default HomePage
