import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const BlogsCard = ({data}) => {
    console.log(data);
    return (
        <div className={` w-[80%] image-container transition-all ease-in-out duration-300 mx-auto bg-transparent `}>
      <div className="relative h-72 w-full overflow-hidden transition-all ease-in-out duration-300">
        <img src={data.photoURL} alt="" className="h-full  w-full object-cover object-center transition-all ease-in-out duration-300" />
        <div className='links flex justify-center gap-5  px-20 py-1 bg-opacity-40 absolute -bottom-10 left-1/2 transform -translate-x-1/2 transition-all ease-in-out duration-300'>
          <AiFillFacebook className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
          <AiFillInstagram className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
          <AiFillTwitterCircle className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
          <AiFillLinkedin className='hover:text-[#58e2c0] text-3xl text-white hover:cursor-pointer' />
        </div>


      </div>

      <p className={`text-xl  md:text-2xl font-semibold pt-3 text-gray-800 text-center font-semibold capitalize`}> {data.title} </p>
      <p className="mt-1  text-cyan-500 text-center"><span></span> {data.email}</p>






    </div>
    );
};

export default BlogsCard;