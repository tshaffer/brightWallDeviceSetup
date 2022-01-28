/** @module Model:base */

import {
  combineReducers
} from 'redux';
import { BrightSignConfig } from '../type';
import { 
  brightSignAttributesReducer, 
 } from './brightSignAttributes';
import { brightSignsInWallReducer } from './brightSignsInWall';
 import { 
  brightWallAttributesReducer
 } from './brightWallAttributes';
// -----------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------

// none

// -----------------------------------------------------------------------
// Reducers
// -----------------------------------------------------------------------
export const brightWallModelReducer = combineReducers<BrightSignConfig>({
  brightSignAttributes: brightSignAttributesReducer,
  brightWallAttributes: brightWallAttributesReducer,
  brightSignsInWall: brightSignsInWallReducer,
});

// -----------------------------------------------------------------------
// Validators
// -----------------------------------------------------------------------
