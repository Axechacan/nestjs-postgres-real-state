import { MigrationInterface, QueryRunner } from "typeorm";

export class addPhoto1668900663464 implements MigrationInterface {
    name = 'addPhoto1668900663464'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "houseId" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_54b7a2b78d5eafe45d36276b580" FOREIGN KEY ("houseId") REFERENCES "house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_54b7a2b78d5eafe45d36276b580"`);
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
