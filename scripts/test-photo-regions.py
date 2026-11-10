from PIL import Image
import os

# Let's inspect the upper region of key files to understand where face and hands sit
targets = ['KAU_0072.jpg', 'KAU_0235.jpg', 'KAU_0258.jpg', 'KAU_6108.jpg', 'KAU_6116.jpg', 'KAU_8551.jpg', 'KAU_8970.jpg', 'KAU_9480.jpg']

for t in targets:
    p = os.path.join('public/images/gallery', t)
    im = Image.open(p)
    w, h = im.size
    print(f"=== {t} ({w}x{h}) ===")
    
    # Analyze brightness per vertical quarter
    q1 = im.crop((0, 0, w, int(h * 0.25))).convert('L')
    q2 = im.crop((0, int(h * 0.25), w, int(h * 0.5))).convert('L')
    q3 = im.crop((0, int(h * 0.5), w, int(h * 0.75))).convert('L')
    q4 = im.crop((0, int(h * 0.75), w, h)).convert('L')
    
    def avg(img):
        stat = img.getextrema()
        hist = img.histogram()
        total = sum(i * n for i, n in enumerate(hist))
        return round(total / (img.size[0] * img.size[1]), 1)
        
    print(f"  Top 0-25% (Head/Mudras): avg lum = {avg(q1)}")
    print(f"  25-50% (Chest/Arms/Abhinaya): avg lum = {avg(q2)}")
    print(f"  50-75% (Waist/Ghera): avg lum = {avg(q3)}")
    print(f"  75-100% (Feet/Stage): avg lum = {avg(q4)}")
