import React, { useEffect, useState, createContext, useContext } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom'
import Spinner from '../../../Component/Spinner/Spinner';
import { AuthContext } from '../../../Provider/AuthContextProvider';

const ManageUsers = ({ setTitle }) => {
  const { registerUser, user, logOut, loginUser, isLogged, setIsLogged, toastPush } = useContext(AuthContext);



  const [loading, setLoading] = useState(true)
  const [renderData, setRenderData] = useState(null);
  const [UsersData, setUsersData] = useState(null)
  const [currentID, setCurrentID] = useState(null)
  const [feedbackdetails, setFeedbackdetails] = useState(null)
  const [feedbackclassid, setfeedbackclassid] = useState(null)
  const [progresssending, setprogresssending] = useState(false)

  useEffect(() => {
    if (loading && user) {
      setTitle("My Classes")
      axios.get(`/users`)
        .then(response => {
          let data = response.data
          setUsersData(data)
          setRenderData(data)
          setLoading(false)

        })
    }
  }, []);

  const deleteButtonHandler = (e) => {
    axios.delete("/delete/" + currentID)
      .then(response => {
        let data = renderData.filter(e => e._id != currentID)
        setCurrentID(null)
        setRenderData(data)
        toastPush("Deleted Successfully")
      })
      .catch(err => {
        console.log(err)
      })
  }


  const makeAdminHandler = (e) => {
    const updatedData = renderData.map(obj => {
      if (obj._id === e) {
        return { ...obj, role: "admin" };
      }
      return obj;
    });
    console.log(updatedData)
    setRenderData(updatedData)

    axios.patch(`/users/admin/${e}`).then(response => {
      console.log(response.data)
      toastPush("Role Updated")
    })
  }
  const makeInstructorHandler = (e) => {
    const updatedData = renderData.map(obj => {
      if (obj._id === e) {
        return { ...obj, role: "instructor" };
      }
      return obj;
    });
    console.log(updatedData)
    setRenderData(updatedData)
    axios.patch(`/users/instructor/${e}`).then(response => {
      console.log(response.data)
      toastPush("Role Updated")
    })
  }


  return (
    <>

      <div>

<h1 className='text-6xl font-semibold text-gray-600 text-center my-10'>Manage users</h1>


        <section className='mt-12 '>

        </section>

        <>





          {user ?
            <>
              <div></div>

              <section className='flex flex-col items-center justify-center mt-8 space-y-8'>
                <div className="overflow-x-auto  ">


                  <table className="table w-full">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Admin</th>
                        <th>Instructor</th>
                      </tr>
                    </thead>
                    <tbody>



                      {loading ? <>
                        <Spinner />
                      </> : <>
                        {renderData.map(e => {

                          return <>
                            <tr>



                              <td>{e.name}</td>
                              <td>
                                {e.email}
                              </td>

                              <td>
                                {e.role}
                              </td>



                              <td>
                                <button onClick={() => makeAdminHandler(e._id)} className="btn  btn-xs btn-success" disabled={e.role == 'admin' ? true : false}>Make Admin</button>

                              </td>
                              <td>
                                <button onClick={() => makeInstructorHandler(e._id)} className="btn  btn-xs  bg-blue-600 border-none" disabled={e.role == 'instructor' ? true : false} >Make Instructor</button>

                              </td>
                            </tr>
                          </>
                        })}
                      </>}






                    </tbody>
                    {/* foot */}
                    <tfoot>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Admin</th>
                        <th>Instructor</th>
                      </tr>
                    </tfoot>

                  </table>
                </div>

              </section>
            </> : <>

              <div className='flex justify-center mt-12'>
                <h1 className='text-4xl font-semibold text-center'>No Content Available. User needs to Sign in</h1>
              </div>
            </>



          }
        </>
      </div>
    </>
  );
}
export default ManageUsers;
