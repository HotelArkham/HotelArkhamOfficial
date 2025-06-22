import { Image, Button, NavLink } from 'react-bootstrap';
import { useMailingListModal } from '../../../Hooks/Modals/useMailingListModal';

function LandingPage(){

    const [mailingListModal, openMailingListModal] = useMailingListModal();

return(
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'>
                <Image className='img-fluid w-75 mx-auto d-block' src='assets/wpbanner.png' alt='Hotel Arkham Logo'></Image>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <p className='arkhamFont text-center fs-2'>
                    An eldritch dimension of rock 'n' roll mayhem and cosmic horrors beyond your wildest nightmares awaits.
                </p>
                <hr className='white_hr'/>
                <p className='arkhamFont text-center fs-4'>
                    So tell me, lonely traveller...
                </p>
            </div>
        </div> 
        <div className='row'>
            <div className='col'>
                <Button size='lg' variant="outline-light" onClick={openMailingListModal} className='m-auto d-block'>
                    <NavLink className="fs-2">
                        <span className="arkhamFont"><i class="bi bi-journal-text"></i> Would you like to check in?</span>
                    </NavLink>
                </Button>
            </div>
        </div>
        {mailingListModal}
    </div>
);
}

export default LandingPage;