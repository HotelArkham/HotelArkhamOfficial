import { Image, Button, NavLink } from 'react-bootstrap';
import { useMailingListModal } from '../../../Hooks/Modals/useMailingListModal';

function LandingPage(){

    const [mailingListModal, openMailingListModal] = useMailingListModal();

return(
    <div className='container-fluid'>
        <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-lg-8'>
                <Image className='img-fluid mx-auto d-block' 
                src={`${process.env.PUBLIC_URL}/assets/images/sitebanner.png`} 
                alt='Hotel Arkham Logo'></Image>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col'>
                <p className='arkhamFont text-center'>
                    An eldritch dimension of rock 'n' roll mayhem and cosmic horrors beyond your wildest nightmares awaits.
                </p>
                <hr className='white_hr'/>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col'>
                <p className='arkhamFont text-center'>
                    So tell me, lonely traveller...
                </p>
            </div>
        </div> 

        <div className='row justify-content-center'>
            <div className='col'>
                <Button 
                    size='lg' 
                    variant="outline-light" 
                    onClick={openMailingListModal} 
                    className='m-auto d-block'
                >
                    <NavLink>
                        <span className="arkhamFont"><i className="bi bi-journal-text"></i> Would you like to check in?</span>
                    </NavLink>
                </Button>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col'>
                <br></br>
                <br></br>
                <br></br>
                <br></br>               
            </div>
        </div>
        {mailingListModal}
    </div>
);
}

export default LandingPage;