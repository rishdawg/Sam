import React, { Component } from 'react';
import {Card} from './Card';

export const Container = (props) => {
  return(
    <div>
      {props.dancing.map(elem =>
      <Card style={elem.style} funfact={elem.funfact}/>)
      }
    </div>
  )
}

