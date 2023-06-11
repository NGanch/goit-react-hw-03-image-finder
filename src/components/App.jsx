import React from 'react';
// import axios from "axios";
// import css from './App.module.css';
import * as ImageService from '../service/image-servise';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
// import { ModalGallery } from '../components/Modal/Modal';

import { Button } from './Button/Button.styled';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    page: 1,
    per_page: 12,
    isShowButton: false,
    isEmpty: false,
    isLoading: false,
    error: null,
    // isModalOpen: false,
}

abortCtrl;
   //------------------------------

//===================================
 componentDidUpdate(_, prevState) {
  this.abortCtrl = new AbortController();
  // console.log(this.abortCtrl)
  const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page, this.abortCtrl);
  }
}
  getImages = async (query, currentPage) => {
    const {page, per_page} = this.state;
    this.setState({isLoading: true});
    try{
      const response = await ImageService.getImages(query, currentPage, this.abortCtrl);
      console.log(response)
      // const {hits,totalHits} = response.data;
      const {hits,totalHits} = response;
      if(!hits.length){
        this.setState({isEmpty: true})
        return;
      }

     
      this.setState(prevState => ({ images: [...prevState.images, ...hits], isShowButton: page < Math.ceil(totalHits / per_page) }));
    }catch(error){
      this.setState({error: error.message});
   
    }
    finally{
      this.setState({isLoading: false});
    }
  }

  componentWillUnmount(){
    this.abortCtrl.abort();
  }
  // openModal = () => this.setState({isModalOpen: true})

  // closeModal = () => this.setState({isModalOpen: false})
   //------------------------------

     //------------------------------
  handleFormSubmit = value => {
    this.setState({ query: value, images: [], 
      page: 1, 
      isShowButton: false,
      isEmpty: false,
      isLoading: false,
      error: null,
    });
    console.log(value);
  };
  //======================= LOAD MORE =======================
  handleOnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }
   //======================= LOAD MORE =======================
  render() {
    const { images, isShowButton, isLoading, isEmpty } = this.state;
   
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <>
        
    
          {/* <ModalGallery /> */}
            <ImageGallery images={images} />
        
            <ToastContainer autoClose={3000} />
            {/* <button onClick={this.handleOnClick}>Load more</button> */}
            {/* <Button click={this.handleOnClick} /> */}
     
          { isShowButton && <Button onClick={this.handleOnClick}>Load more</Button>}

  {isEmpty && 
  toast.error('Sorry. There are no images ... 😭', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})}
        {isLoading && toast.success('Loading ...', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
})}
        </>
      </>
    );
  }
}




     //    async componentDidMount(){
//     const {page, query} = this.state;
//     // this.setState({loading: true});
  
//     if(!query){
     
//         return;
//     }
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '35926176-c3a1e4cc9918e3801982283ac';
//     const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`) 
//     this.setState({ images: response.data.hits })
//     // try {
//     //    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`) 
    
//     //    if (response.data.totalHits) {
//     //     this.setState({ articles: response.data.hits })

//     //     return;
//     //   } else {
//     //     throw new Error("Failed to fetch users");
//     //   }

//     // } catch (error) {
//     //     console.log(error)
//     //     // this.setState({ error, status: 'rejected' });
//     // }
//     // finally {
//     //     this.setState({ isLoading: false });
//     //   }

// }
//  componentDidMount(){
//     const {page} = this.state;
//     this.setState({loading: true});
//     const Name = this.state.query;
//     if(!Name){
     
//         return;
//     }
//     const BASE_URL = 'https://pixabay.com/api/';
//     const API_KEY = '35926176-c3a1e4cc9918e3801982283ac';
//     try {
//        const response = axios.get(`${BASE_URL}?key=${API_KEY}&q=${Name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`) 
//      console.log(response)
//        if (response.data.totalHits) {
//         this.setState({ images: response.data.hits })

//         return;
//       } else {
//         throw new Error("Failed to fetch users");
//       }

//     } catch (error) {
//         console.log(error)
//         // this.setState({ error, status: 'rejected' });
//     }
//     // finally {
//     //     this.setState({ isLoading: false });
//     //   }

// }