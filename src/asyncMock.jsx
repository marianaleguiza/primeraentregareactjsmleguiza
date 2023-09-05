const products =[
    {
        id: '1',
        name: 'Spring Suit Freelite',
        price: '59999',
        category: 'surf',
        img: 'https://www.cristobalcolon.com/fullaccess/item20508foto92103.jpg',
        stock: 10,
        description: 'Spring Suit Rip Curl Freelite 2.0mm. 100% neopreno E4 Costuras de alta elasticidad con puntada en E.',
        

    },
    {
        id: '2',
        name: 'Campera Rider Betty',
        price: '149999',
        img: 'https://www.cristobalcolon.com/fullaccess/item28160foto117770.jpg',
        stock: 10,
        category: 'snow',
        description: 'Campera Rip Curl Rider Betty. Poli sarga DWR 10K/10K. Membrana impermeable 10K/10K. Membrana RT Fortress 10K. Cuerpo de 100 gramos, mangas de 80 g de relleno de poliéster. Tratamiento repelente al agua DWR. Costura crítica sellada. Corte normal.',
        

    },
    {
        id: '3',
        name: 'Campera Dark And Stormy',
        price: '44999',
        category: 'urban',
        img: 'https://www.cristobalcolon.com/fullaccess/item29297foto121128.jpg',
        stock: 10,
        description: ' Campera Rip Curl Dark And Stormy de SHERPA DOBLE SOFT • Relaxed fit • Zip hood • Cordon a Tono • Regulable en Cintura • Elastico y tanca • Multietiquetas • 100% Poliester',
        

    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}


export const getProductById = (id) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod=>prod.category === categoryId));
        }, 500);
    });
};
