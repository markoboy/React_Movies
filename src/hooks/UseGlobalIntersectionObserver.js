import isSSR from '@utils/isSSR';
import { useEffect } from 'react';

/**
 * Stores callbacks registered for elements that will intersect the window viewport.
 *
 * @type {Map<Element, ((element: Element) => void)[]>}
 */
const observersCallbackMap = new Map();

/**
 * The intersection callback to be called every time an element intersects
 * the observer. If callbacks are registered for the intersecting element it
 * will call all callbacks recursively.
 *
 * @param {IntersectionObserverEntry[]} entries
 */
const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const elem = entry.target;

      if (observersCallbackMap.has(elem)) {
        observersCallbackMap.get(elem).forEach((fn) => fn(elem));
      }
    }
  });
};

/**
 * @type {IntersectionObserver}
 */
let observer;

if (typeof IntersectionObserver !== 'undefined' && !isSSR()) {
  /**
   * @type {IntersectionObserverInit}
   */
  const options = {
    root: document.body,
    rootMargin: '15%',
    threshold: 1.0,
  };

  observer = new IntersectionObserver(intersectionCallback, options);
}

/**
 * Adds an Element to the observers map to call the callback when it becomes
 * available on the viewport.
 *
 * @param {Element} target The target element
 * @param {(element: Element) => void} callback The callback to attach
 */
function addObserver(target, callback) {
  if (!target) {
    return;
  }

  if (!observer) {
    callback(target);
    return;
  }

  const previousCallbacks = observersCallbackMap.get(target) || [];

  observersCallbackMap.set(target, previousCallbacks.concat(callback));
  observer.observe(target);
}

/**
 * Removes an Element from being observed when it becomes visible on the viewport.
 *
 * @param {Element} target The target element
 * @param {(element: Element) => void} callback The callback that has been attached for the element
 */
function removeObserver(target, callback) {
  if (observer && target) {
    observer.unobserve(target);
    const currentCallbacks = observersCallbackMap.get(target);
    observersCallbackMap.set(
      target,
      currentCallbacks.filter((fn) => fn !== callback)
    );
  }
}

/**
 * Observe when an Element is visible on the viewport. A callback is called
 * when the Element becomes visible.
 *
 * @param {Object} options
 * @param {Element} options.target The element target to observe
 * @param {(element: Element) => void} options.callback The callback to call when element is visible
 * @param {boolean} options.once If the callback should be removed after it has been called
 */
export default function useGlobalIntesectionObserver({
  target,
  callback,
  once,
}) {
  useEffect(() => {
    const observerCallback = (element) => {
      callback(element);

      if (once) {
        removeObserver(target, observerCallback);
      }
    };

    addObserver(target, observerCallback);

    return () => removeObserver(target, observerCallback);
  }, [target, callback, once]);
}
