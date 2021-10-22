import './App.css';
import {useState} from "react";

function App() {  
  const movies=[
    {
      name:"Inception",
      rating:"IMDB : ⭐8.8",
      pic:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      plot:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    },
    {
      name:"The Matrix",
      rating:"IMDB : ⭐8.7",
      pic:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX140_CR0,0,140,209_AL_.jpg",
      plot:"When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    },
    {
      name:"Avengers: Endgame",
      rating:"IMDB : ⭐8.4",
      pic:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      plot:"After the devastating events of Avengers: Infinity War (2018), With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    },
    {
      name:"The Dark Knight",
      rating:"IMDB : ⭐9.0",
      pic:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
    {
      name:"The Wolverine",
      rating:"IMDB : ⭐6.7",
      pic:"https://m.media-amazon.com/images/M/MV5BNzg1MDQxMTQ2OF5BMl5BanBnXkFtZTcwMTk3MjAzOQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      plot:"Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants.",
    },
    {
      name:"Avatar",
      rating:"IMDB : ⭐7.8",
      pic:"https://duckduckgo.com/i/57e6a140.jpg",
      plot:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    },
    {
      name:"Fight Club",
      rating:"IMDB : ⭐8.7",
      pic:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX140_CR0,0,140,209_AL_.jpg",
      plot:"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    },
    {
      name:"Interstellar",
      rating:"IMDB : ⭐8.6",
      pic:"https://duckduckgo.com/i/2bda01e5.jpg",
      plot:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
  ];
  return (
    <div className="App">
      {movies.map((movie)=>(
      <Display name={movie.name} rating={movie.rating} pic={movie.pic} plot={movie.plot}/>
  ))}
    </div>
  );
}



function Display({name,rating,pic,plot}){
  // const name="Cool Guy";
  return(
    <div className="content">
    <img className="image" height="200px" src={pic} alt={name}/>
    <h3 className="name">{name} </h3>
    <h5 className="rating">{rating}</h5>
    <p className="plot">{plot}</p>
    <Counter/>
    </div>
   
  )
}


function Counter(){
  const[like,setLike]=useState(0);
  const[dislike,setDislike]=useState(0);
  return (
    <div>
      <button onClick={()=>setLike(like+1)}>👍{like}</button> 
      <button onClick={()=>setDislike(dislike+1)}>👎 {dislike}</button><br></br>
    </div>
  )
}



export default App;



