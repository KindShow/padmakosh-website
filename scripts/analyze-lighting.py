from PIL import Image
import os

images = sorted([f for f in os.listdir('public/images/gallery') if f.endswith('.jpg')])

print(f"{'Filename':<15} | {'Size':<12} | {'Subject Bounding Box (L, T, R, B)':<34} | {'Notes'}")
print("-" * 80)

for f in images:
    path = os.path.join('public/images/gallery', f)
    im = Image.open(path)
    w, h = im.size
    
    # convert to grayscale and downsample to analyze subject boundaries
    small = im.convert('L').resize((200, int(200 * h / w)))
    sw, sh = small.size
    
    # threshold for stage light vs black background
    pixels = small.load()
    min_x, max_x, min_y, max_y = sw, 0, sh, 0
    bright_count = 0
    for y in range(sh):
        for x in range(sw):
            if pixels[x, y] > 35: # not black stage
                min_x = min(min_x, x)
                max_x = max(max_x, x)
                min_y = min(min_y, y)
                max_y = max(max_y, y)
                bright_count += 1
                
    norm_box = (round(min_x/sw, 2), round(min_y/sh, 2), round(max_x/sw, 2), round(max_y/sh, 2))
    notes = "Wide/Landscape" if w > h else "Portrait"
    if bright_count / (sw * sh) > 0.8:
        notes += ", Studio/Well-lit"
    else:
        notes += ", Dark Stage Spotlight"
        
    print(f"{f:<15} | {f'{w}x{h}':<12} | {str(norm_box):<34} | {notes}")
