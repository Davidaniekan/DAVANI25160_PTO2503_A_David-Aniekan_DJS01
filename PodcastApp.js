import { ModalManager } from "./components/ModalManager.js";
import { PodcastFilter } from "./components/PodcastFilter.js";
import { PodcastRenderer } from "./components/PodcastRenderer.js";
import { parseGenreSelectLabel } from "./utils/genreUtils.js";

/**
 * @class PodcastApp
 * @description Main controller class that coordinates filtering, rendering, and modal actions.
 */
export class PodcastApp {
  /**
   * Initializes all components and event listeners.
   * @param {Object} data - The dataset.
   * @param {Object[]} data.podcasts - List of podcast shows.
   * @param {Object[]} data.genres - List of available genres.
   * @param {Object[]} data.seasons - List of season details per show.
   */
  constructor({ podcasts, genres, seasons }) {
    this.podcasts = podcasts || [];
    this.genres = genres || [];
    this.seasons = seasons || [];

  }
}
