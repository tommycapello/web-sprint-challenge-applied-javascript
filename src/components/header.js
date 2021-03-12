const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement('div');
  header.classList.add("header");

  const dateD = document.createElement('span');
  dateD.classList.add("date");
  dateD.textContent = date;
  header.appendChild(dateD);

  const titleD = document.createElement('h1');
  titleD.textContent = title;
  header.appendChild(titleD);

  const tempD = document.createElement('span');
  tempD.classList.add("temp");
  tempD.textContent = temp;
  header.appendChild(tempD);

  return header;


}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const cssSelector = document.querySelector(selector);
  cssSelector.appendChild(Header('Lambda School', "March 12, 2021", "64"));
  return cssSelector;

}
export { Header, headerAppender }
