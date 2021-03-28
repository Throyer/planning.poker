export const started = (port: number | string): void =>
  console.log(
    `\n🚀️ started on http://localhost:${port}\n🚨️ environment: ${process.env.NODE_ENV}`,
  );
