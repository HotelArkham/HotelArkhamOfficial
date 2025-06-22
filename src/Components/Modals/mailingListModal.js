import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MailingListModal({show, onClose}){
  return (
    <>
      <Modal show={show} onHide={onClose} animation={true} centered data-bs-theme="dark">
        <Modal.Header closeButton>
          <Modal.Title>
            <span className='arkhamFont'>Check in to Hotel Arkham<br /></span>
            <span className='arkhamFont fs-5'>Join the mailing list </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <iframe
              src="https://hotelarkham.substack.com/embed"
              width="100%"
              height="320"
              style={{ border: '1px solid #ccc', borderRadius: '4px' }}
              title="Substack Subscribe"
              loading="lazy"
              sandbox="allow-forms allow-scripts allow-same-origin"
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light" onClick={onClose}>
            <span className='arkhamFont'><i class="bi bi-arrow-return-left"></i> Return to The Lobby</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MailingListModal;