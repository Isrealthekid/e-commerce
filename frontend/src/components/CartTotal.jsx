import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext)
  return (
    <div  className='w-full'>
        <div className="text-2xl">
            <Title text1={'CART'} text2={'TOTAL'}/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>{currency} {getCartAmount() === 0 ? 0 : delivery_fee}.00</p>
                {/* if the amount is 0 set the shipping fee to 0 else put the delivery fee */}
            </div>
            <hr />
            <div className="flex justify-between border-top">
                <b className='text-xl'>Total</b>
                <b className='text-xl'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee }.00</b>
                {/* if the amount is 0 set the total to 0 else add the delivery fee */}
            </div>



        </div>
    </div>
  )
}

export default CartTotal