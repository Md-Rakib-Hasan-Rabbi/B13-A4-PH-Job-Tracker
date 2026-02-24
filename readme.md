1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-->getElementById selects a single element using its unique id.
   getElementsByClassName selects multiple elements that have the same class name.
   querySelector selects the first element that matches a CSS selector.
   querySelectorAll selects all elements that match a CSS selector.

2. How do you create and insert a new element into the DOM?
-->Create a new element using document.createElement()
   Add content or attributes with innerText, innerHTML, or className
   Insert it into the DOM using appendChild(), prepend(), or insertBefore().


3. What is Event Bubbling? And how does it work?

-->Event happens on a Element then the event moves upwards to its parent, then grandparent and so on. Each parent can listen to the event. This is how event bubbling work.

4. What is Event Delegation in JavaScript? Why is it useful?

-->Event Delegation is a technique where you attach a single event listener to a parent element instead of each child element. The parent handles events for its children.
It keeps code cleaner and easier to manage.


5. What is the difference between preventDefault() and stopPropagation() methods?
-->preventDefault(): Stops the default action of an element from happening.
   stopPropagation(): Stops the event from bubbling up to parent elements.