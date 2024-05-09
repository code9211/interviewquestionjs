let cart = ['shoes', 'cloth', 'caps']



api.createOrder(cart, function () {

    api.createPayment(function () {
        api.showOrderSUmmary(function () {
            api.finalPayment(function () {
                api.updateWallet()

            })

        })
    })
})


let data="https://jsonplaceholder.typicode.com/todos/1"

let prom=fetch(data)


console.log(prom)