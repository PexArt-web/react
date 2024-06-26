import Jokes from "./component/Joke";
import jokesData from "./component/jokesData";
console.log(jokesData);

function App() {
  const jokeElements = jokesData.map(jokes => {
    return <Jokes setup = {jokes.setup} punchline = {jokes.punchline}/>
  } )
  return (
    <div className="App--container">
       {jokeElements}
    </div>
  );
}

  


export default App;
