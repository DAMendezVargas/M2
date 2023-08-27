import Card from './Card';


export default function Cards(props) {
   const key = props.id;
   const personajes = props.characters;
   return <div>{personajes.map =((personaje)=>{<Card>{personaje}</Card>})}
   </div>;
}
