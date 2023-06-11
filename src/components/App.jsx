import React from 'react';
import * as ImageService from '../service/image-servise';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery';
import { ModalGallery } from '../components/Modal/Modal';
import { Spinner } from '../components/Loader/Loader';
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
    modalVisible: false,
    largeImageURL: null,
    tagsImg: null,
    isModalOpen: false,
  };

  abortCtrl;

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
    const { page, per_page } = this.state;
    this.setState({ isLoading: true });
    try {
      const response = await ImageService.getImages(
        query,
        currentPage,
        this.abortCtrl
      );

      // const {hits,totalHits} = response.data;
      const { hits, totalHits } = response;
      if (!hits.length) {
        this.setState({ isEmpty: true });
        return;
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isShowButton: page < Math.ceil(totalHits / per_page),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentWillUnmount() {
    this.abortCtrl.abort();
  }

  //------------------------------
  handleFormSubmit = value => {
    this.setState({
      query: value,
      images: [],
      page: 1,
      isShowButton: false,
      isEmpty: false,
      isLoading: false,
      error: null,
    });
  };
  //======================= LOAD MORE =======================
  handleOnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  //======================= LOAD MORE =======================
  // ======================= MODAL =======================

  getImgData = (largeImageURL, tagsImg) => {
    this.setState({ largeImageURL: largeImageURL, tagsImg: tagsImg });
    // this.toggleModal();
    this.openModal();
  };
  // toggleModal = () => {
  //   this.setState(state => ({
  //     modalVisible: !state.modalVisible,
  //   }));
  // };
  // ======================= MODAL =======================

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });
  // ======================= MODAL =======================
  render() {
    const {
      images,
      isShowButton,
      isLoading,
      isEmpty,
      isModalOpen,
      largeImageURL,
      tagsImg,
    } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <>
          <ImageGallery images={images} onClick={this.getImgData} />

          {isModalOpen && (
            <ModalGallery
              isModalOpen={isModalOpen}
              largeImageURL={largeImageURL}
              tagsImg={tagsImg}
              // onClose={this.toggleModal}
              onClose={this.closeModal}
            />
          )}

          {isShowButton && (
            <Button onClick={this.handleOnClick}>Load more</Button>
          )}
          {isEmpty && <p>Sorry. There are no images ... 😭</p>}
          {isLoading &&  <Spinner/>}
          {isEmpty &&
           ( toast.error('Sorry. There are no images ... 😭', {
              position: 'top-center',
              theme: 'light',
            }))}
          {/* {isLoading &&
            toast.success('Loading ...', {
              position: 'top-center',
              theme: 'light',
            })} */}
          <ToastContainer autoClose={3000} />
        </>
      </>
    );
  }
}
