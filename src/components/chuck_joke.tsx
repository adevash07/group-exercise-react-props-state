import Joke from "../joke";

interface ChuckJokeProps {
  jokes: Joke[];
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ jokes }) => {
  return (
    <>
      <div className='joke'>
        {jokes.map((joke) => {
          return <p key={joke.id}>{joke.joke}</p>;
        })}
      </div>
    </>
  );
};

export default ChuckJoke;
