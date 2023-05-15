let productos = [
    {id: `1` ,categoria: `lineaTalleres` ,nombre:`Musculosa Entrenamiento Azul`, stock:`23` ,precio:`$9.300` ,foto:`../multimedia/musculosaazul.webp`},
    {id: `2` ,categoria: `lineaTalleres` ,nombre:`Musculosa Entrenamiento Oscura`, stock:`30` ,precio:`$9.300` ,foto:`../multimedia/musculosaoscura.webp`},
    {id: `3` ,categoria: `lineaTalleres` ,nombre:`Remera Entrenamiento Azul`, stock:`15` ,precio:`$11.500` ,foto:`../multimedia/entrenamientoazul.webp`},
    {id: `4` ,categoria: `lineaTalleres` ,nombre:`Remera Entrenamiento Oscura`, stock:`12` ,precio:`$11.500` ,foto:`../multimedia/entrenamientooscura.webp`},
    {id: `5` ,categoria: `lineaTalleres` ,nombre:`Buzo Entrenamiento Azul`, stock:`20` ,precio:`$19.900` ,foto:`../multimedia/buzoentreazul.webp`},
    {id: `6` ,categoria: `lineaTalleres` ,nombre:`Buzo Entrenamiento Oscuro`, stock:`17` ,precio:`$19.900` ,foto:`../multimedia/buzoentreoscuro.webp`},
    {id: `7` ,categoria: `accesorios` ,nombre:`Boxer CAT`, stock:`5` ,precio:`$3.200` ,foto:`../multimedia/boxercat.webp`},
    {id: `8` ,categoria: `accesorios` ,nombre:`Billetera Talleres`, stock:`46` ,precio:`$3.500` ,foto:`../multimedia/billeteracat.webp`},
    {id: `9` ,categoria: `merch` ,nombre:`Botinera Talleres`, stock:`24` ,precio:`$4.200` ,foto:`../multimedia/botineroescudo.webp`},
    {id: `10` ,categoria: `merch` ,nombre:`Pulsera Silicona Azul`, stock:`153` ,precio:`$200` ,foto:`../multimedia/pulseracat.webp`},
]

export const mFetch = (id) => {
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(!id ? productos : productos.find(producto => producto.id === id))
        }, 1000)
    })
}