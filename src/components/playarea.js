
const cardSamples = (cards) => {
    console.log(cards)
    cards.forEach(card => {
      console.log(card);
      return <Card text={card.text} emoji={card.emoji} />
    })
    return cards
  }


    let recipe = {
      “name” : $(’#title’).val(),
      “ingredients” : $(’#ingredients’).val()
      };