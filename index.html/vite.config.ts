import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';

function designUploadPlugin() {
  return {
    name: 'design-upload-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/upload-design', (req: any, res: any, next: any) => {
        if (req.method !== 'POST') return next();
        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const { targetFile, dataUrl } = JSON.parse(body);
            if (!targetFile || !dataUrl) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing targetFile or dataUrl' }));
              return;
            }
            const safeName = path.basename(targetFile);
            const designsDir = path.resolve(__dirname, 'public', 'designs');
            if (!fs.existsSync(designsDir)) {
              fs.mkdirSync(designsDir, { recursive: true });
            }
            const matches = dataUrl.match(/^data:([A-Za-z-+/]+);base64,(.+)$/);
            const base64Data = matches ? matches[2] : dataUrl;
            const buffer = Buffer.from(base64Data, 'base64');
            fs.writeFileSync(path.join(designsDir, safeName), buffer);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true, path: `/designs/${safeName}` }));
          } catch (err: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), designUploadPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
