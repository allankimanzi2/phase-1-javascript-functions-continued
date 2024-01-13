//  Implementing saturdayFun function
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Implementing mondayWork function
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Implementing wrapAdjective function
  function wrapAdjective(flair = '*') {
    return function (adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example usage of wrapAdjective
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer")); 
  // Output: "You are !!!a dedicated programmer!!!"
  