# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.145.1/containers/javascript-node/.devcontainer/base.Dockerfile

ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN apt-get update \
    && apt-get upgrade \
    && npm install -g gatsby-cli
##    && npm install gatsby-theme-material-ui @material-ui/core
