export const LINKS: Array<string> = [
  "Inicio",
  "Productos",
  "Marcas",
  "Nosotros",
  "Contáctanos",
];

interface Product {
  name: string;
  children?: Product[];
}

export const PRODUCTS: Product[] = [
  { name: "Eléctricos" },
  { name: "Energia Solar" },
  { name: "Cables eléctricos" },
  { name: "Hidraúlico" },
  { name: "Gasfitería (Agua)" },
  { name: "Gasfitería (Cocina - Baño)" },
  { name: "Línea HDPE" },
  { name: "Soplador Regenerativo" },
  { name: "Automatización Industrial" },
  { name: "Instrumental de nivel y medición" },
  { name: "Ferreteria Industrial" },
  { name: "Productos Forestales" },
  { name: "Implementos de seguridad y limpieza" },
];
