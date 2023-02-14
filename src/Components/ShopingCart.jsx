import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const ShopingCart = () => {
    const cereal_count = useSelector(state => state.cereal_count);
    const chips_count = useSelector(state => state.chips_count);
    const milk_count = useSelector(state => state.milk_count);
    const milo_count = useSelector(state => state.milo_count);

    const dispatch = useDispatch();
    const handleIncreaseMilk = () => {
        dispatch({ type: 'INCREASE_MILK' })
    }
    const handleIncreaseChips = () => {
        dispatch({ type: 'INCREASE_CHIPS' })
    }
    const handleIncreaseCereal = () => {
        dispatch({ type: 'INCREASE_CEREAL' })
    }
    const handleIncreaseMilo = () => {
        dispatch({ type: 'INCREASE_MILO' })
    }
    const handleDecrementMilk = () => {
        dispatch({ type: 'DECREMENT_MILK' })
    }
    const handleDecrementChips = () => {
        dispatch({ type: 'DECREMENT_CHIPS' })
    }
    const handleDecrementCereal = () => {
        dispatch({ type: 'DECREMENT_CEREAL' })
    }
    const handleDecrementMilo = () => {
        dispatch({ type: 'DECREMENT_MILO' })
    }

    return (
        <>
            <div className='ml-auto h-24'>
                <div className="grid gap-2 grid-cols-2 justify-items-end  pt-8">
                    <div />
                    <div>
                        <button className="inline-block w-8 h-8 bg-gray-300 bg-gray-100">-</button>
                        <button className="inline-block w-8 h-8 bg-gray-300 bg-purple-700 text-white">+</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="border-t border-gray-200"></div>
            
            <div>
                <div className="flex items-center justify-center w-full md:w-500 h-full">
                    <img src="milk.png" image alt={"name"} className=" top-0 flex items-center justify-center w-full md:w-500 flex flex-col md:flex-row p-5 md:w-8/12 lg:w-8/12" />
                </div>
                <div></div>
                <div className="p-4">
                    <div class="flex justify-between">
                        <div>
                            <span className="font-bold mb-2">{"Name"} </span>
                            <span className="text-lg font-bold mb-2 text-purple-600">{"$" + "1.50"} </span>
                        </div>
                        <div />
                        <div>
                            <div>
                                <button className="inline-block w-8 h-8 bg-gray-300 bg-gray-100">-</button>
                                <button className="inline-block w-8 h-8 bg-gray-300 bg-purple-700 text-white">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200"></div>

                <span className="text-gray-400 text-sm">Este es un  la etiqueta  que significa 'Oportunidad de salto de línea'. Significa que podemos dividir una palabra realmente larga por ejemplo una url indicandole al navegador donde cortarla cuando no entre en su contenedor. Obviamente no funciona para nuestro caso..</span>

                <div>
                    <p className="font-semibold text-zinc-500 text-base">Column 2</p>
                </div>
                <div>
                    <p className="font-semibold text-zinc-500 text-base">cereal {cereal_count}</p>
                </div>
                <div>
                    <p className="font-semibold text-zinc-500 text-base">chips {chips_count}</p>
                </div>
                <div>
                    <p className="font-semibold text-zinc-500 text-base">milk {milk_count}</p>
                </div>
                <div>
                    <p className="font-semibold text-zinc-500 text-base">milo {milo_count}</p>
                </div>
            </div>
        </>

    );
};

export default ShopingCart;