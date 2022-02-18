const apiKey = "32d895a1-92c9-4310-bb26-8e03ec7bf488";
const showsURL = "https://project-1-api.herokuapp.com/showdates?api_key=";
const getShows = showsURL + apiKey;

const shows = [];

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
      const date = arr.date;
      // const date = arr.date;
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

      //appending all of the elements

      showCard.appendChild(dateTitle);
      showCard.appendChild(cardDate);
      showCard.appendChild(venueTitle);
      showCard.appendChild(cardVenue);
      showCard.appendChild(locationTitle);
      showCard.appendChild(cardLocation);
      showCard.appendChild(cardButton);

      showsSection.appendChild(showCard);
    }
    shows.forEach((show) => displayShows(show));
    // for (let i = 0; i < shows.length; i++) {
    //   const date = shows[i].date;
    //   const venue = shows[i].place;
    //   const location = shows[i].location;

    //   //creating all of the elements below

    //   const showCard = document.createElement("ul"); //div for the card -append all the below to this
    //   const dateTitle = document.createElement("li"); //these three are the labels
    //   const venueTitle = document.createElement("li");
    //   const locationTitle = document.createElement("li");
    //   const cardDate = document.createElement("li"); //these three are the actual values
    //   const cardVenue = document.createElement("li");
    //   const cardLocation = document.createElement("li");
    //   const cardButton = document.createElement("button");

    //   //giving inner Text to everything

    //   dateTitle.innerText = "DATE";
    //   venueTitle.innerText = "VENUE";
    //   locationTitle.innerText = "LOCATION";
    //   cardDate.innerText = date;
    //   cardVenue.innerText = venue;
    //   cardLocation.innerText = location;
    //   cardButton.innerText = "BUY TICKETS";

    //   //adding classes to all of the elements

    //   showCard.classList.add("main__shows-container");
    //   dateTitle.classList.add("main__shows-titles");
    //   venueTitle.classList.add("main__shows-titles");
    //   locationTitle.classList.add("main__shows-titles");
    //   cardDate.classList.add("main__shows-info");
    //   cardDate.classList.add("main__shows-info-bold");
    //   cardVenue.classList.add("main__shows-info");
    //   cardLocation.classList.add("main__shows-info");
    //   cardButton.classList.add("main__shows-button");

    //   //appending all of the elements

    //   showCard.appendChild(dateTitle);
    //   showCard.appendChild(cardDate);
    //   showCard.appendChild(venueTitle);
    //   showCard.appendChild(cardVenue);
    //   showCard.appendChild(locationTitle);
    //   showCard.appendChild(cardLocation);
    //   showCard.appendChild(cardButton);

    //   showsSection.appendChild(showCard);
    // }
  })
  .catch((error) => {
    console.log(error);
  });

// const shows = [
//   {
//     date: "Mon Sept 06 2021",
//     venue: "Ronald Lane",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Tue Sept 21 2021",
//     venue: "Pier 3 East",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Oct 15 2021",
//     venue: "View Lounge",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Sat Nov 06 2021",
//     venue: "Hyatt Agency",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Fri Nov 26 2021",
//     venue: "Moscow Center",
//     location: "San Francisco, CA",
//   },
//   {
//     date: "Wed Dec 15 2021",
//     venue: "Press Club",
//     location: "San Fransisco, CA",
//   },
// ];

// const showsSection = document.querySelector(".main__shows-desktop");

// const tabletCard = document.createElement("ul");
// const tabletDate = document.createElement("ul");
// const tabletVenue = document.createElement("ul");
// const tabletLocation = document.createElement("ul");
// const tabletDiv = document.createElement("div");

// tabletDate.innerText = "DATE";
// tabletVenue.innerText = "VENUE";
// tabletLocation.innerText = "LOCATION";

// tabletCard.classList.add("main__shows-labels");
// tabletDate.classList.add("main__shows-titles-tablet");
// tabletVenue.classList.add("main__shows-titles-tablet");
// tabletLocation.classList.add("main__shows-titles-tablet");
// tabletDiv.classList.add("main__shows-empty");

// tabletCard.appendChild(tabletDate);
// tabletCard.appendChild(tabletVenue);
// tabletCard.appendChild(tabletLocation);
// tabletCard.appendChild(tabletDiv);

// showsSection.appendChild(tabletCard);

// for (let i = 0; i < shows.length; i++) {
//   const date = shows[i].date;
//   const venue = shows[i].venue;
//   const location = shows[i].location;

//   //creating all of the elements below

//   const showCard = document.createElement("ul"); //div for the card -append all the below to this
//   const dateTitle = document.createElement("li"); //these three are the labels
//   const venueTitle = document.createElement("li");
//   const locationTitle = document.createElement("li");
//   const cardDate = document.createElement("li"); //these three are the actual values
//   const cardVenue = document.createElement("li");
//   const cardLocation = document.createElement("li");
//   const cardButton = document.createElement("button");

//   //giving inner Text to everything

//   dateTitle.innerText = "DATE";
//   venueTitle.innerText = "VENUE";
//   locationTitle.innerText = "LOCATION";
//   cardDate.innerText = date;
//   cardVenue.innerText = venue;
//   cardLocation.innerText = location;
//   cardButton.innerText = "BUY TICKETS";

//   //adding classes to all of the elements

//   showCard.classList.add("main__shows-container");
//   dateTitle.classList.add("main__shows-titles");
//   venueTitle.classList.add("main__shows-titles");
//   locationTitle.classList.add("main__shows-titles");
//   cardDate.classList.add("main__shows-info");
//   cardDate.classList.add("main__shows-info-bold");
//   cardVenue.classList.add("main__shows-info");
//   cardLocation.classList.add("main__shows-info");
//   cardButton.classList.add("main__shows-button");

//   //appending all of the elements

//   showCard.appendChild(dateTitle);
//   showCard.appendChild(cardDate);
//   showCard.appendChild(venueTitle);
//   showCard.appendChild(cardVenue);
//   showCard.appendChild(locationTitle);
//   showCard.appendChild(cardLocation);
//   showCard.appendChild(cardButton);

//   showsSection.appendChild(showCard);
// }
