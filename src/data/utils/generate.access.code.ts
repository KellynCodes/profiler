export class GenerateAccessCode {
  public generateAccessCode(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }

    const randomNumber = Math.floor(Math.random() * 9000000); // Generate a random number between 0 and 99
    return `${randomNumber}${randomText}`;
  }
}
