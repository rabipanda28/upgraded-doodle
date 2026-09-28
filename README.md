# Data Beacon IQ — Front-End Starter

This is a standalone HTML/CSS/JavaScript implementation of the Data Beacon IQ landing-page concept.

## Run locally
1. Keep the folder structure unchanged.
2. Open `index.html` in a browser, or serve the folder with any static web server.
3. No build step or dependency is required.

Example:
- VS Code + Live Server
- `python -m http.server 8080`
- Any static hosting service

## Files
- `index.html` — page structure and content
- `styles.css` — responsive styling, gradients, cards, navigation
- `app.js` — search/filter interactions and mobile navigation
- `assets/data-beacon-hero.png` — generated visual used in the hero

## Integration
The page is intentionally framework-free so it can be migrated into React, Angular, Next.js, or another application.

Replace:
- `alert(...)` in the Data Beacon AI button with your AI-agent endpoint.
- The navigation button handlers with your application routes.
- Product/use-case arrays with API data.
- Search/filter logic with your enterprise search/catalogue API.

Suggested backend/API objects:
`DataProduct`, `UseCase`, `Domain`, `PipelineItem`, `Update`, `UserSubscription`, `DataRequest`.

## Recommended next step
For production, convert the repeated cards into reusable components and connect the search, marketplace, catalogue, Jira/request workflow, and Data Beacon AI assistant to your enterprise APIs.
# upgraded-doodle
