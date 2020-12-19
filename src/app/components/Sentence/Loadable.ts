/**
 *
 * Asynchronously loads the component for Sentence
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Sentence = lazyLoad(
  () => import('./index'),
  module => module.Sentence,
);
