---
layout: ../../layouts/BlogPostLayout.astro
title: Cómo crear modales fácilmente con dialog
description: Descubre como crear modales fácilmente con dialog, la etiqueta HTML que nos permite crear modales sin necesidad de usar javascript
extract: Descubre como crear modales fácilmente con dialog, la etiqueta HTML que nos permite crear modales sin necesidad de usar javascript
image: '/assets/images/posts/modales-facilmente-dialog.jpg'
category: 'html'
createdAt: 2023-04-27
slug: modales-facilmente-dialog
---

Hoy vamos a hablar de una etiqueta nativa de <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank">HTML5</a> que puede hacer que nuestros sitios web sean aún más interesantes y útiles: ¡la etiqueta _"dialog"_!

La etiqueta _"dialog"_ es una etiqueta <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank">HTML5</a> que nos permite crear ventanas emergentes personalizadas en nuestros sitios web. ¿Recuerdas esas ventanas emergentes que aparecen en algunos sitios web cuando haces clic en un botón o enlace? Bueno, la etiqueta _"dialog"_ te permite crear esas ventanas emergentes con muy poco esfuerzo.

El uso de la etiqueta _"dialog"_ es muy sencillo. Todo lo que necesitas hacer es crear una etiqueta _"dialog"_ en tu <a href="https://developer.mozilla.org/es/docs/Glossary/HTML" target="_blank">HTML</a> y luego agregar algún contenido dentro de ella. Luego, puedes usar <a href="https://developer.mozilla.org/es/docs/Glossary/JavaScript" target="_blank">JavaScript</a> para mostrar u ocultar la ventana emergente cuando sea necesario.

Aquí hay un ejemplo de cómo se ve el código <a href="https://developer.mozilla.org/es/docs/Glossary/HTML" target="_blank">HTML</a> para crear una ventana emergente usando la etiqueta _"dialog"_:

```html
<dialog id="myModal">
  <h1>¡Hola!</h1>
  <p>Esta es una ventana emergente personalizada.</p>
  <button onclick="closeModal()">Cerrar</button>
</dialog>
```

En este ejemplo, creamos una etiqueta _"dialog"_ con el ID **"myModal"**. Dentro de la etiqueta _"dialog"_, agregamos un encabezado H1 y un párrafo que contiene nuestro mensaje personalizado. También agregamos un botón para cerrar la ventana emergente, que se activará cuando se haga clic en él.

Para mostrar u ocultar la ventana emergente, podemos usar <a href="https://developer.mozilla.org/es/docs/Glossary/JavaScript" target="_blank">JavaScript</a> para llamar a las funciones **"showModal()"** y **"closeModal()"** en la etiqueta _"dialog"_. Aquí hay un ejemplo de cómo podríamos hacerlo:

```js
function showModal() {
  let modal = document.querySelector('#myModal')
  modal.showModal()
}

function closeModal() {
  let modal = document.querySelector('#myModal')
  modal.close()
}
```

En este ejemplo, creamos dos funciones de <a href="https://developer.mozilla.org/es/docs/Glossary/JavaScript" target="_blank">JavaScript</a>: **"showModal()"** y **"closeModal()"**. La función **"showModal()"** llama a la función **"showModal()"** en la etiqueta _"dialog"_, que muestra la ventana emergente en la pantalla. La función **"closeModal()"** llama a la función "close()" en la etiqueta _"dialog"_, que oculta la ventana emergente.

Como puedes ver, la etiqueta _"dialog"_ es una herramienta útil para crear ventanas emergentes personalizadas en tus sitios web. ¡Atrévete a experimentar y crea tus propias ventanas emergentes personalizadas para darle a tus usuarios una experiencia única y atractiva!
