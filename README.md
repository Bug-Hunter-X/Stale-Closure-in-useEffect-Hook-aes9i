# React useEffect Stale Closure Bug

This repository demonstrates a common React bug involving stale closures within the `useEffect` hook. The bug arises when a function inside `useEffect` relies on a value that changes over time, but that value isn't included in the dependency array. 

## Bug Description
The `MyComponent` component fetches data from an API. However, the `fetch` call is only made once upon initial render (due to the empty dependency array `[]`).  Subsequent updates to the `count` state do not trigger a new fetch, leading to stale data being used by the component.