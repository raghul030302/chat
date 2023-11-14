import React from 'react'

function Login({logNewUser,handleChange,newUser}) {
  return (
    <div className="card w-100 text-center border-white ">
                    <div className="row">
                        <div className="col-12">
                            <h5>Enter user name</h5>
                        </div>
                        <div className="d-flex justify-content-center py-1">
                        <div className="col-4">
                            <input type="text" name="uname" value={newUser} id="" className='mb-3 form-control' placeholder="user name" autoComplete='off' required
                            onChange={(e)=> handleChange(e)} 
                            onKeyPress={(e)=>(e.code === "Enter"? logNewUser() : null)} />
                            <button className='btn btn-success ' onClick={()=>logNewUser()}>join</button>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Login