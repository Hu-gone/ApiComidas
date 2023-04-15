function prueba1() {
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken%20Couscous')
    .then(response => response.json())
    .then(datos => {

        console.log('la Api Comidas Funciona');
        console.log(datos);

        let nombrePlato = datos.meals[0].strMeal;
        let categoriaPlato = datos.meals[0].strCategory;
        let areaPlato = datos.meals[0].strArea;
        let imagenPlato = datos.meals[0].strMealThumb;
        let recetaPlato = datos.meals[0].strInstructions;


        setTimeout(() => {
            console.log('El nombre del plato es:', nombrePlato);
            console.log('La categoria del plato es:', categoriaPlato);
            console.log('El area del plato es:', areaPlato);
            console.log('La receta del plato es:', recetaPlato);


            let textoNombre = document.getElementById('nombrePlato');
            textoNombre.innerHTML = nombrePlato;

            let textoCategoria = document.getElementById('categoriaPlato');
            textoCategoria.innerHTML = categoriaPlato;

            let textoArea = document.getElementById('areaPlato');
            textoArea.innerHTML = areaPlato;

            let textoReceta = document.getElementById('recetaPlato');
            textoReceta.innerHTML = recetaPlato;
            
            let etiquetaImagen = document.getElementById('imagenPlato');
            etiquetaImagen.src = imagenPlato;

        
        }, '2000');

    })
    .catch();
}





function prueba2() {
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Drop')
    .then(response => response.json())
    .then(datos => {

        console.log('la Api Comidas Funciona');
        console.log(datos);

        let nombrePlato = datos.meals[0].strMeal;
        let categoriaPlato = datos.meals[0].strCategory;
        let areaPlato = datos.meals[0].strArea;
        let imagenPlato = datos.meals[0].strMealThumb;
        let recetaPlato = datos.meals[0].strInstructions;


        setTimeout(() => {
            console.log('El nombre del plato es:', nombrePlato);
            console.log('La categoria del plato es:', categoriaPlato);
            console.log('El area del plato es:', areaPlato);
            console.log('La receta del plato es:', recetaPlato);


            let textoNombre = document.getElementById('nombrePlato');
            textoNombre.innerHTML = nombrePlato;

            let textoCategoria = document.getElementById('categoriaPlato');
            textoCategoria.innerHTML = categoriaPlato;

            let textoArea = document.getElementById('areaPlato');
            textoArea.innerHTML = areaPlato;

            let textoReceta = document.getElementById('recetaPlato');
            textoReceta.innerHTML = recetaPlato;
            
            let etiquetaImagen = document.getElementById('imagenPlato');
            etiquetaImagen.src = imagenPlato;

        
        }, '2000');

    })
    .catch();
}


function prueba3() {
    
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=brioche')
    .then(response => response.json())
    .then(datos => {

        console.log('la Api Comidas Funciona');
        console.log(datos);

        let nombrePlato = datos.meals[0].strMeal;
        let categoriaPlato = datos.meals[0].strCategory;
        let areaPlato = datos.meals[0].strArea;
        let imagenPlato = datos.meals[0].strMealThumb;
        let recetaPlato = datos.meals[0].strInstructions;


        setTimeout(() => {
            console.log('El nombre del plato es:', nombrePlato);
            console.log('La categoria del plato es:', categoriaPlato);
            console.log('El area del plato es:', areaPlato);
            console.log('La receta del plato es:', recetaPlato);


            let textoNombre = document.getElementById('nombrePlato');
            textoNombre.innerHTML = nombrePlato;

            let textoCategoria = document.getElementById('categoriaPlato');
            textoCategoria.innerHTML = categoriaPlato;

            let textoArea = document.getElementById('areaPlato');
            textoArea.innerHTML = areaPlato;

            let textoReceta = document.getElementById('recetaPlato');
            textoReceta.innerHTML = recetaPlato;
            
            let etiquetaImagen = document.getElementById('imagenPlato');
            etiquetaImagen.src = imagenPlato;

        
        }, '2000');

    })
    .catch();
}