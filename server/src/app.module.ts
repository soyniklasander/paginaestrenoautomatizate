import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { ContactModule } from './modules/contact/contact.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ConfigModule,
    AuthModule,
    UsersModule,
    ProjectsModule,
    ContactModule,
  ],
})
export class AppModule {}