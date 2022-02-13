const defaultComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const newComment = [""];
//if the button is clicked, assign the name, date and comment to variables
//then add these variables to newComment
//push the newComment to the array above

const commentSection = document.querySelector(".main__comments-card-container");

for (let i = 0; i < defaultComments.length; i++) {
  const name = defaultComments[i].name;
  const date = defaultComments[i].date;
  const comment = defaultComments[i].comment;

  //creating all of the elements

  const commentCard = document.createElement("div");
  //the commentCard holds all of the below
  const avatarCard = document.createElement("img");
  const rightCard = document.createElement("div");
  const nameDateCardBox = document.createElement("div");
  //the nameDateCardBox holds the nameCard and dateCard
  const nameCard = document.createElement("h5");
  const dateCard = document.createElement("p");
  //card bottom
  const paragraphCard = document.createElement("p");

  //putting text/content/attributes in all of the elements

  avatarCard.setAttribute("src", "assets/images/mercury.png");
  nameCard.innerText = name;
  dateCard.innerText = date;
  paragraphCard.innerText = comment;

  //putting classes on all of the elements

  commentCard.classList.add("main__comments-card");
  avatarCard.classList.add("main__comments-empty-avatar");
  rightCard.classList.add("main__comments-card__right");
  nameDateCardBox.classList.add("main__comments-card__right-top");
  nameCard.classList.add("main__comments-card__right-top-header");
  dateCard.classList.add("main__comments-card__right-top-date");
  paragraphCard.classList.add("main__comments-card__bottom-paragraph");

  //append everything together here

  nameDateCardBox.appendChild(nameCard);
  nameDateCardBox.appendChild(dateCard);
  rightCard.appendChild(nameDateCardBox);
  rightCard.appendChild(paragraphCard);
  commentCard.appendChild(avatarCard);
  commentCard.appendChild(rightCard);

  commentSection.appendChild(commentCard);
}
