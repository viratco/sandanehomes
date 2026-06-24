import os
from PIL import Image

assets_dir = "/Users/viratvaroniya31/Desktop/sandanes2/src/assets"

images_to_convert = {
    "Copy of IMG_3491.JPG": "hero-bg.webp",
    "discover_peace.png": "discover_peace.webp",
    "discover_returns.png": "discover_returns.webp",
    "discover_care.png": "discover_care.webp",
    "IMG_6094.jpg": "hospitality-bg.webp",
    "IMG_6106.jpg": "testimonial-bg.webp",
    "IMG_4019.JPG": "location-bg.webp",
    "IMG_3547.JPG": "booking-bg.webp",
    "IMG_0609.jpg": "food-bg.webp",
    "services_recreation.jpeg": "services-recreation.webp",
    "services_rest.jpeg": "services-rest.webp",
    "video-bg.png": "video-bg.webp"
}

print("Starting image conversion to WebP...")

for src_name, dest_name in images_to_convert.items():
    src_path = os.path.join(assets_dir, src_name)
    dest_path = os.path.join(assets_dir, dest_name)
    
    if os.path.exists(src_path):
        try:
            with Image.open(src_path) as img:
                # Convert to RGB mode if converting from RGBA PNG to WebP to avoid issues
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")
                
                # Save as WebP with 75% quality for excellent balance between compression and visual quality
                img.save(dest_path, "WEBP", quality=75)
                
                old_size = os.path.getsize(src_path)
                new_size = os.path.getsize(dest_path)
                reduction = (old_size - new_size) / old_size * 100
                print(f"Converted {src_name} -> {dest_name}: {old_size/1024:.1f}KB -> {new_size/1024:.1f}KB ({reduction:.1f}% reduction)")
        except Exception as e:
            print(f"Error converting {src_name}: {e}")
    else:
        print(f"Source file not found: {src_name}")

print("Image conversion completed.")
