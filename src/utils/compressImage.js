import Compressor from 'compressorjs'

const compressorOptions = {
  maxHeight:1920,
  maxWidth :1920,
  quality  :.9
}

export default (file, options)=> {
  return new Compressor(file, {
    ...compressorOptions,
    ...options
  })
}
