const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  // display 20 phones only
  phones = phones.slice(0, 10);

  //   display no phone found
  const noPhones = document.getElementById("no-found-msg");
  console.log(noPhones);
  if (phones.length === 0) {
    noPhones.classList.remove("d-none");
  } else {
    noPhones.classList.add("d-none");
  }
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `<div class="card p-6 h-100">
        <img src="${phone.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.</p>
        </div>
    </div>`;
    phonesContainer.appendChild(phoneDiv);
  });
  //stop spinner or loader
  toggleSpineer(false);
};
document.getElementById("btn-search").addEventListener("click", function () {
  // start loader
  toggleSpineer(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;

  loadPhones(searchText);
});
const toggleSpineer = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

// loadPhones();
