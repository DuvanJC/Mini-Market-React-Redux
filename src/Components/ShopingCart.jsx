import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MultiProduct from './ProductsCart/MultiProduct';
import SingleProduct from './ProductsCart/SingleProduct';

const ShopingCart = () => {

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    let cereal_count = useSelector(state => state.cereal_count);
    let chips_count = useSelector(state => state.chips_count);
    let milk_count = useSelector(state => state.milk_count);
    let milo_count = useSelector(state => state.milo_count);

    let cereal_price = useSelector(state => state.cereal_price);
    let chips_price = useSelector(state => state.chips_price);
    let milk_price = useSelector(state => state.milk_price);
    let milo_price = useSelector(state => state.milo_price);

    const getTotalCart = () => {
        let subtotal_chips = chips_count * chips_price;
        let subtotal_milk = milk_count * milk_price;
        let subtotal_milo = milo_count * milo_price;
        let subtotal_cereal = cereal_count * cereal_price;
        let total = subtotal_cereal + subtotal_chips + subtotal_milk + subtotal_milo;
        return total.toFixed(2);
    }
    let isCartEmpty = milo_count === 0 && milk_count === 0 && chips_count === 0 && cereal_count === 0;
    return (
        <>
            <div className='ml-auto h-24'>
                <div className="grid gap-2 grid-cols-2 justify-items-end  pt-8">
                    <div />
                    <div>
                        <button className="inline-block w-16 h-8 bg-gray-300 bg-purple-300 text-md font-bold text-purple-800">${getTotalCart()}</button>
                        <button className="inline-block w-8 h-8 bg-gray-300 bg-purple-700 text-white" onClick={()=>handleClearCart()}>x</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="border-t border-gray-200" />
            {
                isCartEmpty ?
                    <span className="text-gray-400 text-sm">
                        Please choose a product on the left.
                    </span>
                    :
                    (milo_count !== 0 ? 1 : 0) + (milk_count !== 0 ? 1 : 0) + (chips_count !== 0 ? 1 : 0) + (cereal_count !== 0 ? 1 : 0) === 1 ?
                        <SingleProduct />
                        :
                        <MultiProduct />
            }
        </>

    );
};

export default ShopingCart;