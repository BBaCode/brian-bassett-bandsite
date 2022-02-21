const apiKey = "32d895a1-92c9-4310-bb26-8e03ec7bf4";
const showsURL = "https://project-1-api.herokuapp.com/showdates?api_key=";
const getShows = showsURL + apiKey;

const shows = [];
const allShows = [];
axios
  .get(getShows)
  .then((response) => {
    for (i = 0; i < response.data.length; i++) {
      shows[i] = response.data[i];
    }
    const showsSection = document.querySelector(".main__shows-desktop");

    const tabletCard = document.createElement("ul");
    const tabletDate = document.createElement("ul");
    const tabletVenue = document.createElement("ul");
    const tabletLocation = document.createElement("ul");
    const tabletDiv = document.createElement("div");

    tabletDate.innerText = "DATE";
    tabletVenue.innerText = "VENUE";
    tabletLocation.innerText = "LOCATION";

    tabletCard.classList.add("main__shows-labels");
    tabletDate.classList.add("main__shows-titles-tablet");
    tabletVenue.classList.add("main__shows-titles-tablet");
    tabletLocation.classList.add("main__shows-titles-tablet");
    tabletDiv.classList.add("main__shows-empty");

    tabletCard.appendChild(tabletDate);
    tabletCard.appendChild(tabletVenue);
    tabletCard.appendChild(tabletLocation);
    tabletCard.appendChild(tabletDiv);

    showsSection.appendChild(tabletCard);

    function displayShows(arr) {
      const timestamp = parseInt(arr.date); //THIS IS  A STRING, TURN IT INTO A NUMBER
      const timeItem = new Date(timestamp);

      const date =
        timeItem.getMonth() +
        1 +
        "/" +
        timeItem.getDate() +
        "/" +
        timeItem.getFullYear();
      const venue = arr.place;
      const location = arr.location;

      //creating all of the elements below

      const showCard = document.createElement("ul"); //div for the card -append all the below to this
      const dateTitle = document.createElement("li"); //these three are the labels
      const venueTitle = document.createElement("li");
      const locationTitle = document.createElement("li");
      const cardDate = document.createElement("li"); //these three are the actual values
      const cardVenue = document.createElement("li");
      const cardLocation = document.createElement("li");
      const cardButton = document.createElement("button");

      //giving inner Text to everything

      dateTitle.innerText = "DATE";
      venueTitle.innerText = "VENUE";
      locationTitle.innerText = "LOCATION";
      cardDate.innerText = date;
      cardVenue.innerText = venue;
      cardLocation.innerText = location;
      cardButton.innerText = "BUY TICKETS";

      //adding classes to all of the elements

      showCard.classList.add("main__shows-container");
      dateTitle.classList.add("main__shows-titles");
      venueTitle.classList.add("main__shows-titles");
      locationTitle.classList.add("main__shows-titles");
      cardDate.classList.add("main__shows-info");
      cardDate.classList.add("main__shows-info-bold");
      cardVenue.classList.add("main__shows-info");
      cardLocation.classList.add("main__shows-info");
      cardButton.classList.add("main__shows-button");

      // appending all of the elements

      showCard.appendChild(dateTitle);
      showCard.appendChild(cardDate);
      showCard.appendChild(venueTitle);
      showCard.appendChild(cardVenue);
      showCard.appendChild(locationTitle);
      showCard.appendChild(cardLocation);
      showCard.appendChild(cardButton);

      showsSection.appendChild(showCard);

      // allShows.push(showCard);
      //TOGGLE
      // showCard.addEventListener("click", () => {
      //   if (!showCard.classList.contains("toggle")) {
      //     showCard.classList.toggle("main__shows-container--toggle");
      //   }
      // });
    }
    shows.forEach((show) => displayShows(show));
  })
  .catch((error) => {
    console.log(error);
  });
