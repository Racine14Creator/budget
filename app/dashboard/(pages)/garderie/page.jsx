import RegistrationKid from "@/components/RegistrationFormKid";
import React from "react";

export default function PaymentPage() {
  return (
    <>
      <div className='w-full flex flex-col md:flex-col md:justify-between items-start md:max-w-[1200px] py-5 mx-auto'>
        <div className='flex w-full'>
          <h3 className='font-bold text-lg md:text-2xl text-blue-500'>
            Garderie
          </h3>
        </div>
      </div>
      {/* Flex of two col */}
      <div className='max-w-[1200px] mx-auto flex flex-col gap-5 md:flex-row w-full md:justify-between md:items-start'>
        <div className='flex flex-col gap-y-5 w-full bg-white overflow-hidden p-5 rounded-lg border'>
          <h2 className='text-2xl text-black font-semibold md:font-bold'>
            Enregistrement
          </h2>

          <RegistrationKid />
        </div>
        <div className='flex flex-col gap-y-5 p-5 w-full rounded-lg border'>
          <h3>Data</h3>
        </div>
      </div>
    </>
  );
}
