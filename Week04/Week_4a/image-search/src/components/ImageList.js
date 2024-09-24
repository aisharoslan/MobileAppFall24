import ImageItem from "./ImageItem"

// take an array of images and map them out
const ImageList = (props) => {
  const { images } = props
  return (
    <div>
      {/* no need index here bc we have img.id */}
      {/* basically a mapping function */}
      {/* going thru entire array and instead of rendering in html - it's rendering an ImageItem - individual item - all it's doing is just mapping- the list is only responsible for breaking them down into individual items - then each item is just an image basically - source and alt */}
      {images.map((img) => {
        return <ImageItem key={img.id} image={img} />
      })}
    </div>
  )
}

export default ImageList