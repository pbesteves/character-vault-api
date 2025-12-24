/*
  Warnings:

  - Added the required column `systemName` to the `character` table without a default value. This is not possible if the table is not empty.
  - Added the required column `systemVersion` to the `character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character" ADD COLUMN     "systemName" TEXT NOT NULL,
ADD COLUMN     "systemVersion" INTEGER NOT NULL;
