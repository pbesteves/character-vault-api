/*
  Warnings:

  - You are about to drop the column `systemId` on the `character` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `character` table. All the data in the column will be lost.
  - You are about to drop the `system` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `accountId` to the `character` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "character" DROP CONSTRAINT "character_systemId_fkey";

-- DropForeignKey
ALTER TABLE "character" DROP CONSTRAINT "character_userId_fkey";

-- AlterTable
ALTER TABLE "character" DROP COLUMN "systemId",
DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT NOT NULL;

-- DropTable
DROP TABLE "system";

-- AddForeignKey
ALTER TABLE "character" ADD CONSTRAINT "character_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
