import os
from PIL import Image

os.makedirs('public/images/curated', exist_ok=True)

# 1. Hero Spotlight Photo: KAU_0072.jpg (1900x2798) - Full dancer in teal and gold
# Let's inspect KAU_0072.jpg: the dancer's head is around y=300 to y=800, hands are extended at sides
# Let's create a perfect theatrical hero portrait preserving head, mudra hands, and waist-down ghera
im72 = Image.open('public/images/gallery/KAU_0072.jpg')
w72, h72 = im72.size
# Full upper body & mudras with stage breathing room
hero_crop = im72.crop((int(w72 * 0.05), int(h72 * 0.02), int(w72 * 0.95), int(h72 * 0.92)))
hero_crop.save('public/images/curated/hero_stage_dancer.jpg', quality=95)
print("Saved hero_stage_dancer.jpg")

# 2. Sonal Pendse Abhinaya Expression: KAU_0235.jpg (1944x3108)
im235 = Image.open('public/images/gallery/KAU_0235.jpg')
w235, h235 = im235.size
# Center on face expression and upper chest/mudra
abhinaya_crop = im235.crop((int(w235 * 0.05), int(h235 * 0.02), int(w235 * 0.95), int(h235 * 0.75)))
abhinaya_crop.save('public/images/curated/sonal_abhinaya.jpg', quality=95)
print("Saved sonal_abhinaya.jpg")

# 3. Pirouette & Posture: KAU_6108.jpg (2207x3510)
im6108 = Image.open('public/images/gallery/KAU_6108.jpg')
w6108, h6108 = im6108.size
pirouette_crop = im6108.crop((int(w6108 * 0.05), int(h6108 * 0.02), int(w6108 * 0.95), int(h6108 * 0.85)))
pirouette_crop.save('public/images/curated/sonal_pirouette.jpg', quality=95)
print("Saved sonal_pirouette.jpg")

# 4. Wide Stage Rehearsal for Studio: Let's use KAU_6211.jpg (4106x2593) and KAU_6129.jpg (3185x1806) which are genuine LANDSCAPE photos!
im6211 = Image.open('public/images/gallery/KAU_6211.jpg')
im6211.save('public/images/curated/studio_rehearsal_1.jpg', quality=95)

im6129 = Image.open('public/images/gallery/KAU_6129.jpg')
im6129.save('public/images/curated/studio_rehearsal_2.jpg', quality=95)
print("Saved studio rehearsals 1 & 2")

# 5. Program stages
im258 = Image.open('public/images/gallery/KAU_0258.jpg') # 2454x1500 landscape
im258.save('public/images/curated/program_stage1.jpg', quality=95)

im6116 = Image.open('public/images/gallery/KAU_6116.jpg') # 2515x1503 landscape
im6116.save('public/images/curated/program_stage2.jpg', quality=95)

im159 = Image.open('public/images/gallery/KAU_0159.jpg') # 3252x2010 landscape
im159.save('public/images/curated/program_stage3.jpg', quality=95)
print("Saved program stages 1, 2, 3")

# 6. Grand wide performance for About and Hero
im6121 = Image.open('public/images/gallery/KAU_6121.jpg') # 5575x3205 massive landscape!
im6121.save('public/images/curated/grand_stage_performance.jpg', quality=95)

im9480 = Image.open('public/images/gallery/KAU_9480.jpg') # 4241x2402 landscape
im9480.save('public/images/curated/theatre_stage_full.jpg', quality=95)
print("Saved grand stage performances")
