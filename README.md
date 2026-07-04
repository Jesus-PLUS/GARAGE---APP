# Mi Garage 🚗

**Bitácora inteligente de mantenimiento vehicular.** Una aplicación web que centraliza el cuidado de tu auto: registra tu vehículo y la app te dice qué mantenimiento toca, cuándo, cuánto cuesta aproximadamente y dónde comprar las refacciones — para que el mantenimiento preventivo deje de depender de tu memoria o de leer un manual de cientos de páginas.

## El problema

La mayoría de la gente da mantenimiento **correctivo** (cuando algo ya falló) en lugar de **preventivo** (programado), porque llevar el seguimiento tiene fricción: hay que saber qué toca, llevar cuentas y acordarse. Mi Garage elimina esa fricción haciendo el seguimiento por ti, ayudando a que tu auto dure más y a evitar reparaciones costosas.

## Características (MVP)

- 🔧 **Seguimiento de mantenimiento** personalizado a tu modelo, ordenado por urgencia (vencido / próximo / al día).
- 📊 **Cálculo inteligente** de servicios próximos según kilometraje (proyectado por tu uso mensual) y tiempo.
- 📝 **Bitácora de servicios** realizados, con kilometraje y costo, exportable como registro personal.
- 🛒 **Enlaces a refacciones** justo cuando las necesitas.
- ⚠️ **Avisos específicos** por generación y por tipo de tracción (FWD/AWD).

## Stack tecnológico

**Backend:** Python · FastAPI · SQLAlchemy · PostgreSQL · Alembic · JWT
**Frontend:** React · TypeScript · Vite · Tailwind CSS (PWA)
**Infraestructura:** Docker · Docker Compose

## Estado del proyecto

🚧 En desarrollo — Fase 1 (MVP). Enfocado inicialmente en el mercado mexicano.

## Arquitectura

Separación estricta entre el **catálogo** de datos de mantenimiento (curado y verificado) y los **datos del usuario** (su garage), con el motor de cálculo en el backend como fuente única de verdad. Ver [documento de arquitectura](./docs/ARQUITECTURA_Fase1.md) para más detalle.

---

> Producto independiente. No afiliado ni respaldado por ningún fabricante. Las marcas mencionadas pertenecen a sus respectivos dueños.