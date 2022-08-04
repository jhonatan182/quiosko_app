const formatearDinero = cantidad => {

    return Number(cantidad).toLocaleString('HNL',{currency: 'HNL' , style: 'currency'})
}


export {
    formatearDinero
}