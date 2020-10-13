# saspyrilia

[![Build Status](https://dev.azure.com/curtisalexander/saspyrilia/_apis/build/status/curtisalexander.saspyrilia?branchName=master)](https://dev.azure.com/curtisalexander/saspyrilia/_build/latest?definitionId=7&branchName=master)

This is the repository for [saspyrilia](https://www.saspyrilia.com).  The website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Colophon
For more information on how the website is built, see the [Colophon](https://www.saspyrilia.com/docs/colophon) page.

## Development

### Docker

#### Build

```sh
docker build --tag saspyrilia .
```

#### Run

```sh
./saspyrilia-startup.sh
```

### No Docker

#### Installation

```
$ yarn install
```

#### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Build

```
$ yarn build
```

This command generates static content and places in the `build` directory and can be served using any static contents hosting service.


## Deploy

Deploy to [Azure static hosting](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website).