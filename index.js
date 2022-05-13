const ratings = document.querySelectorAll('.number');
ratings.forEach(e => {e.addEventListener("click", handleClick)});

const btn = document.querySelector(".btn");
btn.addEventListener("click", handleSubmit);

function handleSubmit() {
  const main = document.querySelector(".main");
    main.style.display = "none";
    thankYou = document.querySelector(".thank-you");
    thankYou.style.visibility = "visible";

    img = document.createElement("img");
    img.src = "images/illustration-thank-you.svg";

    tyRating = document.createElement("p");
    tyRating.className ="ty-rating";
    tyRating.innerHTML = `You selected ${finalRating} out of 5`;

    h1 = document.createElement("h1");
    h1.innerHTML = "Thank you!";

    p = document.createElement("p");
    p.innerHTML = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

    thankYou.append(img, tyRating, h1, p);
    // thankYou.innerHTML =
    // <img src="images/illustration-thank-you.svg"/>,

    // <p>You selected {finalRating} out of 5</p>,

    // <h1>Thank you!</h1>,

    // <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    // don’t hesitate to get in touch!</p>;

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




