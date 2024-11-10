document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.catalog__card-1,.catalog__card-2');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
    document.getElementById('burger-icon').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.toggle('active');
      });
      
      document.getElementById('close-icon').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.remove('active');
      });
      

      const itemsPerPage = 4;
      const items = document.querySelectorAll('.catalog__card-1, .catalog__card-2');
      const totalPages = Math.ceil(items.length / itemsPerPage);
      let currentPage = 1;
      
      // Функция отображения элементов на текущей странице
      function showPage(page) {
          items.forEach((item, index) => {
              item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'flex' : 'none';
          });
          updatePagination();
      }
      
      // Функция обновления пагинации
      function updatePagination() {
          const pageNumbersContainer = document.getElementById('page-numbers');
          pageNumbersContainer.innerHTML = '';
      
          for (let i = 1; i <= totalPages; i++) {
              const pageNum = document.createElement('span');
              pageNum.textContent = i;
              pageNum.style.cursor = 'pointer'; // Добавим курсор указателя
      
              // Обработчик клика на номер страницы
              pageNum.addEventListener('click', () => {
                  currentPage = i;
                  showPage(currentPage);
              });
              // Выделение текущей страницы
              if (i === currentPage) {
                  pageNum.style.fontWeight = 'bold'; 
                  pageNum.style.borderBottom = '3px solid White';
                  pageNum.style.borderTop = '3px solid White';
              }
              pageNumbersContainer.appendChild(pageNum);
          }
      
          document.getElementById('prev').disabled = currentPage === 1;
          document.getElementById('next').disabled = currentPage === totalPages;
      }
      
      // Инициализация отображения
      showPage(currentPage);
      
      // Обработчик кнопки "Предыдущая" 
      document.getElementById('prev').addEventListener('click', () => {
          if (currentPage > 1) {
              showPage(--currentPage);
          }
      });
      
      // Обработчик кнопки "Следующая"
      document.getElementById('next').addEventListener('click', () => {
          if (currentPage < totalPages) {
              showPage(++currentPage);
          }
      });

})

const iten = [
    { title: 'Храм Мэйдзи (Мэйдзи Дзингу)', category: 'temples', content: '...' },
    { title: 'Токийский национальный музей', category: 'museums', content: '...' },
    { title: 'Mori Art Museum(Музей)', category: 'museums', content: '...' },
    { title: 'Tokyo Midtown(Торговые центры)', category: 'malls', content: '...' },
    { title: 'Ginza Six(Торговые центры)', category: 'malls', content: '...' },
    { title: 'Ameyoko Shopping Street(Уличные рынки)', category: 'markets', content: '...' },
    { title: 'Gotokuji Temple(Уличные рынки)', category: 'markets', content: '...' },
    { title: 'Национальный парк Никко, Тотиги/Гумма/Фукусима', category: 'parks', content: '...' },
    { title: 'Misono(Ресторан)', category: 'restaurants', content: '...' },
    { title: 'NewYork Grill(Ресторан)', category: 'restaurants', content: '...' },
];

function filterCatalog(category) {
    const catalogCards = document.querySelectorAll('.catalog__card-1, .catalog__card-2');
    catalogCards.forEach(card => {
        const title = card.querySelector('h3').innerText;
        const item = iten.find(item => item.title === title);
        if (item && item.category === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
    }   