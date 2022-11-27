import { getNodeName } from './getNodeName';
import { getDocumentElement } from './getDocumentElement';

export function getParentNode(node: Node): Node {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (
    node.parentNode || // DOM Element detected
    getDocumentElement(node)
  );
}
