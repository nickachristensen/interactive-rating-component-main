const numbers = [1, 2, 3, 4, 5];
const rating = numbers.map(number => {
    const n = document.createElement("p");
    n.innerHTML = `${number}`;
    return n;
});

div.append(rating);
