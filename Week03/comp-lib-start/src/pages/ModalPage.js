import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'

// state check here! not in Modal.js
export default function ModalPage() {
    const [isModalOpen, setIsModalOpen] = useState(false) // start with a closed modal
    const handleClick = () => {
        setIsModalOpen(true) // modal will be in charge of closing it
    }

    const handleClose = () => {
        setIsModalOpen(false)
    }
    
    return (
        // BOTH Modal and Button need to know about the current state - sibling component needs to setState to affect this Modal, so the parent needs to keep track of that state
        <div>
            <Button primary outline className="m-4" onClick={handleClick}>
                Open Modal
            </Button>
            <Button danger outline className="m-4" onClick={handleClose}>
                Close Modal
            </Button>
            { isModalOpen && <Modal onClose={handleClose}/> }
        </div>
    )
}