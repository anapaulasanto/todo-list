-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
