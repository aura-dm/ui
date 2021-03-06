import styled from 'vue-styled-components';

export const ModalBody = styled.div`
  background-color: ${props => props.theme.modalBody.bgColor};
  border: ${props => props.theme.modalBody.border};
  box-shadow: ${props => props.theme.modalBody.boxShadow};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ModalBodyHeader = styled.header`
  align-items: center;
  background-color: ${props => props.theme.modalBody.header.bgColor};
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 32px 40px;
  position: relative;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 30px;
`;

export const ModalBodyContent = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 0 40px;
  position: relative;
`;

export const ModalBodyFooter = styled.footer`
  align-items: center;
  background-color: ${props => props.theme.modalBody.footer.bgColor};
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  padding: 40px;

  & > * {
    margin: 0 0 0 20px;
  }
`;

export const ModalBodyFooterButtons = styled.div`
  display: flex;
  margin: 0;

  & > * {
    margin: 0 0 0 20px;

    &:first-child {
      margin: 0;
    }
  }
`;
