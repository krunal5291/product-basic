let products = []

const ui = () => {
    document.getElementById("ui").innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        let h1 = document.createElement("h1")
        h1 = products[i].titel
        let img = document.createElement("img")
        img.src = products[i].img
        let price = document.createElement("h3")
        price = products[i].price

        let dele = document.createElement("button")
        dele.innerHTML="delete"

        dele.addEventListener("click",()=>{
            products.splice(i,1);

            ui()
        })

        let div = document.createElement("div")
        div.append(img, h1, price, dele)
        document.getElementById("ui").append(div)
    }
}

const header = (e) => {

    e.preventDefault()

    let titel = document.getElementById("titel").value
    let img = document.getElementById("img").value
    let price = document.getElementById("price").value

    let prodduct = {
        titel: titel,
        img: img,
        price: price
    }
    products.push(prodduct);
    ui()
    console.log(products);

}



document.getElementById("form").addEventListener("submit", header)

