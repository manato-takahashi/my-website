function clearFavorites() {
    localStorage.removeItem('favorites');
    location.reload();
   }
   

window.addEventListener('load', () => {
    // FAVORITESページのHTML要素を選択
    const favoriteContainer = document.querySelector('.movie-list');
   
    // お気に入りリストを取得
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
   
    // 各映画の情報を表示
    favorites.forEach((movie) => {
      const movieElement = document.createElement('div');
      movieElement.className = 'movie-list-item';
      movieElement.innerHTML = `
        <img class="movie-list-item-img" src="${movie.image}" alt="${movie.title}">
        <span class="movie-list-item-title">${movie.title}</span>
        <p class="movie-list-item-desc">${movie.description}</p>
        <button class="movie-list-item-button">WATCH</button>
      `;
      favoriteContainer.appendChild(movieElement);
    });
   });

   window.addEventListener('resize', adjustContainerHeight);

function adjustContainerHeight() {
 const container = document.querySelector('.container');
 container.style.minHeight = `${window.innerHeight - 50}px`;
}

adjustContainerHeight();




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