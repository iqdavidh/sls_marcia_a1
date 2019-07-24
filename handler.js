'use strict';

module.exports.hello = async event => {

  // let nombre='World';
  //
  // let parameters= event.pathParameters;
  // if(parameters &&  parameters.nombre){
  //   nombre=parameters.nombre;
  // }

  let nombre='World';

  let queryStringParameters=event.queryStringParameters;

  if(queryStringParameters && queryStringParameters.nombre){
    nombre=queryStringParameters.nombre;
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello ${nombre}`
      }
    ),
  };

};
