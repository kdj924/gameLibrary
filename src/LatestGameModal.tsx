/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import gameService from './gameService';
import { PromiseReturnType } from './types';

type Game = PromiseReturnType<typeof gameService.getLatestGame>

type Props = {
  onClose: () => void;
};

const LatestGameModal: React.FC<Props> = ({ onClose }) => {
  // latestMovie needs to be filled with the first game of the list
  // use gameService.getLatestGame() to retrieve the game info
  const [latestMovie, setLatestMovie] = useState<Game | undefined>(undefined);

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{latestMovie?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {latestMovie?.description
          ? latestMovie?.description
          : 'Loading movie...'}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LatestGameModal;
