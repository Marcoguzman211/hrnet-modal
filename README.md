# HRNet-modal Component
The `HRNet-modal`  component is a React component that displays a modal window with a button. It can be used to display a message or prompt to the user when he adds a new employee.

## Installation
To use the `HRNet-modal` component in your React application, you can install it from npm by running the following command:

```` bash
npm i hrnet-modal-marco-guzman
````
## Usage
To use the `HRNet-modal` component, import it into your React component and render it as follows:

````jsx
import React, { useState } from 'react';
import Modal from 'hrnet-modal-marco-guzman';

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
import Modal from 'hrnet-modal-marco-guzman';

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

| Nom            | Type     | Requis | Description                                                  |
|----------------|----------|--------|--------------------------------------------------------------|
| `onClose`      | fonction | Oui    | Function called when the button is clicked                  |
| `employeeName` | chaîne de caractères| Oui    | The name of the employee created                             |
| `headerText`   | chaîne de caractères| Non    | Title of the Modal                                           |
| `bodyText`     | chaîne de caractères| Non    | Text before employee name                                    |
| `buttonText`   | chaîne de caractères| Non    | Text of button that calls a function                         |
| `buttonClass`  | chaîne de caractères| Non    | Custom css class for the button.                             |
| `sizeClass`    | chaîne de caractères| Non    | Custom css class for the size of the Modal.                  |
| `bgColorClass` | chaîne de caractères| Non    | Custom css class for the background color, behind the Modal. |

## License
This project is licensed under the MIT License. See the LICENSE file for details.
