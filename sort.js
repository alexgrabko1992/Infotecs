// Функция для сортировки по алфавиту элементов таблицы

// создаем слушатель для для прогрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  // создаем функцию для сортировки элементов
  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);

    // создаем экземпляр конструктора сортировщиков для сравнения строк

    const collator = new Intl.Collator(["en", "ru"], { numeric: true }); // прописываем параметры по которым будем сравнивать
    const comparator = (index, order) => (a, b) =>
      order *
      collator.compare(
        a.children[index].innerHTML, // функция для сравнения двух строк
        b.children[index].innerHTML
      );

    // создаем лупер для добавления всех отсортированных строк в tbody

    for (const tBody of target.closest("table").tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for (const cell of target.parentNode.cells)
      cell.classList.toggle("sorted", cell === target);
  };

  document.querySelectorAll(".table_sort thead").forEach(
    (tableTH) => tableTH.addEventListener("click", () => getSort(event)) // слушатель для клика по элементу th, который вызывает фун-ию для сортировки
  );
});
