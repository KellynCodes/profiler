import { setupSwagger } from 'config/swagger.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './controllers/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'https://profiler-ui.netlify.app', // Replace with your allowed origin(s)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Set this to true if your app uses sessions/authentication
    allowedHeaders: 'Content-Type, Accept',
  });

  // Enable global validation pipe
  //app.useGlobalPipes(new ValidationPipe());

  setupSwagger(app);
  const PORT: number | string = process.env.PORT || 5000;
  await app.listen(PORT);
  console.log(`ProfileInfo is running on port ${PORT}`);
}
bootstrap();
