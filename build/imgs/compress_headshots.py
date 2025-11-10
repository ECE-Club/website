import os
import glob
from PIL import Image, ImageOps

def compress_and_crop_image(input_path, output_path, size=(768, 768)):
    """opens and image and resizes it to 768x768 and saves as .webp to specified path"""
    try:
        with Image.open(input_path) as img:

            img = ImageOps.exif_transpose(img)

            # convert to RGBA to ensure consistency
            img = img.convert('RGBA')

            width, height = img.size

            # determine smallest dimension of original image
            new_dim = min(width, height)

            # coordinates for center crop
            left = (width - new_dim) / 2
            upper = (height - new_dim) / 2
            right = (width + new_dim) / 2
            lower = (height + new_dim) / 2

            # crop image to center square
            img_cropped = img.crop((left, upper, right, lower))

            # Resize the square to the target size
            if img_cropped.size != size:
                img_resized = img_cropped.resize(size, Image.Resampling.LANCZOS)
            else:
                img_resized = img_cropped

            # save the final image as WebP
            img_resized.save(output_path, 'WEBP', quality=85)
            
            print(f"SUCCESS: Processed {input_path} -> {output_path}")

    except Exception as e:
        print(f"ERROR: Could not process {input_path}. Reason: {e}")

def process_folder(source_folder, output_folder, target_size=768):
    """finds all images in source_folder, processes them, saves to output_folder"""
    
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
        print(f"Created output folder: {output_folder}")

    # common image file extensions
    image_extensions = ('*.jpg', '*.jpeg', '*.png', '*.bmp', '*.gif')
    image_files = []

    print(f"Searching for images in: {source_folder}")
    
    # checks for both lowercase and uppercase extensions
    for ext in image_extensions:
        image_files.extend(glob.glob(os.path.join(source_folder, ext)))
        image_files.extend(glob.glob(os.path.join(source_folder, ext.upper())))

    # remove duplicates
    unique_image_files = sorted(list(set(image_files)))
    
    if not unique_image_files:
        print("No images found in the source folder.")
        return

    print(f"Found {len(unique_image_files)} images to process.")

    for input_path in unique_image_files:
        filename = os.path.basename(input_path)
        name, _ = os.path.splitext(filename)
        output_filename = f"{name}.webp"
        
        # full output path
        output_path = os.path.join(output_folder, output_filename)

        # call processing function for individual image
        compress_and_crop_image(input_path, output_path, size=(target_size, target_size))

    print("\nProcessing complete.")

if __name__ == "__main__":
    
    SOURCE_DIR = "./2t5_2t6_pics_uncompressed" # source path, future webmasters can change this path
    OUTPUT_DIR = "./2t5_2t6_pics" # output path, future webmasters can change this path
        
    # main processing function
    process_folder(SOURCE_DIR, OUTPUT_DIR, target_size=768)