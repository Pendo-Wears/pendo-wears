import RequireAuth from '@/src/components/RequireAuth'
import React from 'react'

const Cart = () => {
  return (
      <RequireAuth>
        <div>Cart</div>
    </RequireAuth>
  )
}

export default Cart
