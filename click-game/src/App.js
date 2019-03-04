import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MemoryCard from "./components/MemoryCard";
import cards from "./cards.json";

const randomizedCards = cardSet => {
  for (let i = 0; i < cardSet.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (cardset.length - i));

    const temp = cardSet[j];
    cardSet[j] = cardSet[i];
    cardset[i] = temp;
  }
  console.log(cardset);
  return cardSet;
};

let pickedCards = [];

class App extends React.Component {
  state = {
    score: 0,
    highScore: 0,
    navbarMessage: "Click a Person to Begin",
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
        this.setState({ highScore: this.state.Score + 1 });
      }
      this.setState({
        randomCards: randomizedCards(cards)
      });
    } else {
      this.setState({
        sore: 0,
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
