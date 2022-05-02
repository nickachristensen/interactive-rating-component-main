const ratings = document.querySelectorAll('.number');
ratings.forEach(e => {e.addEventListener("click", handleClick)});

const btn = document.querySelector(".btn");
btn.addEventListener("click", handleSubmit);

function handleSubmit() {
    main = document.querySelector(".main");
    main.style.display = "none";
    thankYou = document.querySelector(".thank-you");
    thankYou.style.visibility = "visible";
    thankYou.textContent =
    `You selected ${finalRating} out of 5

  Thank you!

  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!`;

}


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




