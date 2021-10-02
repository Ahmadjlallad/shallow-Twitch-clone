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
        <Link className="item" to="/stream/create">
          create
        </Link>
        <Link className="item" to="/stream/show">
          stream show
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
