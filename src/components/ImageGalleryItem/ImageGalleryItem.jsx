import {
  GalleryItem,
  GalleryImg,
} from '../ImageGalleryItem/ ImageGalleryItem.styled';

export function ImageGalleryItem({ webformatURL, key, alt }) {
  return (
    <GalleryItem key={key}>
      <GalleryImg src={webformatURL} alt={alt} />
    </GalleryItem>
  );
}
