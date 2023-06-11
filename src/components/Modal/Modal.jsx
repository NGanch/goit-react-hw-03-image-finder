
import React from 'react';
import { Image } from '../Modal/Modal.styled';
import Modal from 'react-modal';

import{
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
const customStyles = {
  content: {
    width: '700px',
    height: '400px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgb(12 12 12 / 75%)',
  },
};

Modal.setAppElement('#root');
 //=================================================
 export class ModalGallery extends React.Component {

  componentWillUnmount(){ 
    clearAllBodyScrollLocks();
  }

  render(){
    // const {isModalOpen} = this.state;
    const {largeImageURL,tagsImg, onClose, isModalOpen} = this.props;
   
    return(
            <Modal
              isOpen={isModalOpen}
              // onClick={this.openModal}
              style={customStyles}
              contentLabel="Example Modal"
              onAfterOpen={() => disableBodyScroll(document)}
              onAfterClose={() => enableBodyScroll(document)}
              onRequestClose={onClose}
            >
              <Image src={largeImageURL} alt={tagsImg}/>
              
            </Modal>
   
        )
  }
 }

 //=================================================

// метод
// export class ModalGallery extends React.Component {

// componentDidMount(){
//   window.addEventListener('keydown', this.onKeydown);
//   document.body.style.overflow = 'hidden';
// }

//   componentWillUnmount(){
//     window.removeEventListener('keydown', this.onKeydown);
//     // clearAllBodyScrollLocks();
//   }

// onKeydown = event => {
//   if(event.code === 'Escape'){
//     this.props.onClose();
//   }
// };
// onBackdropClick = event => {
//   if(event.currentTarget !== event.target){
//     this.props.onClose();
//   }
// }
//   render(){
    
//     const {largeImageURL,tagsImg } = this.props;
//     console.log(largeImageURL)
//     console.log(tagsImg)
//     return(

//       <div>
//             <Modal
//              onClick={this.onBackdropClick}

      
//             >
//         <img src={largeImageURL} alt={tagsImg}/>
//             </Modal>
//           </div>
//         )
//   }

//  }
//==============================================
