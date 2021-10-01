import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        streamy
      </Link>
      <div className="right menu">
        <Link className="item" to="/">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
