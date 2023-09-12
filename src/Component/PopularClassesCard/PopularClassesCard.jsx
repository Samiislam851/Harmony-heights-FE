import React from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { useContext } from 'react';

const PopularClassesCard = ({data , disablebtn}) => {
  const {dark} = useContext(AuthContext);
  return (
      <>
     <div className={` pb-5  ${dark ? ' ' : ' bg-white border-gray-200 rounded hover:shadow-2xl transition-all duration-300'}`}>
        <div className="relative">
          <div className="relative  h-72 w-full overflow-hidden rounded ">
            <div className='w-[100%] h-[100%] bg-black absolute opacity-30 blur '></div>
            
            <img src={data.image} alt="" className="h-full w-full object-cover object-center "/>
           
          </div>
          <div className="relative my-2 mx-4 me-5">
            <p className='text-lg font-semibold text-gray-500'>Seats left  {data.availableseat}</p>
            <p className=" font-medium text-gray-500 border-b border-[#05a9804c] pb-3 mb-2"> Enrolled : {data.enrolledstudents}  </p>
            <p className='text-gray-500 inline float-right'>Price : <span className='text-xl text-gray-600'>${data.price} </span>   </p>
            <p className="mt-1 text-base font-semibold text-gray-500">Instructor :  {data.instructorname} </p>
          </div>
          <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-start overflow-hidden rounded-lg p-4">
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
            <p className="relative text-3xl font-semibold mb-2 text-gray-400 text-white">{data.classname}</p>
          </div>
        </div>
        
      </div>        
      </>
  );
}

export default PopularClassesCard;
