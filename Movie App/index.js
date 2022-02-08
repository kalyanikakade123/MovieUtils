const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY;

const main = document.getElementById("main");
const result = document.querySelector(".result");
const form = document.getElementById("form");
const search = document.getElementById("search");
let success = document.querySelector(".success");
let successHtml = "";
let resultHtml = "";

form.addEventListener("keyup", (e) => {
  e.preventDefault();
  let searchValue = e.target.value.toLowerCase();
  fetch(searchURL + "&query=" + searchValue)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      resultHtml = "";
      data.results.forEach((e) => {
        resultHtml += `<div class="movie movieSearch">
                                <img src="${IMG_URL}${e.backdrop_path}" alt="Image">
                                <div class="movie-info">
                                    <h3>${e.title}</h3>
                                    <span class="green">${e.vote_average}</span>
                                </div>
                                <div class="overview">${e.overview}</div>
                          </div>`;
      });
    });
  if (searchValue) {
    result.innerHTML = `<div class="success">
                                <h4>Search results are shown below!</h4>
                            </div> ${resultHtml}`;
  } else {
    result.innerHTML = "";
  }
});

let rootHtml = ``;
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    data.results.map((e) => {
      rootHtml += `<div class="movie">
                        <img src="${IMG_URL}${e.backdrop_path}" alt="Image">
                        <div class="movie-info">
                            <h3>${e.title}</h3>
                            <span class="green">${e.vote_average}</span>
                        </div>
                        <div class="overview">${e.overview}</div>
                    </div>`;
    });
    main.innerHTML = `<div class="success">
                        <h4>Popular movies are shown below!</h4>
                      </div> ${rootHtml}`;
  })
  .catch((err) => console.log(err));
