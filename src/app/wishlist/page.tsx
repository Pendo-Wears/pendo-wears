import RequireAuth from '@/src/components/RequireAuth'
import React from 'react'

const Wishlist = () => {
  return (
      <RequireAuth>
        <div>Wishlist</div>
    </RequireAuth>
  )
}

export default Wishlist
