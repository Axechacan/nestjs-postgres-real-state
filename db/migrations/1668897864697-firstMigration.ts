import { MigrationInterface, QueryRunner } from "typeorm";

export class firstMigration1668897864697 implements MigrationInterface {
    name = 'firstMigration1668897864697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "house" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_8c9220195fd0a289745855fe908" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "house"`);
    }

}
