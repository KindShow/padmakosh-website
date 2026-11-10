import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/images/gallery');
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// Curated selection of 12 representative photos from the 35 Drive images
const selectedPhotos = [
  { filename: 'KAU_0072.jpg', driveId: '1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_' },
  { filename: 'KAU_0159.jpg', driveId: '1-JtipXTqho2DPpoWdBirSoKZuCpFQnLA' },
  { filename: 'KAU_0205.jpg', driveId: '1ibs1Mk_errwlXQO7Kd_NpUC7FlkMOF_T' },
  { filename: 'KAU_0235.jpg', driveId: '10CwMSaqIjTz5urOsOw48i1Rj0YEeJlXX' },
  { filename: 'KAU_0258.jpg', driveId: '1Li6_wgv5aAlptUTxCVpz_Z8JhudF6zBg' },
  { filename: 'KAU_6108.jpg', driveId: '1rB6JywiUdwVS5azQk1bGmL8OwjYVEvy5' },
  { filename: 'KAU_6116.jpg', driveId: '1Tu0ImWXcG_esTsQFAqDTQEYt5yAofcHH' },
  { filename: 'KAU_6129.jpg', driveId: '16v9uP4SUzzLOSShA_podMnPnLLdlBmK-' },
  { filename: 'KAU_6171.jpg', driveId: '1p4L3DYczEdVoeciYb2xY6dNEw1kBObEg' },
  { filename: 'KAU_6201.jpg', driveId: '1ow0taLDjiWXiXOWI4zB36Hk3mtOXVE8V' },
  { filename: 'KAU_6227.jpg', driveId: '1HGpx0sUv7OjiWM9h05ZMiIxJraGEvDuL' },
  { filename: 'KAU_6262.jpg', driveId: '1ivrLtsA0qBll_uvh6UrYe8R-woDIReDi' },
];

console.log(`Starting download of ${selectedPhotos.length} photos into ${outDir}...`);

for (const photo of selectedPhotos) {
  const targetPath = path.join(outDir, photo.filename);
  if (existsSync(targetPath)) {
    console.log(`✓ Exists: ${photo.filename}`);
    continue;
  }
  console.log(`Downloading ${photo.filename}...`);
  try {
    const url = `https://drive.usercontent.google.com/download?id=${photo.driveId}&export=download`;
    execSync(`curl.exe -s -L -o "${targetPath}" "${url}"`, { stdio: 'inherit' });
    console.log(`✓ Saved ${photo.filename}`);
  } catch (err) {
    console.error(`Failed to download ${photo.filename}:`, err);
  }
}

console.log('Finished downloading photos.');
