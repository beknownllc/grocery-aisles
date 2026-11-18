# Aisle Walk

A phone grocery app: walk the store one aisle at a time, tap foods to add them, then check them off while shopping. Food data comes from a 236-food nutrition guide (Fit score, protein, fiber, saturated fat). Carts and saved trips are stored on the device.

Static site: `index.html`, `foods.js`, `sw.js`, `manifest.webmanifest`. No build step.

Per-store availability lives in `stores.js`. The + button adds your own items: pick a guide food for nutrition facts, or type anything and choose an aisle (there is a "Household & other" aisle). Added items show in a "Your adds" section at the top of their aisle.

## UI notes
- The shopping list (cart screen) is also the in-store checklist: tap the box to check off, Done shopping clears it and tags last trip.
- Store picker and aisle order live in the store button next to search.
- Undo toast for removals; update banner appears when a new version is cached.

## Smarter nutrition
Custom items can get nutrition from USDA FoodData Central and Open Food Facts (tap the closest match), or from the label. Results are cached locally. Add a personal USDA key under Lookup settings for higher limits. Fit scores on custom items are estimates (Fit ~N).
