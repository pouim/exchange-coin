/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {Wrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {Wrapper}
 */
export const findInputfield = (wrapper, value) => {
    return wrapper.find(`[data-test-input-name="${value}"]`);
};

/**
 * Return node(s) with the given data-test attribute.
 * @function findByTestVarName
 * @param {Wrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} value - Value of data-test attribute for search.
 * @param {string} attribute
 * @returns {Wrapper}
 */
export const findByTestVarName = (wrapper, attribute, value) => {
    return wrapper.find(`[data-test-${attribute}="${value}"]`);
};
