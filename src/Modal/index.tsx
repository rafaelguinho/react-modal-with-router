import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { CatImage, getCatImage } from "../actions";
import { Centered, ImageCover, ModalContainer, ModalHeader } from "./styles";

const customStyles = {
  content: {
    padding: "0",
    width: "900px",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function MyModal() {
  const { id } = useParams();
  const [catImage, setCatImage] = useState<CatImage | null>(null);
  const [modalIsOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getCatImage(id)
        .then((image) => {
          setCatImage(image);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [id]);

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log("afterOpenModal");
  };

  const closeModal = (e: any) => {
    e.stopPropagation();
    setIsOpen(false);
    navigate(-1);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalContainer>
        <ModalHeader>
          <h2>Hello modal {id}</h2>
          <button onClick={closeModal}>close</button>
        </ModalHeader>

        <Centered>
          <ImageCover
            src={catImage?.url ?? "https://dummyimage.com/600x400/000/fff"}
            width="600"
            height="400"
            alt="My Cat"
          />
        </Centered>
      </ModalContainer>
    </Modal>
  );
}

export default MyModal;
