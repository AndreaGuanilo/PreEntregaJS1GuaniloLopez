alert ('A Polan le gustan muchas cosas, ayúdala a decidir qué hará esta semana')

const semana = []

let serie = prompt ('A ella le gusta ver series. ¿Le recomiendas una serie de comedia o una de drama?')

if (serie == '') { 
    alert ('Debes ingresar "comedia" o "drama".')
} else if (serie == 'comedia'){
    let comedia = prompt('¿Le recomiendas "Friends" o "Seinfeld"?')
    if (comedia == ''){
        alert ('Debes ingresar "Friends" o "Seinfeld".')
    }else if ((comedia == 'Friends') || (comedia == 'Seinfeld')) {
        alert ('¡Excelente elección!')
        let serieElegida = 'Polan verá una maratón de '+ comedia
        semana.push(serieElegida)
    }
}else if (serie == 'drama'){
    let drama = prompt('¿Le recomiendas "Severance" o "The Bear"?')
    if (drama == ''){
        alert ('Debes ingresar "Severance" o "The Bear".')
    }else if ((drama == 'Severance') || (drama == 'The Bear')) {
        alert ('¡Excelente elección!')
        let serieElegida = 'Polan verá una maratón de '+ drama
        semana.push(serieElegida)
    }
}

let music = Number(prompt ('A Polan le gusta Taylor Swift pero no sabe si viajar a Argentina para verla en concierto o ver su película en el cine. ¿Cuántos soles (dinero) debería gastar? Escribe un monto'))

if (music == '') { 
    alert ('Debes ingresar un monto.')
} else if (music >= 2000){
    alert ('¡Polan viajará a Argentina e irá al concierto!')
    let concierto = '¡Polan viajará a Argentina e irá al concierto!'
    semana.push(concierto)
} else if (music < 80){
    alert ('Polan escuchará a Taylor Swift en Spotify y la verá en YouTube')
    let concierto = 'Polan escuchará a Taylor Swift en Spotify y la verá en YouTube'
    semana.push(concierto)
} else if (music < 100){
    alert ('Polan irá al cine a ver el concierto de Taylor Swift')
    let concierto = 'Polan irá al cine a ver el concierto de Taylor Swift'
    semana.push(concierto)
} else if (music < 300){
    alert ('Polan irá al cine a ver el concierto de Taylor Swift y comprará mucho merchandising')
    let concierto = 'Polan irá al cine a ver el concierto de Taylor Swift y comprará mucho merchandising'
    semana.push(concierto)
} else if (music < 2000){
    alert ('Polan hará turnos extras en el trabajo para juntar más dinero')
    let concierto = 'Polan hará turnos extras en el trabajo para juntar más dinero e ir al concierto'
    semana.push(concierto)
} 

alert ('A Polan le encanta la repostería, vamos a ayudarla a decidir qué hacer dependiendo de los ingredientes que le prestes.')

function dessert (ingrediente1, ingrediente2){
    if (((ingrediente1 == 'leche') || (ingrediente1 == 'harina'))&&((ingrediente2 == 'leche') || (ingrediente2 == 'harina'))) {
        alert ('Polan preparará un delicioso Bizcocho')
        let postre = 'Polan preparará un delicioso Bizcocho'
        semana.push(postre)
    } else if (((ingrediente1 == 'leche') || (ingrediente1 == 'azucar'))&&((ingrediente2 == 'leche') || (ingrediente2 == 'azucar'))) {
        alert ('Polan preparará una Leche asada buenísima')
        let postre = 'Polan preparará una Leche asada buenísima'
        semana.push(postre)
    } else if (((ingrediente1 == 'harina') || (ingrediente1 == 'azucar'))&&((ingrediente2 == 'harina') || (ingrediente2 == 'azucar'))) {
        alert ('Polan hará media docena de cupcakes')
        let postre = 'Polan hará media docena de cupcakes'
        semana.push(postre)
    }
}

let ingrediente1 = prompt('Escoge un ingrediente para prestarle: leche, harina o azucar')
let ingrediente2 = prompt('Escoge un ingrediente diferente al anterior: leche, harina o azucar')

dessert (ingrediente1, ingrediente2)

alert ('¡Muchas gracias por tu ayuda! A continuación podrás ver las actividades de Polan:')

alert (semana.join(' - ') + '\nTambien puedes ver la lista en la consola')
console.table(semana)