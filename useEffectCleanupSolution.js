```javascript
useEffect(() => {
  const subscription = someObservable.subscribe(data => {
    // ... handle data ...
  });

  return () => {
    try {
      if (subscription) {
        subscription.unsubscribe();
      }
    } catch (error) {
      console.error('Error during cleanup:', error);
    }
  };
}, []);
```