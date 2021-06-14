import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoaderComp from "../components/LoaderComp";
import MessageComp from "../components/MessageComp";
import { detailsUser, updateUser } from "../redux/actions/userActions";
import { actionTypes_U } from "../redux/constants/userConstants";
import "./admin_dasboard.css";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
const UserEditList = (props) => {
  const userId = props.match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userInfo = useSelector((state) => state.userInfo);
  const { loading, err, user } = userInfo;
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    err: errUpdate,
    success: successUpdate,
  } = userUpdate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: actionTypes_U.USER_UPDATE_RESET });
      props.history.push("/dashboard/users");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email }));
	
  };

  return (
    <>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />

        <div id="layoutSidenav_content">
          <div
            style={{
              backgroundColor: "#222831",
              borderStyle: "inset",
              borderColor: "#ffd369",
              margin: "10% auto",
              marginTop: "20px",
              padding: " 25px 0",
              textAlign: "center",
              width: "450px",
			  height:"470px",
              fontFamily: "Source Sans Pro, sans-serif",
              Color: "#ffd369",
              fontWeight: " 300",
	
            }}
          >
            <main>
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "200",
                  color: "#ffd369",
                }}
              >
                Update User {name}
              </h1>
              {loadingUpdate && <LoaderComp></LoaderComp>}
              {errUpdate && (
                <MessageComp variant="danger">{errUpdate}</MessageComp>
              )}
              {loading ? (
                <LoaderComp />
              ) : err ? (
                <MessageComp variant="danger">{err}</MessageComp>
              ) : (
                <form onSubmit={updateSubmitHandler}>
                  <fieldset>
                    <div className="control-group">
                      <label style={{color: "#EEEEEE"}} className="control-label" htmlFor="name">
                        Username
                      </label>
                      <div className="controls">
                        <input
                          style={{
                            border: " 1px solid #EEEEEE",
                            backgroundColor: "#393E46",
                            width: "250px",
                            borderRadius: "3px",
                            fontFamily: "Source Sans Pro, sans-serif",
                            padding: "10px 15px",
                            margin: "0 auto 10px auto",
                            display: "block",
                            textAlign: "center",
                            fontSize: "18px",
                            color: "white",
                            fontWeight: "300",
                          }}
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter User name"
                          value={name}
                          className="input-xlarge"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        <p style={{color: "#EEEEEE"}}  className="help-block">
                          Username can contain any letters or numbers, without
                          spaces
                        </p>
                      </div>
                    </div>

                    <div className="control-group">
                      <label style={{color: "#EEEEEE"}} className="control-label" htmlFor="email">
                        Email
                      </label>

                      <div className="controls">
                        <input
                          style={{
                            border: " 1px solid #EEEEEE",
                            backgroundColor: "#393E46",
                            width: "250px",
                            borderRadius: "3px",
                            fontFamily: "Source Sans Pro, sans-serif",
                            padding: "10px 15px",
                            margin: "0 auto 10px auto",
                            display: "block",
                            textAlign: "center",
                            fontSize: "18px",
                            color: "white",
                            fontWeight: "300",
                          }}
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter User email"
                          className="input-xlarge"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        <p style={{color: "#EEEEEE"}} className="help-block">Please provide your E-mail</p>
                      </div>
                    </div>
                    <div className="control-group">
                      {/* Button */}
                      <div className="controls">
                        <button
                          style={{
                            appearance: "none",
                            outline: " 0",
                            backgroundColor: "#ffd369",
                            border: "0",
                            padding: "10px 15px",
                            color: "#22831",
                            borderRadius: "3px",
                            width: "250px",
                            fontSize: "18px",
                          }}
                         
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              )}
            </main>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default UserEditList;
