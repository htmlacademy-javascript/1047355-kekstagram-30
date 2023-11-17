import {renderFilters} from './filters.js';
import {renderThumbnails} from './thumbnail.js';
import {renderPopup} from './popup.js';
import {applyRandomFilter, applyDiscussedFilter} from './data.js';

const setupImageGallery = (imagesData, reduceFrequency) => {
  renderFilters();
  renderThumbnails(imagesData);
  document.addEventListener('filterSelect',reduceFrequency((event) => {
    switch (event.detail) {
      case 'filter-default':
        renderThumbnails(imagesData);
        break;
      case 'filter-random':
        renderThumbnails(applyRandomFilter(imagesData));
        break;
      case 'filter-discussed':
        renderThumbnails(applyDiscussedFilter(imagesData));
        break;
    }
  }));

  document.addEventListener('thumbnailSelect', (event) => {
    renderPopup(event.detail);
  });
};
export {setupImageGallery};
