// Some starter code
const container = document.querySelector("#addressList")
const wistListContainer = document.querySelector("#wish-list")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value
   

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
    <section>
        <h1>${personName}</h1>
        <div>${personAddress}</div>
    </section>
`
})

document.querySelector("#saveWishList").addEventListener("click", event => {
    const whereShop = document.querySelector("#where").value
    const item = document.querySelector("#item").value 

    wistListContainer.innerHTML += `
    <section> 
    <p>I can purchase ${item} at ${whereShop}</p>
    <section>  `
    
})


 

