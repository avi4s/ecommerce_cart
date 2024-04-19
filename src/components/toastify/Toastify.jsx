import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Toastify = () => {
  const [toastClose, setToastClose] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastClose(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const handleToastify = () => {
    setToastClose(false);
  };
  return (
    <>
      {toastClose && (
        <div class="fixed  bottom-4 flex items-center w-full max-w-xs p-4 mb-4 rounded-lg bg-green-700">
          <div class="inline-flex items-center justify-center w-8 h-8 text-white rounded-lg">
            <FaRegCheckCircle />
          </div>
          <div class="ms-3 text-white">Item added successfully.</div>
          <button type="button" class="ms-auto text-white">
            <RxCross2 onClick={handleToastify} />
          </button>
        </div>
      )}
    </>
  );
};

export default Toastify;
