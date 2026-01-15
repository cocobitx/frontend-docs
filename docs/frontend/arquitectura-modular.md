# <span style="display: flex;"><img src="/check.png" style="width: 38px; height: 38px; margin-right:10px"> Arquitectura modular</span>

La Arquitectura Modular es un enfoque de diseño de software que consiste en dividir un sistema en partes más pequeñas, independientes y autónomas llamadas módulos.

Cada módulo está diseñado para cumplir una función específica y puede conectarse con otros para formar un sistema completo. La clave es que cada pieza puede funcionar, probarse y mantenerse sin afectar necesariamente a las demás.


```md
https://www.mysite.com/dashboard/inventary/shoes
|_____________________||________||________||_____|
   Entrada principal     Modulo  Submodulo  Vista
         App.vue
``` 

Cada ruta se basara en un modulo, ahora para estructurar correctamente los modulos se clasificaran por 3 tipos segun la complejidad:

### Modular tipo 1
Cuando la aplicación no contiene submodulos y su complejidad es baja, se genera un modulo simple.

```md
https://www.mysite.com/home
                      |____|
                      Modulo
``` 
![Modular 1](/modular1.png)

### Modular tipo 2
Cuando la aplicacion ya contiene submodulos, es decir rutas con 2 niveles de profundidad.

```md
https://www.mysite.com/auth/login
https://www.mysite.com/auth/register
                      |____||______|
                      Modulo Submodulo
``` 
![Modular 2](/modular2.png)

### Modular tipo 3
Cuando la aplicacion contiene parametros, estos parametros seran tratados como vistas y no como modulos, ya
que conviven con el modulo.

```md
https://www.mysite.com/auth/login/{parametros}
https://www.mysite.com/auth/register/{parametros}
                      |____||_______||__________|
                      Modulo Submodulo   Vista
``` 
![Modular 3](/modular3.png)

### Cuando usar modulos, submodulos y vistas

Los modulos se utilizan principalmente para escalar el proyecto, cuando se tiene varias rutas donde cada ruta representa un modulo que trae todo lo necesario para renderizar

```md
https://www.mysite.com/module-a
https://www.mysite.com/module-b
``` 
los Submodulos se utilizan cuando el modulo principal tiene rutas hijas.
```md
https://www.mysite.com/module-a
https://www.mysite.com/module-a/submodule-a
https://www.mysite.com/module-a/submodule-b
https://www.mysite.com/module-b
``` 
y las vistas es cuando un modulo o submodulo genera parametros, ya que los parametros convive con el modulo en datos, servicios etc
```md
https://www.mysite.com/module-a/{params-a}
https://www.mysite.com/module-a/{params-b}
https://www.mysite.com/module-a/submodule-a/{params-a}
``` 
### Estructura global
cada modulo pueda hacer uso de los recursos exteriores sin el exterior depender del modulo, asi facilita la eliminacion de un modulo sin romper la aplicacion

![Estructura global](/estructura-global.png)