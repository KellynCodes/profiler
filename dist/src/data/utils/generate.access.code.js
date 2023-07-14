"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateAccessCode = void 0;
class GenerateAccessCode {
    generateTrackingCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomText = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomText += characters.charAt(randomIndex);
        }
        const randomNumber = Math.floor(Math.random() * 9000000);
        return `${randomNumber}${randomText}`;
    }
}
exports.GenerateAccessCode = GenerateAccessCode;
//# sourceMappingURL=generate.access.code.js.map