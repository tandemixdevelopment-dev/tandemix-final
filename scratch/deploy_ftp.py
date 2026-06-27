import os
from ftplib import FTP

host = 'tandemixdev.com'
username = 'tandemix'
password = 'T9e6O6D-.5Fanc'

remote_dir = 'public_html'
local_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

files_to_upload = ['app.js', 'style.css', 'index.html']

try:
    print("Connecting to FTP...")
    ftp = FTP(host)
    ftp.login(username, password)
    print("Connected.")
    
    # Change directory to remote_dir
    ftp.cwd(remote_dir)
    print(f"Changed remote directory to {remote_dir}")
    
    for filename in files_to_upload:
        local_path = os.path.join(local_dir, filename)
        print(f"Uploading {filename} to {remote_dir}/{filename}...")
        with open(local_path, 'rb') as f:
            ftp.storbinary(f'STOR {filename}', f)
        print(f"Successfully uploaded {filename}.")
        
    ftp.quit()
    print("FTP connection closed. Deployment completed successfully!")
except Exception as e:
    print("FTP Error during deployment:", e)
    exit(1)
