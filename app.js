const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if(itemNumber - (6 + clickCounter) + (7 - ratio) >= 0)
        {
        movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
        }
        else
        {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(movieLists[i].querySelectorAll("img").length);
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.menu-list-item,.profile-container i,.profile-container"
);

ball.addEventListener("click", () => {
    items.forEach(item => {
        item.classList.toggle("active");
    });
    document.querySelector('.profile-container i').classList.toggle('text-color-change');
    document.querySelector('.profile-container .dropdown').classList.toggle('text-color-change');
    ball.classList.toggle("active");
});

function addToFavorites(favorites, newMovie) {
    // Check if the movie image already exists in the favorites list
    const existingMovie = favorites.some(movie => movie.image === newMovie.image);
    
    if (!existingMovie) {
      favorites.push(newMovie);
      return true; // 新しい映画が追加されたことを示す
    }
    return false; // 既に存在する映画のため追加されていないことを示す
  }
  
  document.querySelectorAll('.movie-list-item-button').forEach((button) => {
      button.addEventListener('click', () => {
          const movieInfo = {
            title: button.parentElement.querySelector('.movie-list-item-title')?.innerText.trim(),
            description: button.parentElement.querySelector('.movie-list-item-desc')?.innerText.trim(),
            image: button.parentElement.querySelector('.movie-list-item-img')?.src,
          };
    
          let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          
          // Add movie to favorites if it's not already there and log the updated favorites list
          if (addToFavorites(favorites, movieInfo)) {
              localStorage.setItem('favorites', JSON.stringify(favorites));
              console.log('Favorites updated:', favorites);
          } else {
              console.log('Movie is already in favorites.');
          }
      });
  });

 
   