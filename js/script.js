var searchButton = document.querySelector('.search-hotel__button');
var submitButton = document.querySelector('.search__button');
var searchForm = document.forms.search;
var dateIn = searchForm.dateIn;
var dateOut = searchForm.dateOut;
var adultNumber = searchForm.adults;
var kidNumber = searchForm.kids;
var minusAdult = searchForm.minusAdult;
var plusAdult = searchForm.plusAdult;
var minusKid = searchForm.minusKid;
var plusKid = searchForm.plusKid;

window.onload = function (evt) {
  if (searchForm.classList.contains('search-visible')) {
    searchForm.classList.remove('search-visible');
  }
};

function closeForm() {
  if (searchForm.classList.contains('submit-error')) {
    searchForm.classList.remove('submit-error');
  }
  searchForm.classList.toggle('search-visible');
  searchForm.classList.toggle('search-appear');
}

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchForm.classList.toggle('search-visible');
  searchForm.classList.toggle('search-appear');
})

myCheckValidity = function () {
  if (searchForm.classList.contains('submit-error')) {
    searchForm.classList.remove('submit-error');
    searchForm.offsetWidth = searchForm.offsetWidth;
  }
  searchForm.classList.add('submit-error');
  if (!dateIn.value) {
    dateIn.focus();
  } else
    if (!dateOut.value) {
      dateOut.focus();
    } else
      if (!adultNumber.validity.valid || Number(adultNumber.value) === 0) {
        adultNumber.focus();
      } else {
        kidNumber.focus();
      }
}

searchForm.addEventListener('submit', function (evt) {
  if (!dateIn.value || !dateOut.value || Number(adultNumber.value) === 0 && Number(kidNumber.value) === 0) {
    evt.preventDefault();
    myCheckValidity();
  } else {
    closeForm();
  }
})

submitButton.addEventListener('click', function (evt) {
  if (!searchForm.checkValidity()) {
    evt.preventDefault();
    myCheckValidity();
  }
})

minusAdult.addEventListener('click', function (evt) {
  if (adultNumber.value > 0) {
    adultNumber.value--;
  }
})

minusKid.addEventListener('click', function (evt) {
  if (kidNumber.value > 0) {
    kidNumber.value--;
  }
})

plusAdult.addEventListener('click', function (evt) {
  adultNumber.value++;
})

plusKid.addEventListener('click', function (evt) {
  kidNumber.value++;
})
