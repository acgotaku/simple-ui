import {
  ReferenceElement,
  FloatingElement,
  Strategy,
  ElementRects
} from '../types';
import { getRectRelativeToOffsetParent } from './getRectRelativeToOffsetParent';
import { getOffsetParent } from './getOffsetParent';
import { getDimensions } from './getDimensions';

type GetElementRects = (args: {
  reference: ReferenceElement;
  floating: FloatingElement;
  strategy: Strategy;
}) => ElementRects;

export const getElementRects: GetElementRects = ({
  reference,
  floating,
  strategy
}) => ({
  reference: getRectRelativeToOffsetParent(
    reference,
    getOffsetParent(floating),
    strategy
  ),
  floating: { ...getDimensions(floating), x: 0, y: 0 }
});
