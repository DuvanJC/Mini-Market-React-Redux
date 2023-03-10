const initialState = {
    //Products Price
    cereal_price: 4.5,
    chips_price: 4.5,
    milk_price: 0.6,
    milo_price: 4.1,

    // Products Number
    cereal_count: 0,
    chips_count: 0,
    milk_count: 0,
    milo_count: 0,

    payment_active: false,
};
const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_CEREAL':
            return { ...state, cereal_count: state.cereal_count + 1 };
        case 'DECREMENT_CEREAL':
            return { ...state, cereal_count: state.cereal_count - 1 };
        case 'INCREASE_CHIPS':
            return { ...state, chips_count: state.chips_count + 1 };
        case 'DECREMENT_CHIPS':
            return { ...state, chips_count: state.chips_count - 1 };
        case 'INCREASE_MILK':
            return { ...state, milk_count: state.milk_count + 1 };
        case 'DECREMENT_MILK':
            return { ...state, milk_count: state.milk_count - 1 };
        case 'INCREASE_MILO':
            return { ...state, milo_count: state.milo_count + 1 };
        case 'DECREMENT_MILO':
            return { ...state, milo_count: state.milo_count - 1 };
        case 'CLEAR_CART':
            return { ...state, cereal_count: 0, chips_count: 0, milk_count: 0, milo_count: 0 };
        default:
            return state;
    }
};

export default marketReducer;