export const LINKS: Array<string> = [
  "Inicio",
  "Productos",
  "Marcas",
  "Nosotros",
  "Contáctanos",
];

interface Product {
  name: string;
  url: string;
  img: string;
}

export const PRODUCTS: Product[] = [
  { name: "Eléctricos", url: "#", img: "products/electricos.webp" },
  { name: "Energia Solar", url: "#", img: "products/energia-solar.webp" },
  {
    name: "Cables eléctricos",
    url: "#",
    img: "products/cables-electricos.webp",
  },
  { name: "Hidraúlico", url: "#", img: "products/hidraulico.webp" },
  {
    name: "Gasfitería (Agua)",
    url: "#",
    img: "products/gasfiteria-agua.webp",
  },
  {
    name: "Gasfitería (Cocina - Baño)",
    url: "#",
    img: "products/gasfiteria-cocina-banio.webp",
  },
  { name: "Línea HDPE", url: "#", img: "products/HDPE.webp" },
  {
    name: "Soplador Regenerativo",
    url: "#",
    img: "products/soplador-regenerativo.webp",
  },
  {
    name: "Automatización Industrial",
    url: "#",
    img: "products/automatizacion-industrial.webp",
  },
  {
    name: "Instrumental de nivel y medición",
    url: "#",
    img: "products/instrumental-nivel-medicion.webp",
  },
  {
    name: "Ferreteria Industrial",
    url: "#",
    img: "products/ferreteria-industrial.webp",
  },
  {
    name: "Productos Forestales",
    url: "#",
    img: "products/productos-forestales.webp",
  },
  {
    name: "Implementos de seguridad y limpieza",
    url: "#",
    img: "products/productos-seguridad.webp",
  },
  { name: "Papelería", url: "#", img: "products/papeleria.webp" },
];
