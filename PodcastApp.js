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

    // UI Elements
    this.podcastListEl = document.getElementById("podcastList");
    this.searchInput = document.getElementById("searchBar");
    this.searchBtn = document.querySelector(".search-btn");
    this.searchContainer = document.querySelector(".search-container");
    this.genreSelect = document.getElementById("genreSelect");
    this.sortSelect = document.getElementById("sortSelect");
    this.podcastIcon = document.getElementById("podcastIcon");

    // Managers
    this.modalManager = new ModalManager(
      document.getElementById("modal"),
      document.getElementById("modalContent"),
      document.querySelector(".close-button")
    );

    this.filter = new PodcastFilter(this.podcasts, this.genres);
    this.renderer = new PodcastRenderer(this.podcastListEl, this.genres, (p) =>
      this.modalManager.open(p, this.genres, this.seasons)
    );

    // set default selections if none
    this._ensureSelectDefaults();

    // Bind UI actions
    this._bindUIActions();

    // Initial render
    this.applyFilters();

    // Podcast icon reload handler
    this._bindPodcastIconReload();
  }

}
