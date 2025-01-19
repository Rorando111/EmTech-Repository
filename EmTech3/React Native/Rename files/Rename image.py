import os

# Folder path containing the images
folder_path = 'C:/Users/Rolando/Desktop/Datasets/Steel Rebars'

# Prefix for the new image names
new_name_prefix = "Rebar_"

# Get a list of all files in the folder
files = os.listdir(folder_path)

# Initialize counter
counter = 1

# Loop through each file in the folder
for filename in files:
    # Check if the file is an image based on its extension
    if filename.endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tiff')):
        # Define the new filename
        new_name = f"{new_name_prefix}{counter}{os.path.splitext(filename)[1]}"
        
        # Full paths
        old_file = os.path.join(folder_path, filename)
        new_file = os.path.join(folder_path, new_name)

        # Rename the file
        os.rename(old_file, new_file)

        # Increment counter
        counter += 1

print("Renaming completed.")
