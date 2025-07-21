# CustomWatches - Página Web Oficial

![Estado](https://img.shields.io/badge/estado-activo-brightgreen)
![Alojamiento](https://img.shields.io/badge/alojado%20en-GitHub%20Pages-blue)
[![Web](https://img.shields.io/badge/ver%20web-online-blueviolet)]

(https://www.CustomWatches.es) Este repositorio contiene el código fuente completo de la página web estática para **CustomWatches**, mi proyecto personal de venta de relojes Seiko Mod artesanales.

---

## 📜 Descripción

El objetivo de esta web es servir como catálogo principal y punto de contacto para clientes interesados en adquirir un reloj Seiko modificado, ensamblado a mano con componentes de alta calidad. La web está diseñada para ser limpia, minimalista y transmitir la confianza y la pasión de un trabajo artesanal.

**La web está actualmente activa y se puede visitar en:** [***www.CustomWatches*.es**](https://www.CustomWatches.es)

 ## ✨ Características Principales

* **Galería de Productos:** Muestra los relojes disponibles con un carrusel de imágenes en cada tarjeta.
* **Páginas de Detalle:** Fichas de producto individuales con especificaciones técnicas completas, descripción y múltiples vías de contacto.
* **Diseño Responsive:** Totalmente adaptado para una correcta visualización en dispositivos móviles, tablets y ordenadores.
* **Secciones de Confianza:** Páginas como "Mi Filosofía" y una sección de valoraciones en la página principal para mostrar la reputación y generar confianza.
* **Formulario de Contacto Funcional:** Integrado con [Formspree](https://formspree.io/) para recibir consultas directamente en mi correo electrónico.
* **Optimización SEO Básica:** Implementación de títulos, meta descripciones, texto alternativo en imágenes y sitemap para mejorar la visibilidad en Google.

## 🛠️ Tecnologías Utilizadas

* **Frontend:**
    * HTML5
    * CSS3 (uso intensivo de Flexbox y Grid)
    * JavaScript (Vanilla JS)
* **Servicios Externos:**
    * **Formularios:** [Formspree](https://formspree.io/)
    * **Alojamiento (Hosting):** [GitHub Pages](https://pages.github.com/)


## 🚀 Cómo Añadir un Nuevo Reloj

Para añadir un nuevo producto a la web, sigue estos pasos:
1.  **Crea el archivo de detalle:** Copia un archivo existente de la carpeta `detalles/` (ej. `detalle-daytona-panda.html`) y renómbralo.
2.  **Modifica el contenido:** Actualiza el título, la descripción, las especificaciones, las imágenes y los enlaces de contacto (`WhatsApp`, `Email`) dentro del nuevo archivo.
3.  **Sube las imágenes:** Crea una nueva carpeta para las fotos del reloj dentro de `img/` y súbelas allí.
4.  **Añádelo al `index.html`:** En la sección `<section id="watches">`, añade una nueva `<div class="card">` para el reloj, enlazando a su nueva página de detalle y actualizando su título, descripción corta y las rutas de las imágenes del carrusel.
5.  **Actualiza el `sitemap.xml`:** Añade la URL de la nueva página de detalle al sitemap para que Google la encuentre.

## ✍️ Autor

* **Manuel** - Creador y artesano de CustomWatches.

---
© 2025 Manuel - CustomWatches. Todos los derechos reservados.
https://9mbr6.github.io/CustomWatchesWeb/

