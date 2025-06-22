import { useState } from 'react';
import MailingListModal from '../../Components/Modals/mailingListModal';

export function useMailingListModal() {
  const [show, setShow] = useState(false);
  const open = () => setShow(true);
  const close = () => setShow(false);

  const modal = (
    <MailingListModal show={show} onClose={close} />
  );

  return [modal, open];
}