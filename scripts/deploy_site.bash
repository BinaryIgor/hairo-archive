#!/bin/bash
set -e

package_path=$1

if [ -z "$package_path" ]; then
    echo "Path to site package is required"
    exit 1
fi

remote_host="hairo@archive.hairo.io"
remote_site_dir="/usr/share/nginx/site"

ssh $remote_host "mkdir -p /tmp/site; sudo mkdir -p $remote_site_dir"
scp -r $package_path/* $remote_host:/tmp/site
ssh $remote_host "sudo rm -f -r $remote_site_dir/*; sudo mv /tmp/site/* $remote_site_dir"
