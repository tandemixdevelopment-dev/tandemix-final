import os
from ftplib import FTP

host = 'tandemixdev.com'
username = 'tandemix'
password = 'T9e6O6D-.5Fanc'

remote_dir = 'public_html'
local_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

files_to_upload = ['app.js', 'style.css', 'index.html', 'save_review.php', 'assets/maxim.jpg', 'assets/vitya.jpg']

try:
    print("Connecting to FTP...")
    ftp = FTP(host)
    ftp.login(username, password)
    print("Connected.")
    
    # Change directory to remote_dir
    ftp.cwd(remote_dir)
    print(f"Changed remote directory to {remote_dir}")
    
    # Safely initialize reviews.json if it doesn't exist
    remote_files = ftp.nlst()
    if 'reviews.json' not in remote_files:
        files_to_upload.append('reviews.json')
        print("reviews.json not found on remote server. Will initialize.")
    else:
        print("reviews.json already exists on remote server. Skipping initialization to preserve database.")
    
    for filename in files_to_upload:
        local_path = os.path.join(local_dir, filename)
        remote_path = filename.replace('\\', '/')
        print(f"Uploading {local_path} to {remote_path}...")
        with open(local_path, 'rb') as f:
            ftp.storbinary(f'STOR {remote_path}', f)
        print(f"Successfully uploaded {remote_path}.")
        
    ftp.quit()
    print("FTP connection closed. Deployment completed successfully!")
except Exception as e:
    print("FTP Error during deployment:", e)
    exit(1)
