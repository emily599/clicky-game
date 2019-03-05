import React from "react";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import MemoryCard from "./components/Card";
import cards from "./cards.json";

const randomizedCards = cards => {
  for (let i = 0; i < cards.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (cards.length - i));

    const temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  }
  console.log(cards);
  return cards;
};

let pickedCards = [];

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    navbarMessage: "Defeat enemies by clicking on them only once!",
    cards: cards,
    randomCards: cards
  };

  randomCards = randomizedCards(cards);

  pickCard = id => {
    console.log(id);
    if (pickedCards.indexOf(id) === -1) {
      pickedCards.push(id);
      this.setState({
        score: this.state.score + 1,
        navbarMessage: "You guessed correctly!"
      });
      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score + 1 });
      }
      this.setState({
        randomCards: randomizedCards(cards)
      });
    } else {
      this.setState({
        score: 0,
        randomCards: randomizedCards(cards),
        navbarMessage: "You guessed incorrectly!"
      });
      pickedCards = [];
    }
    console.log(pickedCards);
  };

  render() {
    return (
      <div>
        <Navbar
          navbarMessage={this.state.navbarMessage}
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Header />
        {this.state.cards.map(card => (
          <MemoryCard
            image={card.image}
            id={card.id}
            key={card.id}
            name={card.id}
            pickCard={this.pickCard}
          />
        ))}
      </div>
    );
  }
}

export default App;
