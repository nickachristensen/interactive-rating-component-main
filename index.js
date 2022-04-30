const ratings = document.querySelectorAll('.number');
ratings.forEach(e => {e.addEventListener("click", handleClick)});

function handleClick(e) {
    if (e.target.classList.contains('selected')) {
        e.target.classList.remove('selected');
    } else {
        ratings.forEach((btn) => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        finalRating = e.target.innerHTML
        console.log(finalRating)
    }
}



