### En el proyecto se realizó lo siguiente:

#### Endpoints usados:

1. Se podrá visualizar la información más reciente
2. Se podrá visualizar la información popular
3. Se podrán visualizar información de cada uno de los items disponibles (imágenes y videos)
4. Se podrá buscar información específica por medio de un input (imágenes y videos)

Para acceder a las imágenes y videos recientes y populares se hizo uso de la siguiente url base:
>https://images-assets.nasa.gov

Aunque también puede accederse a los datos por medio de la url:
>https://images-api.nasa.gov/asset/?orderby=popular

Sin embargo la segunda opción muestra una diferencia en tiempo significativa en comparación con la primera url. Por lo que decidí hacer uso de la primera opción.

Luego para acceder a los assets y metadatos se usó la siguiente url:
>https://images-api.nasa.gov

#### Extras

Por otro lado dentro del proyecto se puede encontrar
1. Routing
2. Modularización
3. Componentes
4. Tipado de codigo, implementación de interfaces y constantes
5. Uso de Primeng para el manejo de responsive y un poco de estilos
6. Creación de servicio para peticiones http
7. Pagina 404
8. Validaciones cuando no se encuentran coincidencias con una búsqueda

Para correr el proyecto primero se debe clonar el repositorio con comando
>  git clone https://github.com/MarielaRH/nasa-technical-test.git

Y luego ejecutar el comando 
> npm install

Para que se instalen las dependencias necesarias para el funcionamiento del proyecto y por último basta con ejecutar
>ng serve

Este proyecto fue creado con 
>Angular 12.0.0
>NodeJs 12.14.1

