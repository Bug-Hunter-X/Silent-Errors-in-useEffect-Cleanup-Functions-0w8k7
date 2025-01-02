# Silent Errors in React Native useEffect Cleanup Functions

This repository demonstrates a common, yet difficult-to-debug issue in React Native: silent errors within the cleanup function of the `useEffect` hook.  When a cleanup function throws an error, it's often swallowed, leaving developers puzzled.

## Problem
The provided `useEffectCleanupBug.js` file showcases a scenario where an error in the cleanup function goes unnoticed.  This typically happens when resources are released (e.g., unsubscribing from an observable) and an unexpected state occurs (e.g., already unsubscribed).  The error is not logged to the console, making identification and resolution challenging.

## Solution
The solution, implemented in `useEffectCleanupSolution.js`, uses a `try...catch` block within the cleanup function to handle potential errors gracefully.  This ensures that any errors are caught and logged to the console, providing valuable debugging information. The solution also adds a check to avoid unnecessary calls to `unsubscribe`. 

## How to Reproduce
1. Clone the repository.
2. Navigate to the project directory.
3. Run the buggy example (`useEffectCleanupBug.js` and then `useEffectCleanupSolution.js`).
4. Observe the console output for the difference in error handling.