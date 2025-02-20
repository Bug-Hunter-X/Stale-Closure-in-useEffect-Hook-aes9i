```javascript
// Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct dependency array - includes 'count'
    fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // ... use data ...
      });
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```