# Hairo Archive

Archive of once glorious hairo app.

## Init droplet
Init droplet by performing droplet_init.bash script, setting up firewalls on Digital Ocean and then execute setup_cerbot.

## Deploy nginx config
After config change, deploy nginx config by executing:
```
bash deploy_nginx_config.bash
```

## Deploy site
After site change, deploy site by executing:
```
bash deploy_site.bash <path to site package>
```