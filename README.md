# Atlys Assignment

URL - https://atlys-assignment-nu.vercel.app/

Features -
* Infinte loading (implemented a custom hook for that)
* Fixed image container as placeholder (to prevent LCP) - part of optimisation
* Pre-fetch - part of optimisation
* Responsive
* Lazy-loading
* Other optimisations
  * Virtualisation 

## File Structure

```
src
|
|--hooks
| |
| |--useInfininteQuery.js
|
|
|
|-components
| |
| |--Gallery (to display the image grid)
| |--LoadMore (common component to check if to load the next page in infinte loading)
| |--Overlay (to view individual result)
| |--Results (all the logic)
```
