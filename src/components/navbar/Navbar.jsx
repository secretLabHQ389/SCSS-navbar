import React, { useState } from 'react'
import "./navbar.scss"

import Button from "../button/Button"
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../module/Module"

const productsList = [
  'Login',
  'Shirts',
  'Golfclubs'
]

const Navbar = () => {

  const [showModal, setShowModal] = useState(false)

  const handleLogin = () => {
    alert('Logged In.')
  }

  return (
    <div className="nav__container">
      {productsList && productsList.map(product => {
        return (
          <div key={Math.random()}>
            <Button onClick={() => setShowModal(true)}>{product}</Button>
            <Modal
              show={showModal}
              setShow={setShowModal}
              // hideCloseButton
            >
              <ModalHeader>
                <h2>Login</h2>
              </ModalHeader>
              <ModalBody>
                <div style={{ textAlign: "justify" }}>
                  <form>
                    <label>Email</label>
                    <input type="email" />
                    <label>Password</label>
                    <input type="password" />
                    <Button onClick={() => handleLogin()}>Enter</Button>
                  </form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={() => setShowModal(false)}>Close</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
      })}
    </div>
  )
}

export default Navbar
