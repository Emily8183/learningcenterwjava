import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import GithubData from "./GithubData";

function Comparison() {
  return (
    <>
      <h1>{GithubData}</h1>
    </>
  );
}

export default Comparison;
