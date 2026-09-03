function preparaPedido() {
    return new Promise((resolve, reject) => {
        tempao = false;
        setTimeout(()=>{
            if (temPao) {
                resolve("Hamburger pronto")
            }else{
                reject(new Error("Hamburger pronto"));
            }

        },2000)
    })
}

preparaPedido().then((resultado)=>{
    console.log(resultado)
}).catch(erro)=>(
)