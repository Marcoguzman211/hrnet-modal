# HRNet-modal Component
The `Marcoguzman-modal` component is a React component that displays a modal window with an "OK" button. It can be used to display a message or prompt to the user when he adds a new employee.

## Installation
To use the `HRNet-modal` component in your React application, you can install it from npm by running the following command:

```` bash
npm install @hrnet/modal
````
## Usage
To use the `HRNet-modal` component, import it into your React component and render it as follows:

````jsx
import React, { useState } from 'react';
import Modal from '@marcoguzman/hrnet-modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);
    
    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            <Modal onClose={handleModalClose} employeeName="John Doe" isOpen={isModalOpen} />
        </div>
    );
};
````
The `Marcoguzman-modal` component takes two props:

- `onClose`: A function to be called when the user clicks the "OK" button or closes the modal.
- `empolyeeName`: A string representing the name of the employee that was created.
## Example
Here is an example of using the `HRNet-modal` component in a React application:

````jsx
import React, { useState } from 'react';
import Modal from '@marcoguzman/hrnet-modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalClose = () => setIsModalOpen(false);
    
    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>Create Employee</button>
            <Modal onClose={handleModalClose} employeeName="John Doe" isOpen={isModalOpen} />
        </div>
    );
}
````

## Props

| Nom           | Type     | Requis | Description                                  |
|---------------|----------|--------|----------------------------------------------|
| `onClose`     | fonction | Oui    | Une fonction à appeler lorsque l'utilisateur clique sur le bouton "OK". |
| `employeeName` | chaîne de caractères| Oui    | Le nom de l'employé créé.                      |


## License
This project is licensed under the MIT License. See the LICENSE file for details.
