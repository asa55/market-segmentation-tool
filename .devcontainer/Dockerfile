# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.145.1/containers/javascript-node/.devcontainer/base.Dockerfile

ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN apt-get update \
    && apt-get upgrade \
    && npm install -g gatsby-cli \
    && npm install -g react-redux

# CMD [ "npm", "install", "--prefix", "./gatsby-site", "gatsby-theme-material-ui", "@material-ui/core", "@material-ui/icons" ]
# CMD [ "gatsby", "telemetry", "--disable" ]
