import { loadHandler } from '../handlers/loadHandler.js';

export const loadEvent = () => {
    window.addEventListener('DOMContentLoaded', loadHandler);
};
