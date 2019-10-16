console.log("would you believe me when I tell you, you're the queen of my heart")

const wishList = document.querySelector("#wishlistList")


document.querySelector('#saveToWishlist').addEventListener('click', event =>{
    const yourThings = document.querySelector("#thingsILike").value
    const itsLocation = document.querySelector("#locationsToBuy").value

    wishList.innerHTML += `
    <section> 
        <h1>${yourThings}</h1>
        <div>${itsLocation}</div>
    </section>
    `
})