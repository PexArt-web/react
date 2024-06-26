const Jokes = (props) => {
  return (
    <div className="jokes">
     {props.setup && <h3 className="Jokes--setup">Setup: {props.setup}</h3>} 
    {props.punchline &&  <p className="Jokes--punchline">Punchline: {props.punchline}</p>}
      <hr />
    </div>
  );
};

export default Jokes;
