import { execSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/images/gallery');
if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

// All 35 photos from padmakosh-asset-inventory.md
const allPhotos = [
  { filename: 'KAU_6121.jpg', driveId: '1k6yO_cvVNSWB1hV5uri0wytrXpMcC3LE' },
  { filename: 'KAU_6116.jpg', driveId: '1Tu0ImWXcG_esTsQFAqDTQEYt5yAofcHH' },
  { filename: 'KAU_6234.jpg', driveId: '1svIBGN-cHsTZlfFn2sgNVJ5YnnYdW5dL' },
  { filename: 'KAU_6131.jpg', driveId: '1wHHfb4mlGAIEGj34QQx2wM8Nw4ZYC0Ir' },
  { filename: 'KAU_6237.jpg', driveId: '1FgTljTcWi5Z8AWI95y69V28Q-Y9KMdmO' },
  { filename: 'KAU_8551.jpg', driveId: '1Y-vcQI8rRkr7JFxRyMQ7teWjhZvvSLhh' },
  { filename: 'KAU_0258.jpg', driveId: '1Li6_wgv5aAlptUTxCVpz_Z8JhudF6zBg' },
  { filename: 'KAU_0235.jpg', driveId: '10CwMSaqIjTz5urOsOw48i1Rj0YEeJlXX' },
  { filename: 'KAU_0205.jpg', driveId: '1ibs1Mk_errwlXQO7Kd_NpUC7FlkMOF_T' },
  { filename: 'KAU_0159.jpg', driveId: '1-JtipXTqho2DPpoWdBirSoKZuCpFQnLA' },
  { filename: 'KAU_0072.jpg', driveId: '1k_Vlp2nwDxdzUdc1PDLLMgxmDu30uQ8_' },
  { filename: 'KAU_9480.jpg', driveId: '1hYUZ8UFFEKDDNwQC8eiTNbKMmywJBC2S' },
  { filename: 'KAU_8970.jpg', driveId: '1Y8arq9_o_vMU7-YKnEao15IOEEmQhAhL' },
  { filename: 'KAU_8912.jpg', driveId: '1YJ0wE9i6cw0Op35KZaG6f7HjVnMcO0BP' },
  { filename: 'KAU_8836.jpg', driveId: '122JOYKViT09ckPg_0mbFzuIEKdMYp_57' },
  { filename: 'KAU_8144.jpg', driveId: '1A_-B1fXXT9PYB_S0tsyUqxslpmIk22D5' },
  { filename: 'KAU_6262.jpg', driveId: '1ivrLtsA0qBll_uvh6UrYe8R-woDIReDi' },
  { filename: 'KAU_6211.jpg', driveId: '1q0ZR-EooYBXc7kp0CH5nJVIgi0iubpkG' },
  { filename: 'KAU_6201.jpg', driveId: '1ow0taLDjiWXiXOWI4zB36Hk3mtOXVE8V' },
  { filename: 'KAU_6179.jpg', driveId: '1JR0OO5rlsnAbzvWz92mmKvJ6gF_Icr0G' },
  { filename: 'KAU_6176.jpg', driveId: '1A9D3sEnfy8tBbPRctGmFvUS9-7e0bKuD' },
  { filename: 'KAU_6171.jpg', driveId: '1p4L3DYczEdVoeciYb2xY6dNEw1kBObEg' },
  { filename: 'KAU_6168.jpg', driveId: '1NHIgx1vef6uJtK61IKTJxkB1BlL2MSdR' },
  { filename: 'KAU_6151.jpg', driveId: '1ZejwmWeFQR1_4wEE7SU-x9I71hluD2gC' },
  { filename: 'KAU_6135.jpg', driveId: '1JrMmWKpX0mKItic0sEgalOd24pwC2D43' },
  { filename: 'KAU_6133.jpg', driveId: '1UjHSieGWeZMrQ6_efNc8RTvluSad8GgQ' },
  { filename: 'KAU_6125.jpg', driveId: '102vHyAsopreIHWd15R9eKFiLC3A5TiO4' },
  { filename: 'KAU_6129.jpg', driveId: '16v9uP4SUzzLOSShA_podMnPnLLdlBmK-' },
  { filename: 'KAU_6120.jpg', driveId: '1X9Kvg4dTxW0JSFNcr-DfBTmdzKD_lJoS' },
  { filename: 'KAU_6186.jpg', driveId: '1Q9n13ZB_z3fvcE8EqlVbuTNcswIJBHBe' },
  { filename: 'KAU_6183.jpg', driveId: '16XNgVtNLKFvfXPFQNZbUIIa3NifaXoxk' },
  { filename: 'KAU_6227.jpg', driveId: '1HGpx0sUv7OjiWM9h05ZMiIxJraGEvDuL' },
  { filename: 'KAU_6119.jpg', driveId: '1MOiwF1d2Pv3--EzccoTNfaP6B46C_U0H' },
  { filename: 'KAU_6112.jpg', driveId: '1HqRntDplFfn45QGsOfNjfsG2tKaUFwpz' },
  { filename: 'KAU_6108.jpg', driveId: '1rB6JywiUdwVS5azQk1bGmL8OwjYVEvy5' },
];

console.log(`Starting background sync of all ${allPhotos.length} photos...`);

for (const photo of allPhotos) {
  const targetPath = path.join(outDir, photo.filename);
  if (existsSync(targetPath)) {
    continue;
  }
  try {
    const url = `https://drive.usercontent.google.com/download?id=${photo.driveId}&export=download`;
    execSync(`curl.exe -s -L -o "${targetPath}" "${url}"`);
    console.log(`✓ Fetched ${photo.filename}`);
  } catch (err) {
    console.error(`Error on ${photo.filename}:`, err);
  }
}

console.log('All photos synced.');
