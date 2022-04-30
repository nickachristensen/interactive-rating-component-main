ratingDiv = document.querySelector('.rating');

const numbers = [1, 2, 3, 4, 5];

const rating = numbers.forEach(number => {
    const n = document.createElement("p");
    n.innerHTML = `${number}`;
    ratingDiv.append(n);
});


