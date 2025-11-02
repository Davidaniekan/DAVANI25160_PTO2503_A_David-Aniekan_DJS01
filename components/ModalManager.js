/**
 * @class ModalManager
 * @description Handles displaying and closing podcast detail modals.
 */
export class ModalManager {
  /**
   * @param {HTMLElement} modalEl - The modal container element.
   * @param {HTMLElement} modalContentEl - The inner modal content element.
   * @param {HTMLElement} closeButton - The close button element.
   */
  constructor(modalEl, modalContentEl, closeButton) {
    this.modalEl = modalEl;
    this.modalContentEl = modalContentEl;
    this.closeButton = closeButton;
  }
}
