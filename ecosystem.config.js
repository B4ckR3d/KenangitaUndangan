module.exports = {
  apps: [
    {
      name: "undangan-next",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "./",
      instances: 1, // Menggunakan 1 instance (fork) agar optimal dan aman dengan database SQLite
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
