function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}




$(document).ready(function(){

    mostrarTodosJSON(); //se van a mostrar todas las zapatillas
});
function mostrarTodosJSON(){
    $.ajax({

        type: "GET",
        url: "data (1).json",
        dataType: "json",
        async: true,
        success: function(data){
            
           mostrarTodos(data)

        }

    });
}

$("#estadisticas").hide() // oculta sección de estadisticas
mostrarTodosJSON(); //se van a mostrar todas las zapatillas
$("#botonLimpiar").click(function(e){
    e.preventDefault();
    limpiar();
});



$("#botonMostrarTodos").click(function(e){
    e.preventDefault();
    limpiar();
    mostrarTodosJSON();
    $("#pictures-container").show() // muestra sección contenido
    $("#estadisticas").hide() // oculta sección de estadisticas
});

$("#mostrarEstadisticas").click(function(e){
    e.preventDefault();
    
    // mostrarEstadisticas();
    $("#pictures-container").hide() // oculta sección contenido
    $("#estadisticas").show() // muestra sección de estadisticas
});

  
  function limpiar(){
      $("#pictures-container").empty();
  }

  function buscarZapatillasJSON(){
    $.ajax({

        type: "GET",
        url: "data (1).json",
        dataType: "json",
        async: true,
        success: function(data){
            console.log("data-->", data)
           mostrarTodos(data)

        }

    });
}




















function mostrarTodos(data){
    
    for(let i=0; i<data.zapatillas.length;i++){
        var zapatillas = data.zapatillas[i];
        crearCard(zapatillas);
    }
}

function crearCard(zapatillas){
    //creando la cartilla del pokemon
    let divCard = $("<div></<div>");
    divCard.addClass("card");

    //creando el numero y nombre del pokemon
    let name = $("<h3></h3>");
    name.append(zapatillas.id+".- "+zapatillas.name+".");
    name.addClass("name");

    //creando la imagen del pokemon
    let imag = $("<img></img>");
    imag.attr("src",zapatillas.imag);

    // creando la informacion del pokemon
    let category = $("<p></p>");
    category.append("<b>Categoría:</b> "+zapatillas.category);
    category.addClass("category");

    let brand = $("<p></p>");
    brand.append("<b>Marca:</b> "+zapatillas.brand);
    brand.addClass("brand");

    let precio = $("<p></p>");
    precio.append("<b>Precio:</b> "+ "S/. "+zapatillas.precio);
    precio.addClass("precio");

    let is_in_inventory = $("<p></p>");
    is_in_inventory.append("<b>Está en inventario:</b> "+zapatillas.is_in_inventory);
    is_in_inventory.addClass("is_in_inventory");

    let items_left = $("<p></p>");
    items_left.append("<b>Artículos restantes:</b> "+zapatillas.items_left);
    items_left.addClass("items_left");

    let slug = $("<p></p>");
    slug.append("<b>Nombre:</b> "+zapatillas.slug);
    slug.addClass("slug");
    
    let featured = $("<p></p>");
    featured.append("<b>Destacados:</b> "+zapatillas.featured);
    featured.addClass("featured");


    divCard.append(name);//colocando el num y nombre del pok en la cartilla
    divCard.append(imag);//colocando la imagen del pok en la cartilla
    divCard.append(category);//colocando la info del pok en la cartilla
    divCard.append(brand);//colocando el num y nombre del pok en la cartilla
    divCard.append(precio);//colocando la imagen del pok en la cartilla
    divCard.append(is_in_inventory);//colocando la info del pok en la cartilla divCard.append(name);//colocando el num y nombre del pok en la cartilla
    divCard.append(items_left);//colocando la imagen del pok en la cartilla
    divCard.append(slug);//colocando la info del pok en la cartilla
    divCard.append(featured);


    $("#pictures-container").append(divCard); //agregando la cartilla al contenedor principal
}



document.getElementById("search-button").addEventListener("click", function() {
    // Obtener el valor del input de búsqueda
    const searchValue = document.getElementById("search-input").value;
  
  
    // Mostrar los resultados
    displayResults(searchValue);
  });
  
  function displayResults(searchValue) {
    const picturesContainer = document.getElementById("pictures-container");
  
    // Limpiar los resultados previos
    picturesContainer.innerHTML = "";
  
    // Obtener los resultados de la Big Data basados en la búsqueda
    var resultsFilter = results[0].zapatillas.filter(result => {
      return result.nombre == searchValue
    })
    var resultFilterResponse = resultsFilter[0]
    picturesContainer.innerHTML= `
      <div class="card">
        <h3 class="name">${resultFilterResponse.name.id}</h3>
        <p class="brand"><b>Marca:</b> ${resultFilterResponse.brand}</p>
        <p class="category"><b>Categoría:</b> ${resultFilterResponse.category}</p>
        <p class="precio"><b>Precio:</b> ${resultFilterResponse.precio}</p>
        <img src="${resultFilterResponse.imag}">
        <p class="is_in_inventory"><b>Está en inventario:</b> ${resultFilterResponse.is_in_inventory}</p>
        <p class="items_left"><b>Artículos restantes:</b> ${resultFilterResponse.items_left}</p>
        <p class="slug"><b>Nombre:</b> ${resultFilterResponse.slug}</p>
        <p class="featured"><b>Destacados:</b> ${resultFilterResponse.featured}</p>
        
      </div>
    `
  }