```javascript
// Buggy component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect dependency array - missing 'count'
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // ... use data ...
      });
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```