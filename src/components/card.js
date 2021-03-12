import axios from 'axios'

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const card = document.createElement('div') // <div class="card">
  card.classList.add('card')

  const headline = document.createElement('div') // <div class="headline">{ headline }</div>
  headline.classList.add('headline')
  headline.textContent = article.headline
  card.appendChild(headline)

  const author = document.createElement('div') //<div class="author">
  author.classList.add('author')
  card.appendChild(author)

  const imgContainer = document.createElement('div') //<div class="img-container">
  imgContainer.classList.add('img-container')
  author.appendChild(imgContainer)

  const authorPhoto = document.createElement('img') //<img src={ authorPhoto }>
  authorPhoto.src = article.authorPhoto
  imgContainer.appendChild(authorPhoto)

  const authorName = document.createElement('span') //<span>By { authorName }</span>
  authorName.textContent = `By ${article.authorName}`
  author.appendChild(authorName)

  card.addEventListener("click", () =>
  {
    console.log(article.headline);
  })

  return card
}

const cardAppender = (selector) => {
  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    console.log(res.data.articles)

    const bs = res.data.articles.bootstrap;
    const js = res.data.articles.javascript;
    const jq = res.data.articles.jquery;
    const node = res.data.articles.node;
    const tech = res.data.articles.technology;


    const newSelector = document.querySelector(selector);

      bs.forEach((item) => {
        const newCard = Card(item);
        newSelector.append(newCard);
      })

      js.forEach((item) => {
        const newCard = Card(item);
        newSelector.append(newCard);
      })

      jq.forEach((item) => {
        const newCard = Card(item);
        newSelector.append(newCard);
      })

    node.forEach((item) => {
      const newCard = Card(item);
      newSelector.append(newCard);
    })

    tech.forEach((item) => {
      const newCard = Card(item);
      newSelector.append(newCard);
})

  })
  .catch(err => console.log(err));
}
  export { Card, cardAppender }