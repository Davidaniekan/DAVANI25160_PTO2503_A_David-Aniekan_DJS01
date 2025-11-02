/**
 * @module utils/genreUtils
 * @description Utility functions for working with podcast genres.
 */

/**
 * Maps genre IDs to their corresponding genre names.
 * 
 * @param {number[]} genreIds - Array of genre IDs associated with a podcast.
 * @param {Object[]} genres - The full list of available genres.
 * @returns {string[]} An array of genre titles corresponding to the provided IDs.
 */
export function getGenreNames(genreIds = [], genres = []) {
  return genreIds
    .map((id) => genres.find((g) => g.id === id)?.title)
    .filter(Boolean);
}
