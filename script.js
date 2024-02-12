var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');

  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }

});

// Member section swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 20000,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    560: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    790: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});


  // event data fetching 

  const eventListFetch = async () => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxmqxNXMQ44qDuCsqVba9tSq8OdzCGtrcIKmwulpU0UNvguIOWx50lYU4x7S7fuhF8d/exec?sheetName=events&action=getEventList');
        const eventData = await response.json();
        console.log(eventData);
        return eventData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

const createCard = (item) => {
  const card = document.createElement('div');
  card.className = 'space-y-1 col-span-4 max-md:col-span-6 max-sm:col-span-12 shadow-md bg-white z-0 my-0 overflow-hidden rounded-2xl p-2  border-slate-300 dark:border-slate-800 border-2 dark:bg-slate-900';

  // Inject data into card template
  card.innerHTML = `
      <img src="public/assets/images/event-poster-1.jpg" alt="" class="rounded-lg overflow-hidden aspect-video object-cover object-top">
      <div class="flex flex-row items-center mx-2 !mt-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6 2C5.44772 2 5 2.44772 5 3V4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V6C18 4.89543 17.1046 4 16 4H15V3C15 2.44772 14.5523 2 14 2C13.4477 2 13 2.44772 13 3V4H7V3C7 2.44772 6.55228 2 6 2ZM6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H14C14.5523 9 15 8.55228 15 8C15 7.44772 14.5523 7 14 7H6Z"
                  fill="#64748B" />
          </svg>
          <span class="text-slate-700 dark:text-slate-400 ms-3">${item.date}</span>
      </div>
      <h1 class="text-xl mx-2 font-semibold text-slate-900 dark:text-white line-clamp-2">${item.title}</h1>
      <p class="mx-2 line-clamp-3 text-lg my-4 text-slate-700 dark:text-slate-300">${item.description}</p>
      <button type="button"  data-id="${item._id}" class="read-more-button text-brand-500-main mx-2 !mt-3 !mb-4 bg-transparent focus:outline-none text-center inline-flex items-center  font-medium rounded-lg text-lg     ">
          Read more
          <svg width="21" class="rtl:rotate-180 w-7 h-7 ms-2" height="20" viewBox="0 0 21 20" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M11.3333 7.5L13.8333 10M13.8333 10L11.3333 12.5M13.8333 10L7.16667 10M18 10C18 14.1421 14.6421 17.5 10.5 17.5C6.35786 17.5 3 14.1421 3 10C3 5.85786 6.35786 2.5 10.5 2.5C14.6421 2.5 18 5.85786 18 10Z"
                  stroke="#FF6026" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
      </button>
  `;
  return card;
};

// Function to render cards
const renderCards = async () => {
  const data = await eventListFetch();
  const cardContainer = document.getElementById('cardContainer');
  if (data && cardContainer) {
      data.data.forEach(item => {
          const card = createCard(item);
          cardContainer.appendChild(card);
      });
  }
};

// Call the renderCards function
renderCards();

// Function to handle click event on "Read more" button
const handleReadMoreClick = (event) => {
  const id = event.target.dataset.id;
  if (id) {
      // Redirect to new page with the specified ID
      window.location.href = `event-details.html?id=${id}`;
  }
};

// Add event listener to "Read more" button
document.addEventListener('click', function (event) {
  if (event.target.matches('.read-more-button')) {
      handleReadMoreClick(event);
  }
});