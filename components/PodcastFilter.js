import { getGenreNames } from "../utils/genreUtils.js";

/**
 * @class PodcastFilter
 * @description Handles podcast filtering, sorting, and search logic.
 */

export class PodcastFilter {
  /**
   * @param {Object[]} podcasts - Array of all podcasts.
   * @param {Object[]} genres - Array of all genres.
   */
  constructor(podcasts = [], genres = []) {
    this.podcasts = Array.isArray(podcasts) ? podcasts : [];
    this.genres = Array.isArray(genres) ? genres : [];
  }

  /**
   * Filters and sorts the podcast list.
   * @param {Object} criteria - Filter and sort options.
   * @param {string} [criteria.query] - Search term.
   * @param {string|number|null} [criteria.genre] - Selected genre name or ID.
   * @param {string} [criteria.sort] - Sort key ("recent", "newest", "popular").
   * @returns {Object[]} Filtered and sorted list of podcasts.
   */
  filter({ query = "", genre = null, sort = "recent" }) {
    let filtered = [...this.podcasts];

    // Search filter
    if (query) {
      const q = query.toLowerCase();
      filtered = filtered.filter((p) => {
        const titleMatch = p.title.toLowerCase().includes(q);
        const genreNames = getGenreNames(p.genres, this.genres)
          .join(" ")
          .toLowerCase();
        return titleMatch || genreNames.includes(q);
      });
    }

    // Genre filter
    if (genre !== null) {
      if (typeof genre === "number") {
        filtered = filtered.filter((p) => p.genres.includes(genre));
      } else if (typeof genre === "string") {
        filtered = filtered.filter((p) =>
          getGenreNames(p.genres, this.genres).some(
            (t) => t.toLowerCase() === genre.toLowerCase()
          )
        );
      }
    }

    return filtered;
  }
}
