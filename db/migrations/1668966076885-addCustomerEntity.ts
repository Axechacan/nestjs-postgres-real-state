import { MigrationInterface, QueryRunner } from "typeorm";

export class addCustomerEntity1668966076885 implements MigrationInterface {
    name = 'addCustomerEntity1668966076885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "house" ADD "customerId" integer`);
        await queryRunner.query(`ALTER TABLE "house" ADD CONSTRAINT "FK_860e8232718fc9b86399a3ce694" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "house" DROP CONSTRAINT "FK_860e8232718fc9b86399a3ce694"`);
        await queryRunner.query(`ALTER TABLE "house" DROP COLUMN "customerId"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
