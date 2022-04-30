ratingDiv = document.querySelector('.rating');

const numbers = [1, 2, 3, 4, 5];

function handleClick(e) {
  const clearRatings = document.querySelectorAll('.selected');  
  clearRatings.className = 'number';
  const target = e.target;
  const rating = target.textContent;
  target.className = "selected"
}

const rating = numbers.forEach(number => {
    const n = document.createElement("p");
    n.className = "number"
    n.innerHTML = `${number}`;
    n.addEventListener("click", handleClick)
    ratingDiv.append(n);
});


