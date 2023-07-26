import ReviewForm from "../../container/ReviewForm/ReviewForm";
import Modal from 'react-modal';
import styles from "./ReviewModal.module.css";

// https://github.com/reactjs/react-modal/issues/632
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%',
      padding: '0',
      border: '2px solid #ccc',
    },
};

const ReviewModal = ({movie, addReview, isOpen, closeModal}) => {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={modalStyles}
        >
          
            <div className={styles.reviewModalContent}>
                <div className={styles.reviewModalHeader}>
                    <button className={styles.modalCloseButton} onClick={closeModal}>X</button>
                    <h2>{movie.title}</h2>
                    <h4>Post your review</h4>
                </div>
                <ReviewForm 
                    id={movie.id} 
                    addReview={addReview}
                    closeModal={closeModal}
                />
            </div>
        </Modal>
    );
}

export default ReviewModal;