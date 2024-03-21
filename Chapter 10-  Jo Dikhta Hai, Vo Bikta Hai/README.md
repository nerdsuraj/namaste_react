## Namaste React Course by Akshay Saini
# Chapter 10 - Jo Dikhta Hai, Vo Bikta Hai

In this chapter, we will explore the concept of "Jo Dikhta Hai, Vo Bikta Hai" and learn how to enhance the visual appearance of our React application using Tailwind CSS.

To get started, follow these steps to install Tailwind CSS directly from the browser:

1. Visit [Tailwind CSS documentation](https://tailwindcss.com/docs/guides/parcel).
2. Follow the instructions provided to install Tailwind CSS using Parcel.

for the material ui website (https://mui.com/material-ui/).
for the bootstrap website (https://getbootstrap.com/).
for the chakra-ui website (https://chakra-ui.com/).
for the ant.design website (https://ant.design/components/button).




Once installed, you can apply Tailwind CSS classes directly to your React components to style them efficiently and effectively.

Here are some examples of Tailwind CSS classes along with explanations for each:
# Tailwind CSS Class Examples

Here are 100 examples of Tailwind CSS classes with explanations for each:

1. `bg-blue-500`: Sets the background color to blue.
2. `text-white`: Sets the text color to white.
3. `p-4`: Sets padding on all sides to 1rem.
4. `rounded-md`: Applies medium rounded corners to the element.
5. `text-2xl`: Sets the text size to 2xl (extra-large).
6. `font-bold`: Sets the font weight to bold.
7. `mb-2`: Sets margin bottom to 0.5rem.
8. `text-lg`: Sets the text size to lg (large).
9. `bg-red-500`: Sets the background color to red.
10. `text-gray-200`: Sets the text color to a light gray shade.
11. `p-8`: Sets padding on all sides to 2rem.
12. `rounded-lg`: Applies large rounded corners to the element.
13. `text-3xl`: Sets the text size to 3xl (extra-extra-large).
14. `font-semibold`: Sets the font weight to semi-bold.
15. `mb-4`: Sets margin bottom to 1rem.
16. `text-sm`: Sets the text size to sm (small).
17. `bg-green-300`: Sets the background color to a light green shade.
18. `text-yellow-600`: Sets the text color to a dark yellow shade.
19. `px-4`: Sets horizontal padding to 1rem.
20. `py-4`: Sets vertical padding to 1rem.
21. `text-center`: Aligns text to the center.
22. `font-normal`: Sets the font weight to normal.
23. `mt-2`: Sets margin top to 0.5rem.
24. `border`: Adds a border to the element.
25. `border-gray-300`: Sets the border color to a light gray shade.
26. `shadow-md`: Adds a medium shadow to the element.
27. `hover:bg-gray-100`: Changes the background color to light gray on hover.
28. `hover:text-blue-500`: Changes the text color to blue on hover.
29. `focus:outline-none`: Removes focus outline from the element.
30. `underline`: Adds underline to the text.
31. `italic`: Sets the text style to italic.
32. `capitalize`: Capitalizes the text.
33. `whitespace-nowrap`: Prevents text from wrapping to the next line.
34. `leading-normal`: Sets normal line height for the text.
35. `z-10`: Sets the z-index of the element to 10.
36. `opacity-50`: Sets the opacity of the element to 50%.
37. `pointer-events-none`: Disables pointer events on the element.
38. `transition-all`: Applies a transition to all CSS properties.
39. `transform`: Applies a transform to the element.
40. `scale-75`: Scales the element to 75% of its original size.
41. `rotate-45`: Rotates the element by 45 degrees.
42. `skew-x-6`: Skews the element horizontally by 6 degrees.
43. `origin-center`: Sets the transform origin to the center.
44. `absolute`: Positions the element absolutely.
45. `relative`: Positions the element relative to its normal position.
46. `top-0`: Sets the top position to 0.
47. `right-0`: Sets the right position to 0.
48. `bottom-0`: Sets the bottom position to 0.
49. `left-0`: Sets the left position to 0.
50. `grid-cols-2`: Sets the number of columns in a grid container to 2.
51. `grid-rows-3`: Sets the number of rows in a grid container to 3.
52. `gap-4`: Sets the gap between grid items to 1rem.
53. `place-items-center`: Centers grid items horizontally and vertically.
54. `place-self-start`: Aligns the grid item to the start.
55. `justify-center`: Centers grid items horizontally.
56. `align-center`: Centers grid items vertically.
57. `grid-flow-row`: Sets the flow direction of grid items to row.
58. `grid-flow-col`: Sets the flow direction of grid items to column.
59. `flex`: Enables flexbox layout on the element.
60. `flex-row`: Sets the flex direction to row.
61. `flex-col`: Sets the flex direction to column.
62. `justify-between`: Aligns flex items with space between them.
63. `justify-around`: Aligns flex items with space around them.
64. `items-center`: Centers flex items vertically.
65. `content-center`: Centers flex items horizontally.
66. `flex-grow`: Allows a flex item to grow to fill the available space.
67. `flex-shrink`: Allows a flex item to shrink if needed.
68. `order-1`: Sets the order of the flex item to 1.
69. `order-2`: Sets the order of the flex item to 2.
70. `order-3`: Sets the order of the flex item to 

Here's how you can use these classes in your React components:

```jsx
import React from 'react';

function ExampleComponent() {
  return (
    <div>
      {/* Example 1 */}
      <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
        Example 1: Background color is red, text color is white, padding is 1rem, rounded corners are applied.
      </div>

      {/* Example 2 */}
      <div className="text-gray-200 font-semibold p-8 rounded-lg mb-4">
        Example 2: Text color is light gray, font weight is semi-bold, padding is 2rem, rounded corners are applied.
      </div>

      {/* Example 3 */}
      <div className="bg-green-300 text-yellow-600 p-4 rounded-lg mb-4">
        Example 3: Background color is light green, text color is dark yellow, padding is 1rem, rounded corners are applied.
      </div>

      {/* Add more examples as needed */}
    </div>
  );
}

export default ExampleComponent;
