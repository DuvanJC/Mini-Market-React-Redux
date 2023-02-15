import React from 'react';
import Products from './Components/Products';
import ShopingCart from './Components/ShopingCart';
import PaymentPopup from './Components/PaymentPopup';

const App = () => {
  return (
    <div className="">
      <PaymentPopup/>
      <div className=''>
        <div className=" flex items-center justify-center w-full md:w-500">
          <div className="  border-t border-gray-200"></div>
          <div className=" flex bg-white border-2 border-gray-300 shadow-lg flex  justify-center md:w-500 flex flex-col md:flex-row p-5 md:w-8/12 lg:w-6/12  flex justify-center items-start h-full">
            <div className="w-full md:w-1/2 pr-4">
              <Products />
            </div>
            <div className="w-full md:w-1/2 mt-5 md:mt-0 pl-4 " >
              <ShopingCart />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;