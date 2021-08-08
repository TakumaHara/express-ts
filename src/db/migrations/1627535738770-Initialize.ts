import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1627535738770 implements MigrationInterface {
    name = 'Initialize1627535738770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `express_ts`.`user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `express_ts`.`user`");
    }

}
