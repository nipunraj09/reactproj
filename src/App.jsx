import MovieCard from "./components/MovieCard.jsx"
import './App.css';

function App() {
  return (
    <>
        <MovieCard movie={{title:"Tim's Film" ,release_date: "2024"}}/>
        <MovieCard movie={{title:"Joye's Film" ,release_date: "2020"}}/>
    </>
  
  );
}

export default App;
