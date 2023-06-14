import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import PopularClassesCard from '../../Component/PopularClassesCard/PopularClassesCard';
import ClassesCard from '../../Component/ClassesCard/ClassesCard';
import PopularClassesComponent from '../../Component/HomePageComponents/PopularClassesComponent/PopularClassesComponent';
import PopularInstructor from '../../Component/PopularInstructor/PopularInstructor';
import Contact from '../../Component/Contact/Contact';
import CourseSection from '../../Component/HomePageComponents/CourseSelection';






const HomePage = ({ setTitle }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      setTitle("Homepage")
      setLoading(false)
    }


  }, []);



  return (


    <>

      <PopularClassesComponent />
      <PopularInstructor />
      <div className="container max-w-7xl mx-auto px-4 mt-12">
        <div className="flex flex-wrap">

        </div> </div>
      <CourseSection></CourseSection>



      <div className='grid grid-cols-3 py-10 md:py-20 gap-6'>


      </div>

      <Contact></Contact>
    </>



  );
}

export default HomePage;
