import { useEffect } from 'react';

// AI generated (partially)

/**
 *
 * <HashNavigation/> Component to handle hash-based navigation with visual effects, 
 * Should be added at the bottom side of page
 * 
 * @param {Object} props Component props
 * @param {string} props.elementPrefix Prefix for element IDs (default: 'card-')
 * @param {string} props.elementSelector Selector for all elements in the group (default: '.content-card')
 * @param {string} props.highlightClass CSS class to apply to the target element (default: 'highlight-card')
 * @param {string} props.blurClass CSS class to apply to other elements (default: 'blur-card')
 * @param {number} props.effectDuration Duration of the visual effect in ms (default: 6000)
 * @param {number} props.scrollDelay Delay before scrolling in ms (default: 300)
 * @param {Object} props.scrollOptions Options for scrollIntoView (default: { behavior: 'smooth', block: 'center' })
 * @param {boolean} props.enabled Whether the component is enabled (default: true)
* */

export default function HashNavigation({ 
  elementPrefix = 'card-',
  elementSelector = '.content-card',
  highlightClass = 'highlight-card',
  blurClass = 'blur-card',
  effectDuration = 6000,
  scrollDelay = 300,
  scrollOptions = { behavior: 'smooth', block: 'center' },
  enabled = true
})
{
  useEffect(() => {
    if (!enabled) return;

    if (window.location.hash) {
      const hashValue = window.location.hash.substring(1);
      const targetElement = document.getElementById(`${elementPrefix}${hashValue}`);

      if (targetElement) {

        // Wait a moment for the page to fully render
        setTimeout(() => {

          // Scroll to the element
          targetElement.scrollIntoView(scrollOptions);
          
          // Get the container to add the overlay effect
          const container = document.querySelector('.container');
          if (container) {
            container.classList.add('hash-navigation-active');
          }

          // Add visual effects
          const allElements = document.querySelectorAll(elementSelector);

          // Add highlight class to the target element
          targetElement.classList.add(highlightClass);

          // Add blur to all other elements
          allElements.forEach(element => {
            if (element !== targetElement) {
              element.classList.add(blurClass);
            }
          });

          let effectTimeoutId = null;

          // Function to remove effects
          const removeEffects = () => {
            // Clear the existing timeout if it exists
            if (effectTimeoutId) {
              clearTimeout(effectTimeoutId);
              effectTimeoutId = null;
            }

            // Remove effects
            allElements.forEach(element => {
              element.classList.remove(blurClass);
            });
            targetElement.classList.remove(highlightClass);
            
            // Remove the container overlay
            if (container) {
              container.classList.remove('hash-navigation-active');
            }

            // Remove event listeners after effects are cleared
            document.removeEventListener('click', removeEffects);
            document.removeEventListener('touchstart', removeEffects);
          };

          // Add click and touch event listeners to dismiss effects
          document.addEventListener('click', removeEffects);
          document.addEventListener('touchstart', removeEffects);

          // Set timeout to automatically remove effects after duration
          effectTimeoutId = setTimeout(removeEffects, effectDuration);

        }, scrollDelay);
      }
    }

    // Cleanup function to ensure event listeners are removed
    return () => {
      const container = document.querySelector('.container');

      if (container) {
        container.classList.remove('hash-navigation-active');
      }
    };
  }, [enabled, elementPrefix, elementSelector, highlightClass, blurClass, effectDuration, scrollDelay, scrollOptions]);

  return null;
}
