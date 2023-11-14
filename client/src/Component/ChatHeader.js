import React from "react";

const ChatHeader = ({ user,msg,setmsg}) => {
  return (
    <div className="chatSection">
      <div className="card border-info w-100 ">
        <div className="row height">
          <div className="col-12 col-lg-12 col-xl-12 ">
            <div className=" align-items-start py-2 px-4 w-100 border-bottom border-info  d-lg-block sticky-top bg-white">
              <div className="d-flex align-content-center py-1">
                <strong>Logged in as {user}</strong>
              </div>
            </div>
            {/* inputfeild */}
            <div className="align-items-end  py-3 px-4  d-lg-block fixed-bottom container mb-2 ">
              <div className="input-group flex-fill">
                <input
                  type="text"
                  name="msg"
                  value={msg}
                  onChange={({currentTarget:input})=> setmsg(input.value)} 
                  className=" form-control"
                  placeholder="Type message here....."

                />
                <button className="btn btn-success ">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
