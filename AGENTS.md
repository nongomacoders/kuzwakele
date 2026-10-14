# Kuzwakele Workspace Guidelines & Workflows

## Post-Coding Deployment Rule
Whenever completing any coding, styling, feature addition, or bug fix:
1. Run `npm run build` in `frontend/` to verify zero compilation errors and refresh `dist/`.
2. Always deploy the updated frontend to Firebase Hosting:
   ```powershell
   cd frontend
   firebase deploy --only hosting
   ```
3. Live production app is hosted at: `https://kuzwakele-33067.web.app` (Firebase project: `kuzwakele-33067`).
