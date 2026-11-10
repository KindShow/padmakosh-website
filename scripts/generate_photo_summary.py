import os
from PIL import Image

output = []
for f in sorted(os.listdir('public/images/gallery')):
    if not f.endswith('.jpg'):
        continue
    p = os.path.join('public/images/gallery', f)
    im = Image.open(p).convert('RGB')
    w, h = im.size
    aspect = round(w / h, 2)
    orient = "Landscape" if w > h else "Portrait"
    
    # Analyze brightness and colors in 4 quadrants
    down = im.resize((100, 100))
    pixels = list(down.getdata())
    r_avg = sum(px[0] for px in pixels) // 10000
    g_avg = sum(px[1] for px in pixels) // 10000
    b_avg = sum(px[2] for px in pixels) // 10000
    
    # Top 30% (head & hands)
    top_pixels = pixels[:3000]
    top_bright = sum(sum(px)//3 for px in top_pixels) // 3000
    
    # Middle 40% (torso, mudras, costume)
    mid_pixels = pixels[3000:7000]
    mid_bright = sum(sum(px)//3 for px in mid_pixels) // 4000
    
    # Bottom 30% (ghera, feet, floor)
    bot_pixels = pixels[7000:]
    bot_bright = sum(sum(px)//3 for px in bot_pixels) // 3000
    
    output.append(f"{f:<14} | {orient:<9} | {w}x{h:<5} ({aspect}) | TopLum:{top_bright:<3} MidLum:{mid_bright:<3} BotLum:{bot_bright:<3} | RGB:({r_avg},{g_avg},{b_avg})")

with open('scripts/photo_summary.txt', 'w') as out:
    out.write("\n".join(output))
print("Wrote scripts/photo_summary.txt")
