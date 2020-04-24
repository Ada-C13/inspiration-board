
const cardSamples = (cards) => {
    console.log(cards)
    cards.forEach(card => {
      console.log(card);
      return <Card text={card.text} emoji={card.emoji} />
    })
    return cards
  }


  console.log(emoji.getUnicode("heart_eyes"));
  // 😍

  axios.get('url')
  .then((response) => {
    // Load in the data
    setResult(response.data) })
  })
  .catch((error) => {
    // Show an error
    setError('There was an error with this request!');
  })