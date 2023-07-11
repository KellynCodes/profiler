import { setupSwagger } from 'config/swagger.config';
import { HttpExceptionFilter } from './middleware/exceptionHandler';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './controllers/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'http://profiler.netlify.app', // Replace with your allowed origin(s)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Set this to true if your app uses sessions/authentication
    allowedHeaders: 'Content-Type, Accept',
  });

  // Enable global validation pipe
  //app.useGlobalPipes(new ValidationPipe());

  setupSwagger(app);
  const PORT: number | string = 5000 || process.env.PORT;
  await app.listen(PORT);
  console.log(`ProfileInfo is running on port ${PORT}`);
}
bootstrap();
