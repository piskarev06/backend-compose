import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
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
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.startAllMicroservices();

  await app.listen(3001);
}
bootstrap();
