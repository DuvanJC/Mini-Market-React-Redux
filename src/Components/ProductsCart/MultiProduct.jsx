import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PaymentPopup from '../PaymentPopup';
const MultiProduct = () => {

    let cereal_count = useSelector(state => state.cereal_count);
    let chips_count = useSelector(state => state.chips_count);
    let milk_count = useSelector(state => state.milk_count);
    let milo_count = useSelector(state => state.milo_count);

    let cereal_price = useSelector(state => state.cereal_price);
    let chips_price = useSelector(state => state.chips_price);
    let milk_price = useSelector(state => state.milk_price);
    let milo_price = useSelector(state => state.milo_price);

    const dispatch = useDispatch();
    const handleDecrementMilk = () => {
        dispatch({ type: 'DECREMENT_MILK' });
    }
    const handleDecrementChips = () => {
        dispatch({ type: 'DECREMENT_CHIPS' });
    }
    const handleDecrementCereal = () => {
        dispatch({ type: 'DECREMENT_CEREAL' });
    }
    const handleDecrementMilo = () => {
        dispatch({ type: 'DECREMENT_MILO' });
    }
    const getTotalProduct = (product, price) => {
        let total = product * price;
        return total.toFixed(1);
    }
    const getTotalCart = () => {
        let subtotal_chips = chips_count * chips_price;
        let subtotal_milk = milk_count * milk_price;
        let subtotal_milo = milo_count * milo_price;
        let subtotal_cereal = cereal_count * cereal_price;
        let total = subtotal_cereal + subtotal_chips + subtotal_milk + subtotal_milo;
        return total.toFixed(2);
    }
    return (
        <div className="">
            <div className="flex flex-col ">
                {chips_count !== 0 ?
                    <div class="relative grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-5">
                            <div className="flex items-center w-500  bg-white p-2">
                                <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center font-semibold mr-4">{chips_count}</div>
                                <img src="chips.png" alt="Img 13" className="h-17 w-12" />
                            </div>
                        </div>
                        <div class="place-content-center col-start-5 col-end-7">
                            <div class="flex items-center w-500  bg-white p-2">
                                <span className="inline-block align-middle text-md font-bold mb-2 text-purple-600">$ {`${getTotalProduct(chips_count, chips_price)}`}</span>
                            </div>
                        </div>
                        <div class="absolute right-0">
                            <button className="w-8 h-8 bg-gray-300" onClick={() => handleDecrementChips()}>-</button>
                        </div>
                    </div>

                    : null
                }
                {milk_count !== 0 ?
                    <>
                        <div className="border-t border-gray-200" />
                        <div class="relative grid grid-cols-6 gap-4">
                            <div class="col-start-1 col-end-5">
                                <div className="flex items-center w-500  bg-white p-2">
                                    <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center font-semibold mr-4">{milk_count}</div>
                                    <img src="milk.png" alt="Img 14" className="h-17 w-12 " />
                                </div>

                            </div>
                            <div class="place-content-center col-start-5 col-end-7">
                                <div class="flex items-center w-500  bg-white p-2">

                                    <span className="text-md font-bold mb-2 text-purple-600">{"$ " + getTotalProduct(milk_count, milk_price)}</span>
                                </div>
                            </div>
                            <div class="absolute right-0">
                                <button className="w-8 h-8 bg-gray-300" onClick={() => handleDecrementMilk()}>-</button>
                            </div>
                        </div>
                    </>
                    : null
                }
                {milo_count !== 0 ?
                    <>
                        <div className="border-t border-gray-200" />
                        <div class="relative grid grid-cols-6 gap-4">
                            <div class="col-start-1 col-end-5">
                                <div className="flex items-center w-500  bg-white p-2">
                                    <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center font-semibold mr-4">{milo_count}</div>
                                    <img src="milo.png" alt="Img 15" className="h-17 w-12" />
                                </div>
                            </div>
                            <div class="place-content-center col-start-5 col-end-7">
                                <div class="flex items-center w-500  bg-white p-2">
                                    <span className="text-md font-bold mb-2 text-purple-600">{"$ " + getTotalProduct(milo_count, milo_price)}</span>

                                </div>
                            </div>
                            <div class="absolute right-0">
                                <button className="w-8 h-8 bg-gray-300" onClick={() => handleDecrementMilo()}>-</button>
                            </div>
                        </div>
                    </>
                    : null
                }
                {cereal_count !== 0 ?
                    <>
                        <div className="border-t border-gray-200" />
                        <div class="relative grid grid-cols-6 gap-4">
                            <div class="col-start-1 col-end-5">
                                <div className="flex items-center w-500  bg-white p-2">
                                    <div className="w-8 h-8 bg-purple-700 text-white rounded-full flex items-center justify-center font-semibold mr-4">{cereal_count}</div>
                                    <img src="cereal.png" alt="Img 16" className="h-17 w-12" />
                                </div>
                            </div>
                            <div class="place-content-center col-start-5 col-end-7">
                                <div class="flex items-center w-500  bg-white p-2">
                                    <span className="justify-end text-md font-bold mb-2 text-purple-600">{"$ " + getTotalProduct(cereal_count, cereal_price)}</span>
                                </div>
                            </div>
                            <div class="absolute right-0">
                                <button className="w-8 h-8 bg-gray-300" onClick={() => handleDecrementCereal()}>-</button>
                            </div>
                        </div>
                    </>
                    : null
                }
                <div className="border-t border-gray-200" />
                <div class="relative grid grid-cols-6 gap-4">
                    <div class="place-content-center col-start-5 col-end-7">
                        <div class="flex items-center w-500  bg-white p-2">
                            <div className='text-right'>
                                <span className="font-bold mb-2 text-gray-600">{"Total: "} </span>
                                <span className="text-lg font-bold mb-2 text-purple-600">{"$" + getTotalCart()} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PaymentPopup/>
        </div>
    );
};

export default MultiProduct;