import React from "react";

export function Quote({ children }) {
  return (
    <blockquote style={{
      backgroundColor: 'yellow',
      borderColor:"black",
      borderLeftWidth:"2px",
      borderRadius:"0.5rem",
      borderRightWidth:"2px",
      display:"block",
      marginBottom:"0.75rem",
      marginTop:"0",
      paddingBottom:"0.5rem",
      paddingLeft:"1rem",
      paddingRight:"1rem",
      paddingTop:"0.5rem",
      position:"relative"
    }}>{children}</blockquote>
  )
}

export function Highlight({ children }) {
  return (
    <span style={{ backgroundColor: 'yellow' }}>{children}</span>
  )
}
