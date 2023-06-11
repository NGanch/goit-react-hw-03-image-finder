import React from 'react';

// import { ModalGallery } from '../Modal/Modal.jsx';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import {Section, GalleryList} from '../ImageGallery/ImageGallery.styled.jsx';
export function ImageGallery({images}){
    return(
        <Section>
            <GalleryList>
{images.map(({webformatURL,id, tags}) => {
    return(
        <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        alt={tags} />
        // <li key={id} className={css.gallery_item}>
        // <img src={webformatURL} alt=""className={css.gallery_img} />
        // </li>
    )
})}
</GalleryList>
{/* <ul className={css.gallery_list}>
{images.map(({webformatURL, largeImageURL, id}) =>{
    return(
        <li key={id} className={css.gallery_item}>
        <img src={webformatURL} alt=""className={css.gallery_img} />
        </li>
    )
})}
</ul>  */}

{/* <ul className={css.gallery_list}>
{images.map(({webformatURL, largeImageURL, id}) => {
    return(
        <ImageGalleryItem
        key={id}
        url={webformatURL}
    />
    )
})}

</ul> */}
        </Section>
    )
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
