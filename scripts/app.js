const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const movieReleaseDate = document.querySelector(".userInputReleaseDate");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");
const movieReleaseDateToDisplay = document.querySelector(".MovieReleaseDate");


let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let dateInStorage = localStorage.getItem('releaseDate');


if(titleInStorage && imageUrlInStorage && dateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(208, 148, 148, 0.308),rgba(155, 88, 88, 0.944)),url('${imageUrlInStorage}')`;
    movieReleaseDateToDisplay.textContent = dateInStorage;
}



btn.addEventListener('click' , () => {
let movieTitleInput = movieTitle.value;
let posterUrlInput = moviePosterUrl.value;
let movieReleaseDateInput = movieReleaseDate.value;


localStorage.setItem("title", movieTitleInput);
localStorage.setItem("imageUrl", posterUrlInput);
localStorage.setItem('releaseDate',movieReleaseDateInput);


movieTitleToDisplay.textContent = movieTitleInput;
container.style.backgroundImage = `linear-gradient(rgba(208, 148, 148, 0.308),rgba(155, 88, 88, 0.944)),
url("${posterUrlInput}")`;
movieReleaseDateToDisplay.textContent = movieReleaseDateInput;
movieTitle.value = '';
moviePosterUrl.value = '';
movieReleaseDate.value = '';


});