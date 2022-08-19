interface I {
    [action: string]: string;
}

const action: I = {
    CHOOSE_TAG: "CHOOSE_TAG",
    CHOOSE_DESTINATION: "CHOOSE_DESTINATION",
    CHOOSE_DATE: "CHOOSE_DATE",
    CLEAR: "CLEAR",
}

export default action;