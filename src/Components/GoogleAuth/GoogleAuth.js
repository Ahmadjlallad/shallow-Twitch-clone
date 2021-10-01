import React, { useEffect, useState, useRef } from "react";
import RenderAuthButton from "./GoogleAuthFuncHelper";
import { singIn, singOut } from "./../../actions";
import { connect } from "react-redux";
function GoogleAuth(props) {
  let auth = useRef();
  const [user, setUser] = useState({});
  const [handleErr, setHandleErr] = useState("");
  const { singOut, singIn } = props;
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      // * return promise
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_client_id,
          scope: "email",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          if (auth.current.isSignedIn.get()) {
            const BasicProfile = auth.current?.currentUser
              ?.get()
              ?.getBasicProfile();
            setUser({
              id: BasicProfile.getId(),
              fullName: BasicProfile.getName(),
              firstName: BasicProfile.getGivenName(),
              lastName: BasicProfile.getFamilyName(),
              imageUrl: BasicProfile.getImageUrl(),
              email: BasicProfile.getEmail(),
            });
            singIn(BasicProfile.getId());
          } else {
            singOut();
          }
        });
    });
    console.log("useEffect");
  }, [singOut, singIn]);
  return (
    <div>
      <RenderAuthButton
        isSignedIn={props.isSignedIn}
        InOut={{ singIn: props.singIn, singOut: props.singOut }}
        auth2={auth.current}
        setHandleErr={setHandleErr}
        user={user}
      />
      {handleErr}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, {
  singIn,
  singOut,
})(GoogleAuth);
