import React, { useEffect, useState } from 'react'; 
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';
import axios from 'axios';
import BlogsCard from '../../Component/BlogsCard/BlogsCard';
// import BlogCard from '../../Component/BlogCard/BlogCard';
 
 

 
const ref = React.createRef();
 
      
const BlogPage = ({setTitle}) => {
  
 
 
    const [loading, setLoading] = useState(true)
    const [blogData, setBlogData] = useState();
   console.log(blogData);
    
    useEffect(() => {
       if(loading){
    axios.get("/blog")
    .then(response=>{
      setBlogData(response.data)
      console.log('response', response.data);
      setLoading(false)
    }).catch(err => console.log(err))

   }
     
      
    
    }, []);
    return (
        <>
     

            <div ref={ref} className="max-w-screen-xl mx-auto px-5 sm:px-10 md:px-16 relative  mt-20 ">
    

 {loading?<>
  <Spinner/>
 </>: <>
<div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
 {blogData.map(e=><BlogsCard data={e}/>  )}
 </div>

 </>}
   
 {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => 
        
        <div className='flex justify-center items-center'>

<button className='px-6 py-3 rounded-lg bg-green-700 text-white font-semibold' onClick={toPdf}>Generate Pdf</button>
        </div>

       
        
        
        }
      </Pdf> */}
  </div>
</>

       
    );
}

export default BlogPage;
