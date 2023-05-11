import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [AuthModule, ConfigModule.forRoot(), SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}