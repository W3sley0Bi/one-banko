'use client';
import React, { useRef } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react';
import DropFile from '../../components/DropFile';

export default function UploadModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [size, setSize] = React.useState('lg');
  const childRef = useRef();

  const handleOpen = (size: string) => {
    setSize(size);
    onOpen();
  };

  const submit = () => {
    //@ts-ignore -> Property 'submitFile' does not exist on type 'never'
    if (childRef.current) childRef.current.submitFile();
  };

  return (
    <>
      <Button onPress={() => handleOpen('lg')}>Upload Bank Statement</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Upload your bank statement
              </ModalHeader>
              <ModalBody>
                <DropFile ref={childRef}></DropFile>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={submit}>
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
