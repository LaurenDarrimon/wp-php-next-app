import fs from 'fs';

import path from 'path';


//create filepath to data folder/subdirectory

const dataDirectory = path.join( process.cwd(), "data")
//console.log(dataDirectory);

export default function handler(req, res) {

const filepath = path.join( dataDirectory, "people.json" );

//retrieve the data
const jsonPeopleData = fs.readFileSync( filepath, "utf8" );

//parse data into JS object 
const peopleObject = JSON.parse(jsonPeopleData)

//build functino to alphabetize the names
peopleObject.sort(
  function(a,b) {
    return a.name.localeCompare(b.name);

  }
)

  res.status(200).json(peopleObject)

}



// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
