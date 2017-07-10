// todo get search results creating elements
// when you click one

SC.initialize({
  client_id: '095fe1dcd09eb3d0e1d3d89c76f5618f'
});

let songBox = document.querySelector('.s-results');

let FieldQuery = document.querySelector('search');

let ValueQuery = document.querySelector(".search");

let subBtn = document.querySelector(".search-button");

let wdgt = document.querySelector('#widget-thingy');

document.querySelector('.search-form').onsubmit = function() {event.preventDefault(); spotlight()};


// function searchCap(query) {
//   console.log(query);
// };


function spotlight() {

  let queryString = ValueQuery.value;


  SC.get('/tracks', {
      q: queryString
    })
    .then(function(tracks) {
      //todo creat element then add to container
      console.log(tracks);
      songsGen(tracks);
    });

  function songsGen(tracksFields) {
    for (let idx in tracksFields) {
      const info = tracksFields[idx];
      let songBox = document.createElement("div");

      let songContainer = document.querySelector(".s-results");

      songBox.classList.add("songBox");

      songBox.addEventListener('click', function (){
        let widgetIframe = document.getElementById('widget-thingy'),
          widget = SC.Widget(widgetIframe),
          newSoundUrl = info.permalink_url;
      });

      let cover = document.createElement("img");
      cover.setAttribute("src", info.artwork_url);
      cover.classList.add("cover");

      songBox.appendChild(cover);

      let songName = document.createElement("p");
      songName.textContent = info.title;
      songName.classList.add("songName");

      songBox.appendChild(songName);

      let userName = document.createElement("p");
      userName.textContent = (info.user.username);
      userName.classList.add("userName");

      songBox.appendChild(userName);

      songContainer.appendChild(songBox);

    }
  };
}
