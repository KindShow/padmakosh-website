import os
from PIL import Image

files = [f for f in sorted(os.listdir('public/images/gallery')) if f.endswith('.jpg')]
html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Padmakosh Photo Review</title>
<style>
  body { background: #0c090a; color: #fff; font-family: system-ui, sans-serif; padding: 2rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
  .card { background: #1a1417; border: 1px solid #33262b; padding: 0.75rem; border-radius: 4px; }
  img { width: 100%; height: 260px; object-fit: contain; background: #000; border-radius: 2px; }
  .meta { font-size: 0.75rem; color: #c49746; margin-top: 0.5rem; }
</style>
</head>
<body>
<h1>Padmakosh 35 Drive Photos Inventory</h1>
<div class="grid">
"""

for f in files:
    try:
        im = Image.open('public/images/gallery/' + f)
        w, h = im.size
        html += f"""
        <div class="card">
          <img src="/images/gallery/{f}" alt="{f}" loading="lazy" />
          <div class="meta"><strong>{f}</strong> ({w}x{h})</div>
        </div>
        """
    except Exception as e:
        pass

html += """
</div>
</body>
</html>
"""

with open('public/preview-photos.html', 'w', encoding='utf-8') as out:
    out.write(html)

print("Generated public/preview-photos.html successfully")
