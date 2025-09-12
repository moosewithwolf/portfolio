# Portfolio

## Link

- Home: -

## Server Overview

- OS: Ubuntu 24.04 LTS
- Host: Home server on repurposed laptop (DuckDNS)
- Role: Hosting portfolio website (frontend/backend)

## Setup & Configuration

1. Core Packages
   - `apt update && apt upgrade`
   - Install `nginx`, `nodejs`, `pm2`
2. Domain Integration
   - Dynamic IP management with DuckDNS sync script
   - Configure domain in `/etc/hosts` and Nginx
3. SSL/TLS
   - Obtain and auto-renew certificates with Certbot
   - Redirect HTTP → HTTPS

## Deployment Pipeline

- GitHub Actions
  - Auto build & deploy on push to `main`
  - Establish WireGuard VPN tunnel then deploy via SSH to internal IP (`10.0.0.1`)
  - Manage backend with PM2

## Security Settings

1. SSH
   - Disable password authentication (`PasswordAuthentication no`)
   - Enforce key-based authentication only
   - Disable root login (`PermitRootLogin no`)
   - Allow only over VPN interface
   - Close Port 22
2. VPN
   - Install WireGuard (UDP port)
   - Restrict SSH access to VPN connections only
3. Firewall (UFW)
   - Block ports 22 on external interfaces
   - Allows only 80(HTTP), 443(HTTPS)
4. Brute-Force Protection
   - Configure Fail2Ban to monitor SSH service
   - Fail2Ban bans repeat offenders for 100 hours
5. Automatic Updates
   - Enable `unattended-upgrades` for OS security patches

## Resource Management

- **Auto-shutdown on high daily traffic:** A cron job checks daily bandwidth (via `vnstat`) and powers off the server if usage exceeds 5 GB.
