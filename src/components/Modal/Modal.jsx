
import React from 'react';
import Modal from 'react-modal';
// import{
//   disableBodyScroll,
//   enableBodyScroll,
//   clearAllBodyScrollLocks,
// } from 'body-scroll-lock';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');
 export const ModalGallery =({isModalOpen, closeModal, largeImageURL, tags}) => {
    return(
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
          <img src={largeImageURL} alt={tags}/>
           <h1>Hello</h1>
            </Modal>
    
        )
  }
// export class ModalGallery extends React.Component {
//   state = {
//     isModalOpen: false,
//   }
//   openModal = () => this.setState({isModalOpen: true})

//   closeModal = () => this.setState({isModalOpen: false})

//   componentWillUnmount(){
//     clearAllBodyScrollLocks();
//   }

//   render(){
//     const {isModalOpen} = this.state;
//     const {images} = this.props;
//     return(

//       <div>
//             <button onClick={this.openModal}>open</button>
//             <Modal
//               isOpen={isModalOpen}
          
//               onRequestClose={this.closeModal}
//               style={customStyles}
//               contentLabel="Example Modal"
//               onAfterOpen={() => disableBodyScroll(document)}
//               onAfterClose={() => enableBodyScroll(document)}
//             >
          
//               {/* <button onClick={this.closeModal}>close</button> */}
//               {images.map(({webformatURL,id, largeImageURL, tags}) => {
//               return(
          
            
//             <li key={id}  onClick={this.openModal}>
//         <img src={largeImageURL} alt={tags} onClick={this.closeModal}/>
//         {/* {isModalOpen && <ModalGallery
//             // isModalOpen={this.isModalOpen}
//             // closeModal={this.closeModal}
//             // largeImageURL={largeImageURL}
//             // tags={tags}
//             />} */}
//         </li>
// )
// })}
              
//             </Modal>
//           </div>
//         )
//   }

//  }
 //=================================================
//  export class ModalGallery extends React.Component {
//   state = {
//     isModalOpen: false,
//   }
//   openModal = () => this.setState({isModalOpen: true})

//   closeModal = () => this.setState({isModalOpen: false})

//   componentWillUnmount(){
//     clearAllBodyScrollLocks();
//   }

//   render(){
//     const {isModalOpen} = this.state;
//     return(

//       <div>
//             <button onClick={this.openModal}>open</button>
//             <Modal
//               isOpen={isModalOpen}
          
//               onRequestClose={this.closeModal}
//               style={customStyles}
//               contentLabel="Example Modal"
//               onAfterOpen={() => disableBodyScroll(document)}
//               onAfterClose={() => enableBodyScroll(document)}
//             >
          
//               <button onClick={this.closeModal}>close</button>
//               <div>I am a modal</div>
              
//             </Modal>
//           </div>
//         )
//   }

//  }
//==============================================

