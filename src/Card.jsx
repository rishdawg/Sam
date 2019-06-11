import React, { Component } from 'react';

export const Card = (props) => {
  return(
    <div>
      <div>{props.style}</div>
      <div>{props.funfact} </div>
    </div>
  )
};