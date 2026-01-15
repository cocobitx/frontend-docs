# <span style="display: flex;"><img src="/check.png" style="width: 38px; height: 38px; margin-right:10px"> Arquitectura modular</span>

La Arquitectura Modular es un enfoque de diseño de software que consiste en dividir un sistema en partes más pequeñas, independientes y autónomas llamadas módulos.

Cada módulo está diseñado para cumplir una función específica y puede conectarse con otros para formar un sistema completo. La clave es que cada pieza puede funcionar, probarse y mantenerse sin afectar necesariamente a las demás.

Para estructurar los modulos se basaran en las rutas, cada ruta sera un modulo por el cual tendra todo lo necesario para renderizar esa vista.

```md
https://www.mysite.com/dashboard/inventory/{params}
|_____________________||________||________||______|
   Entrada principal     Modulo  Submodulo  Vista
         App.vue
``` 

#### Modulo
Cada ruta tiene un path principal, se crea un modulo para cada path inicial `/home`

![Modular 1](/modular1.png)

### Submodulo
El path inicial puede contener rutas hijas, por lo tanto se convierte en submodulos del modulo principal 
`/auth/login` y `/auth/register`

![Modular 2](/modular2.png)

### Vista
Los path pueden contener parametros, estos parametros seran vistas unicamente del modulo o submodulo
`auth/login/{params}` o `auth/{params}`, el nivel de profundidad no es importante, si se agrega un `/{params}` sera visto como una vista.

![Modular 3](/modular3.png)

### En funcionamiento
Cada modulo puede hacer uso de los recursos exteriores u otros modulos del exterior sin el exterior depender del modulo, asi facilita la eliminacion de un modulo sin romper la aplicacion. En el siguiente paso se explicara a detalle la estructura de las carpetas.

![Estructura global](/modular-flow.png)