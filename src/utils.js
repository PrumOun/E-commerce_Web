import $ from 'jquery'; // Import jQuery first


 // Import Owl Carousel after jQuery
import mixitup from 'mixitup';


/**
 * Utility function to set background images from `data-setbg` attributes.
 */
export const applyBackgroundImages = () => {
  $(".set-bg").each(function () {
    const bg = $(this).data("setbg");
    if (bg) {
      $(this).css("background-image", `url(${bg})`);
    } else {
      console.warn("Missing data-setbg for element:", this);
    }
  });
};

/**
 * Utility function to initialize product filtering.
 * @param {string} containerSelector - The selector for the container of items to filter.
 * @param {string} controlSelector - The selector for the filter controls.
 */
export const initializeProductFilter = (containerSelector) => {
  try {
    const container = document.querySelector(containerSelector);
    if (container) {
      mixitup(container);
      console.log("MixItUp initialized successfully.");
    } else {
      console.warn(`Container not found for selector: ${containerSelector}`);
    }
  } catch (error) {
    console.error("Error initializing product filter:", error);
  }
};

/**
 * Utility function to initialize Hero Slider.
 */
