
import './App.css';
import MediumSquareCard from './components/Medium_square_card';
import ShowJoke from './components/Show_joke';
import ShowJokeAxios from './components/Show_joke_axios';
import SmallHorizontalCard from './components/Small_horizontal_card';

function App() {

  return (
    <>
    <div className="App">

      <header className="App-header">

        <MediumSquareCard url="https://picsum.photos/400/400" preTitle="TRAVEL" titel="Surfing in Maldives" paragraf="It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."></MediumSquareCard>

        <SmallHorizontalCard url="https://picsum.photos/300/300" titel="NATURE" paragraf="A sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside."></SmallHorizontalCard>

        <ShowJoke></ShowJoke>

        <ShowJokeAxios></ShowJokeAxios>

      </header>

    </div>
    </>
  );

}

export default App;
