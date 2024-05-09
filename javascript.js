async function waitFun() {
    await new Promise(resolve => {
        setTimeout(resolve, 10000)
    })
    return 10
}

function su() {
    waitFun().then((el) => {
        console.log(el)
    }).catch((err) => {
        console.log(err)
    })
}
su()

async function a() {
    
    let Promis=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve('done'),1000})
    })
    let result = await Promis;
    console.log(result)

}
a()

