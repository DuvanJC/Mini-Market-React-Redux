import React from 'react';
import { useDispatch } from 'react-redux';
const Store = () => {
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
    return (
        <>
            <div className="">
                <img src="store.png" alt={"name"} className=" top-0 flex flex-col md:flex-row " />
                <span className="text-lg font-bold mb-2 text-purple-600">{"Store"} </span>
            </div>
            <br />
            <div className="border-t border-gray-200 "></div>
            <br />
            <div className="flex md:flex-row">
                <div className="w-full md:w-1/3 p-1">
                    <img onClick={() => handleIncreaseMilk()} src="milk.png" alt="img 1" className="border border-gray-300 w-full h-34 object-cover" />
                    <img onClick={() => handleIncreaseCereal()} src="cereal.png" alt="img 2" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                    <img onClick={() => handleIncreaseMilo()} src="milo.png" alt="img 3" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                    <img onClick={() => handleIncreaseChips()} src="chips.png" alt="img 4" className="border border-gray-300 w-full h-48 mt-2 object-cover" />
                </div>
                <div className="w-full md:w-1/3 p-1">
                    <img onClick={() => handleIncreaseChips()} src="chips.png" alt="img 5" className="border border-gray-300 w-full h-48 object-cover" />
                    <img onClick={() => handleIncreaseMilk()} src="milk.png" alt="img 6" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                    <img onClick={() => handleIncreaseMilo()} src="milo.png" alt="img 7" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                    <img onClick={() => handleIncreaseMilk()} src="milk.png" alt="img 8" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                </div>
                <div className="w-full md:w-1/3 p-1">
                    <img onClick={() => handleIncreaseMilo()} src="milo.png" alt="img 9" className="border border-gray-300 w-full h-34 object-cover" />
                    <img onClick={() => handleIncreaseChips()} src="chips.png" alt="img 10" className="border border-gray-300 w-full h-48 mt-2 object-cover" />
                    <img onClick={() => handleIncreaseCereal()} src="cereal.png" alt="img 11" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                    <img onClick={() => handleIncreaseMilk()} src="milk.png" alt="img 12" className="border border-gray-300 w-full h-34 mt-2 object-cover" />
                </div>
            </div>
        </>
    );
};

export default Store;