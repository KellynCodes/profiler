"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_config_1 = require("../config/swagger.config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./controllers/app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://profiler.netlify.app',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept',
    });
    (0, swagger_config_1.setupSwagger)(app);
    const PORT = 5000 || process.env.PORT;
    await app.listen(PORT);
    console.log(`ProfileInfo is running on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map