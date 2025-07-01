# Accessible React Carousel (react-slideshow-image)

## Project Description

This project implements a **carousel/slider** using the [`react-slideshow-image`](https://www.npmjs.com/package/react-slideshow-image) library.  
The goal is to **test and improve accessibility** with keyboard navigation and screen readers, based on the WAI-ARIA Carousel Design Example.

---

## 🛠️ Features Implemented

- [x] Carousel with 4 slides using `react-slideshow-image`
- [x] Next / Previous buttons to navigate slides
- [x] Visually distinct **active slide** (blue border)
- [x] Pause/Play toggle for auto-play behavior
- [x] Keyboard arrow navigation support
- [x] `aria-live`, `aria-label`, `role=region` for screen reader enhancements
- [x] lighthouse score for Accessiblity is 100%

---

## Tech Stack

- React 18+
- react-slideshow-image
- HTML5, CSS
- Screen reader testing (NVDA )

---

## Accessibility Testing

### 1. Before Customization (Default Library Behavior)

| Test                          | Result                             |
| ----------------------------- | ---------------------------------- |
| Tab navigation to buttons     | Not focusable                      |
| Enter key to activate buttons | No button behavior                 |
| Arrow keys to move slides     | Not working                        |
| Screen reader announces slide | Only "button" or image, no context |
| Active slide indication       | Not visually different             |
| Pause/Play control            | Not available                      |

1.The tab is not switching between left and right button
2.Enter button is not moving slide left or right when the enter button is clicked.
3.NVDA test

- No proper reading of previous and next button when navigation to next slide on tab click.
- No proper reading of prev and next button when hover over button or navigate with tab.

---

### 2. After Customization (Improved Version)

| Feature                                                  | Status |
| -------------------------------------------------------- | ------ |
| Buttons use semantic `<button>` with `aria-label`s       | ✅     |
| Arrow keys move between slides                           | ✅     |
| Active slide shows visual indicator (border)             | ✅     |
| Screen reader announces current slide and image alt text | ✅     |
| Pause/Play toggle with correct labels                    | ✅     |
| Uses `role="region"`, `aria-roledescription="carousel"`  | ✅     |

> Example announcement with screen reader:  
> "Slide 2 of 4: City skyline at sunset"

---

## Comparison: WAI-ARIA Carousel Reference

| Element            | W3C Carousel                                       | This Project       |
| ------------------ | -------------------------------------------------- | ------------------ |
| Role & description | `role="region"`, `aria-roledescription="carousel"` | ✅ Implemented     |
| Keyboard support   | Tab, Arrow keys, Enter                             | ✅ Fully supported |
| Live region        | `aria-live="polite"` for slide updates             | ✅ Included        |
| Pause/Play toggle  | Optional                                           | ✅ Included        |

---

## existing issue with NVDA

- The left and right arrow functionality on browser works fine but when NVDA tries to read the arrow press on prev/next buttons it is not working as expected.I found that it is existing issue with NVDA application itself.

# reference links of above issue

https://github.com/nvaccess/nvda/issues/11143#issuecomment-1709339265
https://github.com/nvaccess/nvda/issues/15802

## How to Run

```bash
npm install
npm run dev
```
