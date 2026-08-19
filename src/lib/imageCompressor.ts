/**
 * Client-Side Image Compression & Normalization Helper
 * Mengompresi dan menstandarisasi foto sebelum di-upload agar:
 * 1. Tidak korup / rusak saat transmisi jaringan
 * 2. Cepat di-upload (< 1 detik, ukuran optimal ~300KB - 800KB)
 * 3. Resolusi tetap tajam (Max width/height 1920px)
 * 4. Kompatibel dengan semua browser & server VPS
 */

export async function compressImageFile(file: File, maxWidth = 1920, maxHeight = 1920, quality = 0.85): Promise<File> {
  // Jika bukan tipe gambar raster (misal SVG atau GIF animasi), kembalikan langsung
  if (!file.type.startsWith("image/") || file.type === "image/gif" || file.type === "image/svg+xml") {
    return file;
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        // Hitung skala rasio agar tidak melebihi maxWidth/maxHeight
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(file);
          return;
        }

        // Draw image ke canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Export sebagai JPEG dengan kualitas optimal
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              resolve(file);
              return;
            }

            const cleanFileName = file.name.replace(/\.[^/.]+$/, "") + ".jpg";
            const compressedFile = new File([blob], cleanFileName, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });

            resolve(compressedFile);
          },
          "image/jpeg",
          quality
        );
      };

      img.onerror = () => {
        resolve(file);
      };
    };

    reader.onerror = () => {
      resolve(file);
    };
  });
}
