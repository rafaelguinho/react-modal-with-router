import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import { CatBreed, CatImage, getCatImage, searchCatBreed } from "../actions";
import { Centered, ImageCover, ModalContainer, ModalHeader } from "./styles";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const customStyles = {
  content: {
    padding: "0",
    width: "900px",
    height: "530px",
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
  const { id, tab, breed } = useParams();

  const [catImage, setCatImage] = useState<CatImage | null>(null);
  const [catBreed, setCatBreed] = useState<CatBreed | null>(null);

  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
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

  useEffect(() => {
    if (tab === "description") {
      setCurrentTabIndex(1);
    }
  }, [tab]);

  useEffect(() => {
    if (tab === "description" && breed) {
      searchCatBreed(breed).then((results) => {
        if (results.length > 0) {
          setCatBreed(results[0]);
        }
      });
    }
  }, [tab, breed]);

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log("afterOpenModal");
  };

  const closeModal = (e: any) => {
    e.stopPropagation();
    setIsOpen(false);
    navigate("/");
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

        <Tabs selectedIndex={currentTabIndex} onSelect={setCurrentTabIndex}>
          <TabList>
            <Tab>Cat</Tab>
            <Tab>Description</Tab>
          </TabList>

          <TabPanel>
            <Centered>
              <ImageCover
                src={catImage?.url ?? "https://dummyimage.com/600x400/000/fff"}
                width="600"
                height="400"
                alt="My Cat"
              />
            </Centered>
          </TabPanel>
          <TabPanel>
            {catBreed && (
              <>
                <h2>{catBreed?.description}</h2>

                <a target="_blank" rel="noreferrer" href={catBreed?.wikipedia_url}>
                  {catBreed?.wikipedia_url}
                </a>
              </>
            )}
          </TabPanel>
        </Tabs>
      </ModalContainer>
    </Modal>
  );
}

export default MyModal;
