import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATIONS_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'notifications',
            brokers: ['kafka:9092'],
          },
          consumer: {
            groupId: 'notifications-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
