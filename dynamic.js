document.addEventListener('DOMContentLoaded', function() {
  let currentDropdown = null;
  let dropdownOpen= false;

  const servicesLink = document.querySelector('.services-link');
  const dropdownMenu = document.querySelector('.dropdown-list-services');
  const dropdownRentBooks = document.querySelector('.dropdown-list-rent-books');
  const dropdownSellBooks = document.querySelector('.dropdown-list-sell-books');
  const dropdownFindPeople = document.querySelector('.dropdown-list-find-people');
  const rentBooksByGenre = document.querySelector('.rent-by-genre');
  const rentBooksByLocation = document.querySelector('.rent-by-location');
  const rentBooksByAuthor = document.querySelector('.rent-by-authors');
  const sellBooksSingle = document.querySelector('.sell-single-book');
  const sellBooksByCollection = document.querySelector('.sell-by-collection');
  const findPeopleBySimilarInterest = document.querySelector('.find-people-by-similar-interest');
  const findPeopleByLocation = document.querySelector('.find-people-by-location');
  const rentBooks = document.querySelector('.rent-books');
  const sellBooks =document.querySelector('.sell-books');
  const findPeople =document.querySelector('.find-people');

  servicesLink.addEventListener('mouseenter', () => {
    dropdownMenu.classList.add('active');
    dropdownOpen= true;
  });
  servicesLink.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove('active');
      dropdownRentBooks.classList.remove('active');
      dropdownSellBooks.classList.remove('active');
      dropdownFindPeople.classList.remove('active');
    }, 200);
  });



  dropdownMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeoutId);
    dropdownMenu.classList.add('active');
    dropdownOpen= true;
   
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    dropdownMenu.classList.remove('active');
    dropdownRentBooks.classList.remove('active');
    dropdownSellBooks.classList.remove('active');
    dropdownFindPeople.classList.remove('active');
    dropdownOpen= false;
  });

  rentBooks.addEventListener('mouseenter', () => {
    console.log("Rent books");
    if (currentDropdown !== null) {
      currentDropdown.classList.remove('active');
    }
    dropdownRentBooks.classList.add('active');
    currentDropdown = dropdownRentBooks;
  });
 
 

  rentBooksByGenre.addEventListener('mouseenter', () => {
    console.log("Rent books By genre");
  });



  rentBooksByLocation.addEventListener('mouseenter', () => {
    
    console.log("Rent books By location");
  });


  rentBooksByAuthor.addEventListener('mouseenter', () => {
    console.log("Rent books By author");
   
  });
  dropdownRentBooks.addEventListener("mouseleave", function(){
    dropdownRentBooks.classList.remove('active');
  })



  sellBooks.addEventListener('mouseenter', () => {
   
    if (currentDropdown !== null) {
      currentDropdown.classList.remove('active');
    }
    dropdownSellBooks.classList.add('active');
    currentDropdown = dropdownSellBooks;
  });



  sellBooksSingle.addEventListener('mouseenter', () => {
    dropdownSellBooks.classList.add('active');
    console("sell a single book");
  });

  sellBooksByCollection.addEventListener('mouseenter', () => {
    dropdownSellBooks.classList.add('active');
    console.log("sell books by collection");
  });

 

  findPeople.addEventListener('mouseenter', () => {
    console.log("find people");
    if (currentDropdown !== null) {
      currentDropdown.classList.remove('active');
    }
    dropdownFindPeople.classList.add('active');
    currentDropdown = dropdownFindPeople;
    console.log("find people with similar interest");
    
    
  });

  findPeopleBySimilarInterest.addEventListener('mouseenter', () => {
   

  
  });

 

  findPeopleByLocation.addEventListener('mouseenter', () => {
    dropdownFindPeople.classList.add('active');
    console.log("find people by location");
  });
  dropdownFindPeople.addEventListener("mouseleave", function(){
    dropdownFindPeople.classList.remove('active');
  })
  dropdownSellBooks.addEventListener("mouseleave", function(){
    dropdownSellBooks.classList.remove('active');
  })
  

});

    