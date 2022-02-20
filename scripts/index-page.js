const apiKey = "32d895a1-92c9-4310-bb26-8e03ec7bf4";
const commentURL = "https://project-1-api.herokuapp.com/comments?api_key=";
const getComments = commentURL + apiKey;

let defaultComments = [];

const nameField = document.getElementById("name");
const commentField = document.getElementById("comment");

axios
  .get(getComments)
  .then((response) => {
    defaultComments = response.data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    defaultComments.forEach((comment) => {
      displayComment(comment);
    });
    console.log(defaultComments);
  })
  .catch((error) => {
    console.log(error);
  });

const commentSection = document.getElementById("commentCard");
const formComments = document.getElementById("form");

function displayComment(arr) {
  const name = arr.name;
  const timestamp = arr.timestamp;
  const timeItem = new Date(timestamp);
  console.log(timeItem);
  const date =
    timeItem.getMonth() +
    1 +
    "/" +
    timeItem.getDate() +
    "/" +
    timeItem.getFullYear();
  const comment = arr.comment;

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

formComments.addEventListener("submit", (event) => {
  event.preventDefault();

  let nameItem = event.target.name.value;

  let commentItem = event.target.comment.value;
  let newComment = {
    name: nameItem,
    comment: commentItem,
  };

  if (nameItem && commentItem) {
    commentSection.innerText = "";
    axios
      .post(getComments, newComment)
      .then((response) => {
        axios
          .get(getComments)
          .then((response) => {
            console.log(response.data);
            commentArr = response.data.sort((a, b) => {
              return b.timestamp - a.timestamp;
            });
            commentArr.forEach((comment) => {
              displayComment(comment);
              nameField.value = "";
              commentField.value = "";
            });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
