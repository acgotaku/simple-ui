import React from 'react';
import ReactDOM from 'react-dom';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';
import { looseEqual } from '@/utils/misc';
import { useDidUpdate } from '@/hooks/useDidUpdate';
import {
  UseFloatingProps,
  UseFloatingData,
  UseFloatingReturn,
  ReferenceType
} from '../types';
import { computePosition } from '../computePosition';

export function useFloating<RT extends ReferenceType = ReferenceType>({
  plugin,
  placement = 'bottom',
  strategy = 'absolute',
  whileElementsMounted
}: UseFloatingProps = {}): UseFloatingReturn<RT> {
  const [data, setData] = React.useState<UseFloatingData>({
    x: null,
    y: null,
    strategy,
    placement,
    pluginData: {}
  });
  const [latestPlugin, setLatestPlugin] = React.useState(plugin);
  if (
    !looseEqual(
      latestPlugin?.map(({ name, options }) => ({ name, options })),
      plugin?.map(({ name, options }) => ({ name, options }))
    )
  ) {
    setLatestPlugin(plugin);
  }

  const reference = React.useRef<RT | null>(null);
  const floating = React.useRef<HTMLElement | null>(null);
  const cleanupRef = React.useRef<(() => void) | void | null>(null);
  const dataRef = React.useRef(data);

  const updated = useDidUpdate();

  const update = React.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }

    computePosition(reference.current, floating.current, {
      plugin: latestPlugin,
      placement,
      strategy
    }).then(data => {
      if (updated) {
        dataRef.current = data;
        ReactDOM.flushSync(() => {
          setData(data);
        });
      }
    });
  }, [latestPlugin, placement, strategy, updated]);

  useIsomorphicEffect(() => {
    // Skip first update
    if (updated) {
      update();
    }
  }, [update, updated]);

  const runElementMountCallback = React.useCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    if (reference.current && floating.current) {
      if (whileElementsMounted) {
        const cleanupFn = whileElementsMounted(
          reference.current,
          floating.current,
          update
        );

        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMounted]);

  const setReference: UseFloatingReturn<RT>['reference'] = React.useCallback(
    node => {
      reference.current = node;
      runElementMountCallback();
    },
    [runElementMountCallback]
  );

  const setFloating: UseFloatingReturn<RT>['floating'] = React.useCallback(
    node => {
      floating.current = node;
      runElementMountCallback();
    },
    [runElementMountCallback]
  );

  const refs = React.useMemo(() => ({ reference, floating }), []);

  return React.useMemo(
    () => ({
      ...data,
      update,
      refs,
      reference: setReference,
      floating: setFloating
    }),
    [data, update, refs, setReference, setFloating]
  );
}
