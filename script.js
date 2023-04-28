const carImage = document.querySelector("#car-image");
const skeleton = document.querySelector(".car-image-skeleton");
const btnCar = document.querySelector('#car-btn');

function getRandomImage() {
  skeleton.style.display = "block";
  carImage.style.backgroundImage = "none";

  axios
    .get("https://source.unsplash.com/random/600x400/?car")
    .then((response) => {
      carImage.style.backgroundImage = `url(${response.request.responseURL})`;
      skeleton.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
    });
}

btnCar.addEventListener("click", getRandomImage);

getRandomImage();
