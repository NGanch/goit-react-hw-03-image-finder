import React from 'react';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Section, GalleryList } from '../ImageGallery/ImageGallery.styled.jsx';

export function ImageGallery({ images, onClick }) {
  return (
    <Section>
      <GalleryList>
        {images.map(image => {
          return (
            <ImageGalleryItem
              onImgClick={onClick}
              key={image.id}
              image={image}
            />

          );
        })}
      </GalleryList>
    </Section>
  );
}

//==========================================
// export class ImageGallery extends React.Component {
//   state = {
//     isModalOpen: false,
//   };
//   openModal = () => this.setState({ isModalOpen: true });

//   closeModal = () => this.setState({ isModalOpen: false });

//   render() {
//     const { images } = this.props;
//     const { isModalOpen } = this.state;
//     return (
//       <section className={css.section}>
//         <ul className={css.gallery_list}>
//           {images.map(({ webformatURL, id, largeImageURL, tags }) => {
//             return (
//               <li
//                 key={id}
//                 className={css.gallery_item}
//               >
//                 <img
//                   src={webformatURL}
//                   alt=""
//                   className={css.gallery_img}

//                 />
//            {isModalOpen && <ModalGallery
//                   isModalOpen={this.isModalOpen}
//                   closeModal={this.closeModal}
//                   largeImageURL={largeImageURL}
//                   tags={tags}
//                 />}
//               </li>
//             );
//           })}
//         </ul>

//       </section>
//     );
//   }
// }
//==========================================

// <ImageGalleryItem
// key={id}
// webformatURL={webformatURL}
// alt={tags} />
