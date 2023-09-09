export const getValidationError = (errorCode) => {
    const codeMatcher = {
        ERR_NETWORK: "Error de red",
    }

    return codeMatcher[errorCode]
}