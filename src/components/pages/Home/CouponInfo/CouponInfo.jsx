import { FaStar } from 'react-icons/fa';

const CouponInfo = () => {
  return (
    <div className="flex items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-gray-800 my-10">
      <div className="w-11/12 md:w-1/2 p-6 bg-white rounded-lg text-gray-800">
        <h2 className="text-4xl font-extrabold mb-4 text-center text-yellow-500">🎉 Exclusive Offer!</h2>
        <p className="text-lg mb-4 text-center">
          Discover the joy of savings! Use code{' '}
          <span className="text-yellow-500 font-semibold">SAVE10</span> during checkout to enjoy a{' '}
          <span className="underline">10% discount</span> on your order. Act fast, this offer won't last forever!
        </p>
        <div className="flex justify-center space-x-4">
          <FaStar className="text-yellow-500 text-2xl" />
          <FaStar className="text-yellow-500 text-2xl" />
          <FaStar className="text-yellow-500 text-2xl" />
          <FaStar className="text-yellow-500 text-2xl" />
          <FaStar className="text-yellow-500 text-2xl" />
        </div>
        <p className="text-sm mt-2 text-center opacity-80">
          * Limited time offer. Terms and conditions apply.
        </p>
      </div>
    </div>
  );
};

export default CouponInfo;
