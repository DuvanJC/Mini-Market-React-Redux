import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const SingleProduct = () => {
    let cereal_count = useSelector(state => state.cereal_count);
    let chips_count = useSelector(state => state.chips_count);
    let milk_count = useSelector(state => state.milk_count);
    let milo_count = useSelector(state => state.milo_count);

    let cereal_price = useSelector(state => state.cereal_price);
    let chips_price = useSelector(state => state.chips_price);
    let milk_price = useSelector(state => state.milk_price);
    let milo_price = useSelector(state => state.milo_price);

    let product = "";
    let productPrice = 0;
    let productAmmount = 0;
    if (cereal_count !== 0) {
        product = "cereal"
        productPrice = cereal_price
        productAmmount = cereal_count
    } else if (chips_count !== 0) {
        product = "chips"
        productPrice = chips_price
        productAmmount = chips_count
    } else if (milk_count !== 0) {
        product = "milk"
        productPrice = milk_price
        productAmmount = milk_count
    } else {
        product = "milo"
        productPrice = milo_price
        productAmmount = milo_count
    }

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

    const handleDecrementProduct = () => {
        switch (product) {
            case "cereal":
                handleDecrementCereal()
                break;
            case "chips":
                handleDecrementChips()
                break;
            case "milk":
                handleDecrementMilk()
                break;
            case "milo":
                handleDecrementMilo()
                break;

            default:
                break;
        }
    }
    const handleIncreaseProduct = () => {
        switch (product) {
            case "cereal":
                handleIncreaseCereal()
                break;
            case "chips":
                handleIncreaseChips()
                break;
            case "milk":
                handleIncreaseMilk()
                break;
            case "milo":
                handleIncreaseMilo()
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <div className="flex items-center justify-center w-full md:w-500 h-full">
                <img src={`${product}.png`} alt={"name"} className=" top-0 flex items-center justify-center w-full md:w-500 flex flex-col md:flex-row p-5 md:w-8/12 lg:w-8/12" />
            </div>
            <div></div>
            <div className="p-4">
                <div class="flex justify-between">
                    <div>
                        <span className="font-bold mb-2">{product.toUpperCase()} </span>
                        <>&nbsp;&nbsp;&nbsp;</>
                        <span className="text-lg font-bold mb-2 text-purple-600">{"$" + productPrice*productAmmount} </span>
                    </div>
                    <div />
                    <div>
                        <div>
                            <button className="inline-block w-8 h-8 bg-gray-300 bg-gray-100" onClick={() => handleDecrementProduct()}>-</button>
                            <button className="inline-block w-8 h-8 bg-gray-300 bg-purple-700 text-white" onClick={() => handleIncreaseProduct()}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-200"></div>

            <span className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, cons ultrices volutpat sem, quis pis onsecteturm et lobortis euismod, quam enim elementum neque, quis ultricies odio mauris sit amet diam. Duis nunc ligula, placerat ut fringilla quis, mattis in magna. Praesent sit amet consequat dui.
            </span>
        </div>
    );
};

export default SingleProduct;