import React from "react";
const RenderAuthButton = ({
  isSignedIn,
  InOut: { singOut, singIn },
  auth2,
  setHandleErr,
  user,
}) => {
  if (isSignedIn === null) return <div>Loading...</div>;
  else if (isSignedIn)
    return (
      <button
        className="google button ui red"
        onClick={() => {
          auth2.signOut().then(() => {
            singOut();
            setHandleErr("");
          });
        }}
      >
        <i className="google icon" />
        Sing Out
      </button>
    );
  else
    return (
      <button
        className="google button ui red"
        onClick={() => {
          auth2
            .signIn()
            .then(() => {
              singIn(user.id);
              setHandleErr("");
            })
            .catch(() => {
              setHandleErr("Dont close the popOut and sing up fucker");
            });
        }}
      >
        <i className="google icon" />
        Sing In
      </button>
    );
};
export default RenderAuthButton;
