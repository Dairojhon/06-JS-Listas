const compras = ["carnes", "Verduras", "Articulos de aseo", "huevos", "frutas"]
console.log(compras)
compras.push("Aceite de girasol")
console.log(compras)
compras.pop()
console.log(compras)

const peliculas =[
    {titulo: "Real Steel", director: "Shawn Levy", fecha: new Date(2011, 10, 06)},
    {titulo: "Star Wars: Episode I - The Phantom Menace", director: "George Lucas", fecha: new Date(1999, 05, 19)},
    {titulo: "Deadpool ", director: "Tim Miller", fecha: new Date(2016, 02, 11)}
]   

const pelispos2010= peliculas.filter(peli => peli.fecha.getFullYear()>2009)
console.log(pelispos2010)

const directors= peliculas.map(peli => peli.director)
console.log(directors);

const titulos = peliculas.map(peli => peli.titulo)
console.log(titulos)

const titulo_director=directors.concat(titulos)
console.log(titulo_director)

const titulo_director2=[...directors, ...titulos]
console.log(titulo_director2)