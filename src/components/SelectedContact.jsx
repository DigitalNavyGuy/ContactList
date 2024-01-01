import { useState } from "react";

const SelectedContact = ({ selectedContact }) => {

    return <div>
        {selectedContact && selectedContact.name}
    </div>
}

export default SelectedContact;