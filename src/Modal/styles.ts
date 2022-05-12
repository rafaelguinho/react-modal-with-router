import styled from "styled-components";

export const ImageCover = styled.img`
  object-fit: cover;
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0.5em 1em 0.5em;

  & h2{
    margin:0 ;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction:column ;
  padding: .5em ;
`;
