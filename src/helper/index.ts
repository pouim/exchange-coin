/**
 * Check value is empty or not.
 * @function isEmpty
 * @param {string | number | Array<any> | null | undefined} value
 * @returns {boolean}
 */
export const isEmpty = (value: unknown): boolean => {
    return typeof value === 'undefined' || value === null || value === '';
};
