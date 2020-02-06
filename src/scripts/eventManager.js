import validate from './validate.js'
import inputManager from './inputManager.js'

const eventManager = {
    runIt() {
        this.create();
    },
    create() {
        // * eventManager.create (Add evt on create button)
        document.getElementById("create-btn").addEventListener("click", (e) => {
            // Grab textarea value
            const textValue = inputManager.getValue("card-input");
            const hasError = validate.textarea(textValue);

            if (!hasError) {
                // const cardHTML = createHTML.card();

                // DOMManager.addCard(card)
                // eventManager.delete()
            }

        });

    }

}




// * eventManager.delete that creates evt on delete button
// DOMManager.removeCard([id of card])

// * eventManager.backgroundColor
// DOMManager.background
// * eventManager.fontColor

export default eventManager;