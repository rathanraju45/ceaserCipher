import { $query, int } from "azle";

$query
export function encryptMessage(message : string,shift : int) : string{
    let encryptedMessage = '';
    let shiftValue = Number(shift);
    for (let i=0;i<message.length;i++){
        let fragment = message[i];
        let fragmentCode = fragment.charCodeAt(0);
        if(fragment.match(/[a-zA-Z]/)){
            if (fragment === fragment.toUpperCase()){
                let shiftedPosition = (fragmentCode + shiftValue - 65) % 26 + 65;
                encryptedMessage += String.fromCharCode(shiftedPosition);
            }
            else{
                let shiftedPosition = (fragmentCode + shiftValue - 97) % 26 +97;
                encryptedMessage += String.fromCharCode(shiftedPosition);
            }
        }
        else{
            encryptedMessage += fragment;
        }
    }
    return encryptedMessage
}

$query
export function decryptMessage(message : string,shift : int) : string{
    let decryptedMessage = '';
    let shiftValue = 26 - Number(shift);
    for (let i=0;i<message.length;i++){
        let fragment = message[i];
        let fragmentCode = fragment.charCodeAt(0);
        if (fragment.match(/[a-zA-Z]/)){
            if (fragment === fragment.toUpperCase()){
                let shiftedPosition = (fragmentCode + shiftValue - 65) % 26 + 65;
                decryptedMessage += String.fromCharCode(shiftedPosition);
            }
            else{
                let shiftedPosition = (fragmentCode + shiftValue - 97) % 26 +97;
                decryptedMessage += String.fromCharCode(shiftedPosition);
            }
        }
        else{
            decryptedMessage += fragment;
        }
    }
    return decryptedMessage
}