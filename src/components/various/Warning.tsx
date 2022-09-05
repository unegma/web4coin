import Typography from "@mui/material/Typography";
import React from "react";
const CHAIN_NAME = process.env.REACT_APP_CHAIN_NAME; // Mumbai (Polygon Testnet) Chain ID

export default function Warning() {
  return (
    <Typography color="red">
      Must be connected to <a href={`https://www.youtube.com/watch?v=6h_liI6atEk`} target="_blank"><b className=''>{CHAIN_NAME}</b>.</a><br/>
      <span className="red"><b>Warning: Proceeding may result in the loss of transaction fees.</b></span>
    </Typography>
  )
}
