import os
from PIL import Image

# Let's inspect the upper-body / expression / mudra regions of the top stage photos
images_to_check = [
    'KAU_0072.jpg', 'KAU_0159.jpg', 'KAU_0205.jpg', 'KAU_0235.jpg', 
    'KAU_0258.jpg', 'KAU_6108.jpg', 'KAU_6116.jpg', 'KAU_6121.jpg',
    'KAU_6168.jpg', 'KAU_6176.jpg', 'KAU_6201.jpg', 'KAU_8144.jpg',
    'KAU_8551.jpg', 'KAU_8836.jpg', 'KAU_8912.jpg', 'KAU_8970.jpg',
    'KAU_9480.jpg'
]

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Expression & Mudra Detail Inspection</title>
<style>
  body { background: #0a0809; color: #fff; font-family: sans-serif; padding: 2rem; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 2rem; }
  .card { background: #161013; border: 1px solid #3d2229; border-radius: 6px; overflow: hidden; }
  .img-wrap { width: 100%; height: 380px; position: relative; background: #000; overflow: hidden; }
  /* Focus on upper body: face + mudras */
  .focus-crop { width: 100%; height: 100%; object-fit: cover; object-position: center 18%; }
  .meta { padding: 1rem; font-size: 0.85rem; color: #d4a359; }
</style>
</head>
<body>
<h1>Padmakosh — Expression & Mudra Focused Inspection</h1>
<div class="grid">
"""

for f in images_to_check:
    html += f"""
    <div class="card">
      <div class="img-wrap">
        <img src="/images/gallery/{f}" class="focus-crop" alt="{f}" />
      </div>
      <div class="meta">
        <strong>{f}</strong><br>
        <span style="color: #aaa;">Crop position: center 18% (Focus on expression &amp; mudra)</span>
      </div>
    </div>
    """

html += """
</div>
</body>
</html>
"""

with open('public/inspect-mudras.html', 'w', encoding='utf-8') as out:
    out.write(html)

print("Created public/inspect-mudras.html")
