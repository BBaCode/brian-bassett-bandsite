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

console.log(defaultComments);

const commentSection = document.getElementById("commentCard");
const formComments = document.getElementById("form");

function displayComment(arr) {
  let name = arr.name;
  let date = arr.date;
  let comment = arr.comment;

  //creating all of the elements

  let commentCard = document.createElement("div");
  //the commentCard holds all of the below
  let avatarCard = document.createElement("img");
  let rightCard = document.createElement("div");
  let nameDateCardBox = document.createElement("div");
  //the nameDateCardBox holds the nameCard and dateCard
  let nameCard = document.createElement("h5");
  let dateCard = document.createElement("p");
  //card bottom
  let paragraphCard = document.createElement("p");

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

  commentSection.appendChild(commentCard);
  commentCard.appendChild(avatarCard);
  commentCard.appendChild(rightCard);
  rightCard.appendChild(nameDateCardBox);
  nameDateCardBox.appendChild(nameCard);
  nameDateCardBox.appendChild(dateCard);
  rightCard.appendChild(paragraphCard);
}

defaultComments.forEach((comment) => {
  displayComment(comment);
});

//THIS ADDS TO THE FRONT OF THE ARRAY BUT PRINTS UNDEFINED AT THE BOTTOM
//TRIED TO FOLLOW NIGELS CODE BUT THE DEMO DID NOT WORK FOR ADDING ELEMENTS FROM FORM INPUTS UPON OPENING, COULDNT REMEMBER WHAT HE CHANGED

formComments.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameItem = event.target.name.value;
  let dateItem = new Date();
  let dateOfComment =
    dateItem.getMonth() +
    1 +
    "/" +
    dateItem.getDate() +
    "/" +
    dateItem.getFullYear();
  let commentItem = event.target.comment.value;

  if (nameItem && dateItem && commentItem) {
    defaultComments.unshift({
      name: nameItem,
      date: dateOfComment,
      comment: commentItem,
    });
    displayComment(defaultComments);
  }
  let resetName = document.querySelectorAll(".main__comments-field");
  if (!nameItem) {
    resetName.classList.add("main__comment--error");
  }
});
