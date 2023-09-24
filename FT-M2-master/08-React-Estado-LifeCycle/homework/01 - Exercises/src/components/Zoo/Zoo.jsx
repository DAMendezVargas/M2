import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: '',
  });
  //Funciones
  const handleInputchange = (event) => {
    setZoo({
      ...zoo,
      zooName: event.target.value
    })
  }
  React.useEffect(()=>{
    //fetch obligatorio
  fetch('http://localhost:3001/zoo')
  .then((res) => res.json())
  .then((data) =>
     setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
     })
  )
  .catch((error) => console.log(error));

  }, [])

  const handleSpecies = (evento) => {
    setZoo({
      ...zoo,
      animals: 
    })
  }
  const handleAllSpecies = () => {}
  
  return (
    <div>
      <label for="crete">Zoo Name: </label>
      <input 
        onChange={handleInputchange} 
        type="text" 
        value={zoo.zooName} 
        id="crete" />
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleAllSpecies={handleAllSpecies} handleSpecies={handleSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>
  );
}
