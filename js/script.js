var searchButton = document.querySelector('.search-hotel__button');
var searchForm = document.forms.search;
var dateIn = searchForm.dateIn;
var dateOut = searchForm.dateOut;
var adultNumber = searchForm.adults;
var kidNumber = searchForm.kids;
var minusAdult = searchForm.minusAdult;
var plusAdult = searchForm.plusAdult;
var minusKid = searchForm.minusKid;
var plusKid = searchForm.plusKid;

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
  searchForm.offsetWidth = searchForm.offsetWidth;
})

searchForm.addEventListener('submit', function (evt) {
  if (searchForm.classList.contains('submit-error')) {
    searchForm.classList.remove('submit-error');
  }
  if (!dateIn.value || !dateOut.value || (adultNumber.value === '0' && kidNumber.value === '0')) {
    evt.preventDefault();
    if (!dateIn.value) {
      dateIn.focus();
    } else
      if (!dateOut.value) {
        dateOut.focus();
      } else
        if (adultNumber.value === "0") {
          adultNumber.focus();
        } else {
          kidNumber.focus();
        }
    searchForm.classList.add('submit-error');
  } else {
    closeForm();
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
