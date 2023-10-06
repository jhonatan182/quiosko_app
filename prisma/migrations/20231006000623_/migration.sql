-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(191) NOT NULL,
    "icono" VARCHAR(191) NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(191) NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "imagen" VARCHAR(191) NOT NULL,
    "categoriaid" INTEGER NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orden" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "pedido" JSONB NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaid_fkey" FOREIGN KEY ("categoriaid") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
