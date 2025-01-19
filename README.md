# Transformers.js Node

## Installation behind a corporate proxy

1. Install `onnxruntime-node`

```sh
npm install onnxruntime-node --onnxruntime-node-install-cuda=skip
```

2. Install huggingface/transformers.js

```sh
npm i @huggingface/transformers
```

3. Download the binaries

```sh
ORT_VERSION=1.20.1
https://github.com/microsoft/onnxruntime/releases/download/v${ORT_VERSION}/onnxruntime-linux-x64-gpu-${ORT_VERSION}.tgz
```

4. Extract the following binaries to "node_modules/onnxruntime-node/bin/napi-v3/
   linux/x64:
   - `libonnxruntime_providers_tensorrt.so`
   - `libonnxruntime_providers_shared.so`
   - `libonnxruntime.so.${ORT_VERSION}`
   - `libonnxruntime_providers_cuda.so`

## References

- [onnxruntime - github source](https://github.com/microsoft/onnxruntime/blob/main/js/node/script/install.js)
