# Minio File Browser

``miniobrowser`` provides minimal set of UI to manage buckets and objects on ``minio`` server. ``miniobrowser`` is written in javascript and released under [Apache 2.0 License](./LICENSE).

## Installation

```sh
$ git clone https://github.com/minio/miniobrowser
$ cd miniobrowser
$ npm install
```

### Install `go-bindata` and `go-bindata-assetfs`.

If you do not have a working Golang environment, please follow [Install Golang](./INSTALLGO.md).

```sh
$ go get github.com/jteeuwen/go-bindata/...
$ go get github.com/elazarl/go-bindata-assetfs/...
```

## Generating Assets.

### Development version

```sh
$ npm run build
```

### Released version

```sh
$ npm run release
```

## Run Minio File Browser with live reload.

```sh
$ npm run dev
```

Open [http://localhost:8080/minio/](http://localhost:8080/minio/) in your browser to play with the application
