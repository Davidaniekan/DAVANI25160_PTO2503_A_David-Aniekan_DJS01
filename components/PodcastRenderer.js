import { formatDate } from "../utils/dateUtils.js";
import { getGenreNames } from "../utils/genreUtils.js";

/**
 * @class PodcastRenderer
 * @description Handles the creation and rendering of podcast preview cards in the main interface.
 */
export class PodcastRenderer {
  /**
   * @param {HTMLElement} containerEl - The container where podcasts will be displayed.
   * @param {Object[]} genres - List of available genres.
   * @param {Function} onCardClick - Callback function when a podcast is clicked.
   */
  constructor(containerEl, genres = [], onCardClick = () => {}) {
    this.containerEl = containerEl;
    this.genres = genres;
    this.onCardClick = onCardClick;
  }

}
