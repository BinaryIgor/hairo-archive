#!/bin/bash
set -e

remote_host="hairo@archive.hairo.io"

scp "$PWD/nginx.conf" $remote_host:"/tmp/nginx.conf"
ssh $remote_host "sudo mv /tmp/nginx.conf /etc/nginx/conf.d/default.conf; sudo nginx -s reload"  