/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export type Alignment = 'start' | 'end';
export type Side = 'top' | 'right' | 'bottom' | 'left';
export type AlignedPlacement = `${Side}-${Alignment}`;
export type Placement = Side | AlignedPlacement;
export type Strategy = 'absolute' | 'fixed';
export type Axis = 'x' | 'y';
export type Length = 'width' | 'height';

export type Coords = { [key in Axis]: number };

export type SideObject = { [key in Side]: number };

export type Dimensions = { [key in Length]: number };

export type Rect = Coords & Dimensions;

export type ClientRectObject = Rect & SideObject;

export type RootBoundary = 'viewport' | 'document';
export type Padding = number | Partial<SideObject>;
export type ElementContext = 'reference' | 'floating';

export interface ElementRects {
  reference: Rect;
  floating: Rect;
}

export interface NodeScroll {
  scrollLeft: number;
  scrollTop: number;
}

export interface VirtualElement {
  getBoundingClientRect(): ClientRectObject;
  contextElement?: Element;
}

export type ReferenceElement = Element | VirtualElement;
export type FloatingElement = HTMLElement;
export type ReferenceType = Element | VirtualElement;

export interface Elements {
  reference: ReferenceElement;
  floating: FloatingElement;
}

export interface PluginData {
  [key: string]: any;
  arrow?: Partial<Coords>;
  hide?: {
    referenceHiddenOffsets?: SideObject;
    referenceHidden?: boolean;
  };
  flip?: {
    index?: number;
    overflows: Array<{
      placement: Placement;
      overflows: Array<number>;
    }>;
  };
}

export interface PluginArguments extends Coords {
  initialPlacement: Placement;
  placement: Placement;
  strategy: Strategy;
  rects: ElementRects;
  elements: Elements;
  pluginData: PluginData;
}

export interface PluginReturn extends Partial<Coords> {
  data?: {
    [key: string]: any;
  };
  reset?:
    | true
    | {
        placement?: Placement;
        rects?: true | ElementRects;
      };
}

export type Plugin = {
  name: string;
  options?: unknown;
  fn: (pluginArguments: PluginArguments) => PluginReturn;
};

export interface ComputePositionConfig {
  placement?: Placement;
  strategy?: Strategy;
  plugin?: Array<Plugin>;
}

export interface ComputePositionReturn extends Coords {
  placement: Placement;
  strategy: Strategy;
  pluginData: PluginData;
}

export type ComputePosition = (
  reference: ReferenceElement,
  floating: FloatingElement,
  config: ComputePositionConfig
) => Promise<ComputePositionReturn>;

export type UseFloatingProps<RT extends ReferenceType = ReferenceType> =
  Partial<ComputePositionConfig> & {
    whileElementsMounted?: (
      reference: RT,
      floating: HTMLElement,
      update: () => void
    ) => void | (() => void);
  };

export type UseFloatingData = Omit<ComputePositionReturn, 'x' | 'y'> & {
  x: number | null;
  y: number | null;
};

export type UseFloatingReturn<RT extends ReferenceType = ReferenceType> =
  UseFloatingData & {
    update: () => void;
    reference: (node: RT | null) => void;
    floating: (node: HTMLElement | null) => void;
    refs: {
      reference: React.MutableRefObject<RT | null>;
      floating: React.MutableRefObject<HTMLElement | null>;
    };
  };
