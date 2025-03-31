function cannotBeConstructor() {
    if (new.target) {
      throw new TypeError('This function cannot be called with new');
    }
    console.log("Function called normally");
  }
  
  try {
    cannotBeConstructor(); 
    console.log("Regular call succeeded");
  } catch (e) {
    console.log("Regular call failed");
  }
  
  try {
    new cannotBeConstructor(); 
    console.log("Constructor call succeeded");
  } catch (e) {
    console.log("Constructor call failed:", e.message);
  }