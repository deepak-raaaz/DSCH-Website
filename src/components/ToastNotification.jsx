import axios from 'axios';
import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function ToastNotification() {
    const [openModal, setOpenModal] = useState(false);
    const [modalPlacement] = useState('center')


    const [notification, dispatch] = useStateProvider();

    useEffect(() => {
        const api_url = process.env.REACT_APP_API_LINK;
        const getNotification = async () => {
            await axios.get(`${api_url}action=notification`)
                .then(response => {
                    const notification = response.data.data;

                    dispatch({ type: reducerCases.SET_NOTIFICATION, notification });
                    if (notification.status === 'deactivate') {
                        setOpenModal(false);
                    } else {
                        // Check if the notification ID is different from the stored one
                        const storedNotificationId = localStorage.getItem('modalShown');
                        if (notification._id != storedNotificationId) {
                            setOpenModal(true);
                        }

                    }
                })
                .catch(error => {
                    console.log(error);
                })

        }
        getNotification();

    }, []);

    const handleSkip = () => {
        localStorage.setItem('modalShown', notification.notification._id);
        setOpenModal(false);
    };

    return (


        <>
            {
                Object.entries(notification.notification).length === 0
                    ?
                    <>
                    </>
                    :
                    <>
                        <Modal
                            show={openModal}
                            position={modalPlacement}
                            onClose={() => setOpenModal(false)}
                        >
                            <Modal.Header>{notification.notification.heading}</Modal.Header>
                            <Modal.Body className='' >
                                <div className="space-y-6 p-6">
                                    <img src={notification.notification.bannerUrl} alt="" className="w-[80%] max-md:w-full rounded-2xl overflow-hidden" />
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        {notification.notification.description} 
                                    </p>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={() => setOpenModal(false)}>
                                    <Link to={notification.notification.primaryUrl}>
                                        Register
                                    </Link>
                                </Button>
                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                    <Link to={notification.notification.secondaryUrl}>
                                        Details
                                    </Link>
                                </Button>
                                <Button color="gray" onClick={handleSkip}>
                                    Skip
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
            }

        </>
    );
}