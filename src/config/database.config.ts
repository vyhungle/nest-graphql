// config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'ep-snowy-truth-a12mkumn.ap-southeast-1.aws.neon.tech', // Địa chỉ host PostgreSQL
  port: 5432, // Cổng PostgreSQL
  username: 'neondb_owner', // Tên đăng nhập PostgreSQL
  password: 'cwRKkI2qeLT4', // Mật khẩu PostgreSQL
  database: 'neondb', // Tên cơ sở dữ liệu
  autoLoadEntities: true, // Tự động load các entity
  synchronize: true, // Tự động đồng bộ bảng (Chỉ dùng trong phát triển)
  ssl: true, // Sử dụng SSL
};
