---
title: Multi Node Kubernetes Home Cluster
description: Creating my own multi-node Kubernetes Cluster using k3s
employmentTime: 10
employeeImage: /k3s-icon.png
coverImage: /k8s.png
date: "2023-now"
highlights: {
  "Techstack": ["K3S", "Debian-Linux"],
  "Project Motivation": ["Self-Hosted Cloud", "Independence", "Gain kubernetes experience"]
}
documentDownload: https://github.com/EislM0203/argocd
---

### Project Overview
I have set up a multi-node Kubernetes cluster using k3s. It is managed by argocd, so feel free to check it out on Github! I am self hosting a lot of applications for me and my family to use. The heart of the cluster however are the following services:

- **ArgoCD**: Continuous Deployment, using my github repo as single source of truth.
- **SealedSecrets**: Secret encryption, enables me to have my secretes on github in a safe manner.
- **Traefik Reverse Proxy**: Manages and routes incoming traffic.
- **Longhorn**: Manages persistent storage volumes and creates daily backups.
- **Minio S3 Storage**: High-performance object storage, used for backups on two seperate drives.
- **Cloud Observability Services**: Jaeger, Opentelemetry-Collector, Prometheus, Grafana, Grafana Loki & Alertmanager for all purpose observability.
- **Harbor Container Registry**: Stores and manages Docker images for use in my cluster.
- **Cert-Manager**: Automates management and issuance of TLS certificates.
- **Headscale**: Open source version of the tailscale coordination server for self-hosted vpn meshnet.

### Motivation
This project empowers me to take control of my data and privacy, my reliance on major cloud providers. It also serves as a hands-on learning experience, deepening my understanding of Kubernetes and its ecosystem. Plus, it's a lot of fun! 😉

