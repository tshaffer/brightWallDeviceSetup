/** @module Model:base */

import {
  combineReducers
} from 'redux';
import { BrightSignState } from '../type';
import { 
  brightSignAttributesReducer, 
 } from './brightSignAttributes';
 import { 
  brightWallConfigurationReducer
 } from './brightWallConfiguration';
// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const brightWallModelReducer = combineReducers<BrightSignState>({
  brightSignAttributes: brightSignAttributesReducer,
  brightWallConfiguration: brightWallConfigurationReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
