import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from "!!raw-loader!sass-loader!./index.scss";
import classNames from "classnames";
import IconSync from '../../../static/img/icon-color-mode-sync.svg'
import IconLightMode from '../../../static/img/icon-light-mode.svg'
import IconDarkMode from '../../../static/img/icon-dark-mode.svg'

function generateModeRefsArray(length) {
  return Array.from({ length }, () => useRef(null));
}

const modes = {
  light: {
    label: "light mode",
    icon: IconLightMode,
  },
  dark: {
    label: "dark mode",
    icon: IconDarkMode,
  },
  systemSetting: {
    label: "use system setting",
    icon: IconSync,
  }
};

export default function ColorMode() {
  const colorSwitcherRef = useRef(null)
  const switchButtonRef = useRef(null);
  const modeRefs = generateModeRefsArray(Object.keys(modes).length);

  const [activeMode, setActiveMode] = useState("light"); // For selected button - can be light/dark/systemSetting
  const [pageTheme, setPageTheme] = useState("light"); // For CSS - can be only light/dark now
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const [focusIndex, setFocusIndex] = useState(-1);

  const getActiveModeIndex = useCallback(() => {
    return Object.keys(modes).indexOf(activeMode);
  }, [activeMode]);

  useEffect(() => {
    const storedMode = localStorage.getItem('colorMode');

    if (storedMode) {
      setActiveMode(storedMode);
    } else if (window.matchMedia && (window.matchMedia('(prefers-color-scheme: light)').matches) || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setActiveMode('systemSetting');
    } else {
      setActiveMode('light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('colorMode', activeMode);

    let isDarkMode = activeMode === "dark"

    if (activeMode === "systemSetting") {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    setPageTheme(isDarkMode ? "dark" : "light")
    setFocusIndex(getActiveModeIndex());
  }, [activeMode]);

  useEffect(() => {
    if (isButtonExpanded) {
      modeRefs[focusIndex]?.current?.focus();
    }
  }, [isButtonExpanded, focusIndex, modeRefs]);

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        setIsButtonExpanded(false);
        setFocusIndex(getActiveModeIndex());
        switchButtonRef.current.focus();
        break;
      case ' ':
      case 'Enter':
        if (document.activeElement === switchButtonRef.current) {
          e.preventDefault();
          setIsButtonExpanded(!isButtonExpanded);
          setFocusIndex(getActiveModeIndex());
        }
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        e.preventDefault();

        if (isButtonExpanded) {
          const direction = e.key === 'ArrowDown' ? 1 : -1;
          const visibleMenuButtons = modeRefs.length
          let newIndex = focusIndex + direction

          if (newIndex < 0 ) {
            newIndex = visibleMenuButtons - 1
          } else if (newIndex > visibleMenuButtons - 1) {
            newIndex = 0
          }

          setFocusIndex(newIndex);
        } else {
          setIsButtonExpanded(true);
        }
        break;
      default:
        break;
    }
  };

  const ActiveModeIcon = modes[activeMode].icon;

  return (
    <>
      <div className="html" data-color-mode={pageTheme}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div
          ref={colorSwitcherRef}
          className="color-mode-switcher"
          onKeyDown={handleKeyDown}
        >
          <div className="color-mode-switcher__toggle-wrapper">
            <button
              className={classNames({
                "color-mode-switcher__toggle": true,
                "color-mode-switcher__toggle--expanded": isButtonExpanded
              })}
              type="button"
              aria-expanded={isButtonExpanded}
              aria-label={`Set color mode (currently ${modes[activeMode].label})`}
              title={`Set color mode (currently ${modes[activeMode].label})`}
              onClick={() => setIsButtonExpanded(!isButtonExpanded)}
              ref={switchButtonRef}
            >
              <ActiveModeIcon />
            </button>
          </div>
          {isButtonExpanded && (
            <ul
              className="color-mode-switcher__menu"
              role="menu"
              onBlur={(e) => {
                if (!modeRefs.some(ref => ref.current === e.relatedTarget)) {
                  setIsButtonExpanded(false)
                }
              }}
            >
              {Object.entries(modes).map(([key, mode], index) => {
                const ModeIcon = mode.icon
                return (
                  <li key={key} className="color-mode-switcher__menu-item" role="presentation">
                    <button
                      className={classNames({
                        "color-mode-switcher__button": true,
                        "color-mode-switcher__button--selected": index === getActiveModeIndex()
                      })}
                      onClick={() => {
                        setActiveMode(key);
                        setIsButtonExpanded(false);
                        setFocusIndex(index);
                        switchButtonRef.current.focus();
                      }}
                      aria-label={`Set ${mode.label}`}
                      title={`Set ${mode.label}`}
                      ref={modeRefs[index]}
                      tabIndex="-1"
                      role="menuitem"
                    >
                      <ModeIcon />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <p>In this section, we demonstrate the light and dark mode styles switching
          using the ColorMode component. Switch between the light and dark modes in the color switcher
          button above to see the differences between these modes.</p>

        <div className="callout">
          <p>The light mode is designed with a bright color palette and high contrast for easy reading.</p>
          <p>The dark mode might be easier on the eyes, especially in low-light environments.</p>
        </div>

        <button className="btn" type="button">Sample button</button>

        <div className="sample-icon">
          <span>Sample icon:</span>
          <IconLightMode />
        </div>
      </div>
    </>
  );
}
