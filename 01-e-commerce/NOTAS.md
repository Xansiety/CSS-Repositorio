Aplicar estilos apuntando a una etiqueta

```CSS
h1 {
  color: #000; */
 color: rgb(83 , 85, 126, .5); */
}
```

aplica a todos los span dentro de h1 por ejemplo

```CSS
h1 span {
 color: #037bc0;
}
```

mayor especifidad, tiene mayor prioridad en el css

```CSS
 footer a {
text-transform: uppercase;
}
```

Transformar textos con CSS

```CSS
a {
text-transform: lowercase;
}
```

## SubSelectores

nos ayudan a seleccionar un cierto elemento

```CSS
 nav a:first-child {
    text-transform: uppercase;
    font-size: 50px;
}
```

Tamaño de letra
```CSS
  nav a:last-of-type {
    text-transform: uppercase;
    font-size: 50px;
  } 
```

Seleccionar el tercer hijo
```CSS
nav a:nth-child(3) {
text-transform: uppercase;
font-size: 50px;
}  
```



## Pseudo selectores 
!important no se recomienda usar pero se puede usar para que tenga la mayor prioridad
```CSS
 nav a {
 text-transform: uppercase!important; 
 text-transform: uppercase;
 } 
```

las clases tiene mayor prioridad que las etiquetas y es mas recomendado usar esto sobre id
```CSS
.navegacion a {
text-transform: lowercase;
} 
```
 
 los id tienen mayor peso

 ```CSS
 #navegacion a {
text-transform: capitalize;
} 
``` 

```CSS
.enlace {
text-transform: uppercase;
font-weight: bold;
text-decoration: none;
color: #037bc0;
}
```
 
## Tipos de escritura de CSS: Módulos, BEM, SMACSS 
### Módulos 
```CSS
.navegacion {
background-color: #e1e1e1;
}

.navegacion a {
text-transform: uppercase;
font-weight: bold;
text-decoration: none;
color: #037bc0;
} 
```
 
# Padding
Es el espacio que hay entre el contenido y el borde (hacia adentro del elemento)

# Margin
Es el espacio que hay entre el borde y el borde de otro elemento (Hacia afuera del elemento)_/

# Display
Puede tener 3 valores: inline, block, inline-block
```CSS
    block: un elemento se colocara por debajo de otro elemento sin importar su tamaño o contenido
```
```CSS
inline: un elemento se colocara del lado derecho una vez haya tomado el espacio que ocupa requiere
```
```CSS
inline-block: Permite darle width, height, margin, padding lo que no es posible dárselos a un elemento inline
```


# display inline y block 
por ejemplo a no puede modificarse su width, height, margin, padding, etc. pero si se puede con 
```CSS
display: inline-block;
```
p si puede modificarse su width, height, margin, padding, etc. debido a que están con block

inline-block
se puede modificar su width, height, margin, padding, etc.
```CSS
p {
background-color: red;
width: 200px;
height: 100px;
display: inline-block;
}
```

# BoxModel
Se compone de estos 4 importantes elementos

``` 
Contenido
Padding
Border
Margin
```
 
# BoxModel 
```CSS
sobre-nosotros {
background-color: red;
width: 200px;
padding: 25px;
/*box-sizing: border-box; para que el padding no se salga del contenedor */
}
.sobre-empresa {
background-color: blue;
width: 500px;
padding: 100px;
/*box-sizing: border-box; para que el padding no se salga del contenedor */
}
```
 
 # Flexbox
 Permite alinear los elemntos de forma horizontal o vertical
Se pueden colocar o distribuir elementos en dirección de fila(row), o columna(column),por defecto display-flex: es row

Flex, solo aplica a los primeros hijos
 ```CSS
flex-direction: column-reverse;
```

## ROW 
Los elementos se colocan uno al lado de otro

# Column 
Los elementos se colocan hacia abajo

Podemos modificar la direccion mediante 

 ```CSS
 
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;
```


## Justify Content
Si el row la dirección alinea el contenido de forma horizontal
Si es column el contenido es alineado directamente




 