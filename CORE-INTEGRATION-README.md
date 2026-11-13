# FITLY Core Integration Patch v3

This patch is for `chore/core-architecture`, after PRs #2, #3, #4 and #5 have been merged.

## What was verified in GitHub
- The four PRs are merged into `chore/core-architecture`.
- The merged app imports shared components that were not present in the branch tree:
  `Header.jsx`, `Sidebar.jsx`, `ClothingCard.jsx`, and `OutfitCard.jsx`.
- `App.jsx` did not pass the required delete/favorite callbacks to Dashboard, Outfit Studio and Favorites.
- The Favorites and Outfit Studio pages expect `onToggleOutfitFavorite`, but the original app did not implement/pass it.
- The app imports only `global.css` and `layout.css`; this patch adds and imports `components.css`.

## Files in this patch
- `src/App.jsx`
- `src/components/Header.jsx`
- `src/components/Sidebar.jsx`
- `src/components/ClothingCard.jsx`
- `src/components/OutfitCard.jsx`
- `src/styles/global.css`
- `src/styles/layout.css`
- `src/styles/components.css`

Do not replace the team members' page or feature-component files.

## Apply
1. Make sure your local branch is `chore/core-architecture`.
2. Pull the latest remote changes.
3. Extract this ZIP at the project root and replace/add only the listed paths.
4. Run build and lint.
5. Review the UI at desktop and mobile widths.
6. Commit the integration patch as one coherent commit (do not split this patch into artificial commits).

```powershell
git switch chore/core-architecture
git pull --ff-only origin chore/core-architecture
git status --short
npm run build
npm run lint
```

After applying the patch:
```powershell
git add src/App.jsx src/components/Header.jsx src/components/Sidebar.jsx src/components/ClothingCard.jsx src/components/OutfitCard.jsx src/styles/global.css src/styles/layout.css src/styles/components.css
git commit -m "feat: integrate shared FITLY app components and state"
git push origin chore/core-architecture
```

## Manual test checklist
- [ ] Dashboard loads; hero CTA navigates to Outfit Studio.
- [ ] Dashboard Add a new piece opens the clothing form.
- [ ] Add a clothing item with required name and colour.
- [ ] Invalid image URL shows validation error.
- [ ] New clothing item appears in Dashboard and Wardrobe.
- [ ] Search, category filter and sorting work.
- [ ] Favorite a clothing item; it appears in Favorites.
- [ ] Delete a clothing item; it disappears from all clothing lists.
- [ ] Generate outfit for a season/occasion with required categories.
- [ ] Save outfit; it appears in Saved Looks.
- [ ] Favorite outfit; it appears in Favorites.
- [ ] Delete outfit; it disappears from saved/favorite lists.
- [ ] Refresh browser; items and outfits persist in localStorage.
- [ ] Mobile navigation opens and closes.
- [ ] No horizontal overflow at 375px width.

## Important
This is the functional integration baseline, not the final Editorial Luxury visual polish. The final motion, image treatment and visual refinement can be done after integration and functional testing.
