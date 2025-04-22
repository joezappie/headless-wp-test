# syntax=docker/dockerfile:1.2
#
# ---- Base Node ----
FROM node:18-alpine AS base

# Install GIT
RUN apt-get update -yq --fix-missing \
  && apt-get install git -y

# Install Docker
RUN apt install docker.io -y
RUN docker --version

ENV NODE_ENV development