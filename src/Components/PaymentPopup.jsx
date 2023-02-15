import { useSelector, useDispatch } from 'react-redux';

function PaymentPopup() {
  let payment_active = useSelector(state => state.payment_active);
  const dispatch = useDispatch();
  const handleHidePopup = () => {
    dispatch({ type: 'INACTIVE_PAYMENT_POPUP' });
  }
  console.log(payment_active)
  return (
    <div>
      {true && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            ></span>
            <div
              className=" border-8 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-col mt-5 border border-gray-300">
                <div className="flex items-center w-500  bg-white p-2  ">
                  <img src=".png" alt="Img 13" className="h-17 w-12" />
                  <span className="inline-block align-middle text-md font-semibold mb-2 pl-8">Usa tus tarjetas</span>
                </div>
              </div>
              <div className="flex flex-col mt-5 border border-gray-300">
                <div className="flex items-center w-500  bg-white p-2  ">
                  <img src=".png" alt="Img 13" className="h-17 w-12" />
                  <span className="inline-block align-middle text-md font-semibold mb-2 pl-8">Usa tu cuenta nequi</span>
                </div>
              </div>
              <div className="flex flex-col mt-5 border border-gray-300">
                <div className="flex items-center w-500  bg-white p-2  ">
                  <img src=".png" alt="Img 13" className="h-17 w-12" />
                  <span className="inline-block align-middle text-md font-semibold mb-2 pl-8">Usa tu cuenta de ahorro o corriente</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPopup;