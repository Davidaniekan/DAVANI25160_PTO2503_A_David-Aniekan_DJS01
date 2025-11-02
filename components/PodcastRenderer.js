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

  /**
   * Renders a list of podcasts.
   * @param {Object[]} list - Array of podcast objects.
   */
  render(list = []) {
    this.containerEl.innerHTML = "";

    if (!list.length) {
      this.containerEl.innerHTML = `<p class="no-results">No podcasts found.</p>`;
      return;
    }

    list.forEach((show) => {
      const card = document.createElement("article");
      card.className = "podcast-item";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `${show.title} details`);

      // Image
      const podcastCover = document.createElement("img");
      podcastCover.className = "podcast-cover";
      podcastCover.src = show.image || "";
      podcastCover.alt = `${show.title} cover`;
      card.appendChild(podcastCover);

      // Info section
      const info = document.createElement("div");
      info.className = "podcast-info";

      const title = document.createElement("h2");
      title.textContent = show.title;
      info.appendChild(title);

      const seasonsP = document.createElement("p");
      seasonsP.className = "seasons";

      const seasonIcon = document.createElement("img");
      seasonIcon.src = "image/seasons-icon.svg";
      seasonIcon.className = "season-icon";
      seasonIcon.alt = "Seasons icon";

      seasonsP.appendChild(seasonIcon);
      seasonsP.appendChild(
        document.createTextNode(
          ` ${show.seasons} season${show.seasons === 1 ? "" : "s"}`
        )
      );
      info.appendChild(seasonsP);

      // Genre tags
      const genreWrap = document.createElement("div");
      genreWrap.className = "genre-tags";
      getGenreNames(show.genres, this.genres).forEach((g) => {
        const tag = document.createElement("span");
        tag.className = "genre-tag";
        tag.textContent = g;
        genreWrap.appendChild(tag);
      });
      info.appendChild(genreWrap);

      // Updated date
      const updatedP = document.createElement("p");
      updatedP.className = "updated";
      updatedP.textContent = `Updated: ${formatDate(show.updated)}`;
      info.appendChild(updatedP);

      card.appendChild(info);

      this.containerEl.appendChild(card);
    });
  }
}
