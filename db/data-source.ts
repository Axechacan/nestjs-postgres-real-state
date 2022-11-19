import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  database: 'realEstate_db',
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/db/migrations/*.{ts,js}'],
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  synchronize: false,
  logger: 'advanced-console',
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
