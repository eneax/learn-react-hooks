<h1 align="center">
  <a href="https://ui.dev">
    <img
      src="https://ui.dev/images/logos/ui.png"
      alt="ui.dev logo" width="300" />
  </a>
  <br />
</h1>

### Info

This repo contains all the notes and exercises for UI.dev's [React Hooks](https://ui.dev/react-hooks) course.

### Summary

- `useState`: persist value between renders and trigger a re-render

- `useRef`: persist value between renders, but doesn't trigger a re-render

- `useEffect`: perform side effects (in functional components) that run after render

- `useReducer`: `useState` following a reducer pattern

- `useContext`: access context values (React Context is a way to manage state globally)

- `useMemo`: memoize value between renders

- `useCallback`: persist referential equality between renders (so that React uses the same function from the previous render)

- `useLayoutEffect`: run an effect synchronously immediately after React has performed all DOM mutations (useful if you need to get the scroll position and then make DOM mutations or trigger a synchronous re-render by updating state)
