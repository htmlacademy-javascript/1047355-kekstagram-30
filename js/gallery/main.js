import {createImagesData} from '../data.js';
import {renderThumbnails} from './thumbnail.js';
import './popup.js';
import {onThumbnailClick} from './popup-controller.js';
renderThumbnails(createImagesData());
onThumbnailClick();

