// FETCHING SECTIONS WHEN CLICKING MENU BUTTONS
function loadContent(page) {
    // Use Fetch API to get the content of the specified HTML page
    fetch(page)
        .then(response => response.text())
        .then(content => {
            // Replace the content of the main element with the loaded content
            document.getElementById('main-content').innerHTML = content;
        })
        .catch(error => console.error('Error loading content:', error));
}

// <nav> BUTTONS' APPEARANCE CHANGE
document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');

    nav.addEventListener('click', function (event) {
        const clickedElement = event.target;

        // Check if the clicked element is a button
        if (clickedElement.nodeName === 'BUTTON') {
            const buttons = nav.querySelectorAll('button');

            // Iterate through all buttons and remove 'clicked' class
            buttons.forEach(function (button) {
                button.classList.remove('clicked');
            });

            // Add 'clicked' class to the clicked button
            clickedElement.classList.add('clicked');
        }
    });
});

// Function to animate a flex item
function animateFlexItem(item, scaleX, scaleY) {
    const rect = item.getBoundingClientRect();
    const translateX = -rect.left;
    const translateY = -rect.top;

    item.animate(
        [
            {
                transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
            },
            { transform: 'none' },
        ],
        {
            duration: 250,
            easing: 'ease-out',
        }
    );
}



// TAGS FILTER
window.toggleTag = function(tagId) {
    const tagButton = document.getElementById(tagId);

    if (tagButton) {
        const tagCircle = tagButton.querySelector('.tag-circle');

        if (tagCircle) {
            tagCircle.classList.toggle('clicked');

            // Selects all elements with the class 'tag-circle' that also have the 'clicked' class and stores them in the clickedTags variable.
            const clickedTags = document.querySelectorAll('.tag-circle.clicked');

            // If no tags are clicked, show all grid items. If no tags are clicked, it selects all elements with the class 'grid-projects-item' and removes the 'hidden' class from each, making all grid items visible. If there are clicked tags, it enters else
            if (clickedTags.length === 0) {
                const gridItems = document.querySelectorAll('.grid-projects-item');
                gridItems.forEach(item => {
                    item.classList.remove('hidden');
                });
            } else {
                // Show grid items associated with all clicked tags
                const associatedItems = document.querySelectorAll('.grid-projects-item');

                associatedItems.forEach(item => {
                    const itemTags = item.dataset.tags.split(', ');

                    // Check if all clicked tags are in the current item's tags
                    const isVisible = Array.from(clickedTags).every(tag => {
                        const tagId = tag.parentElement.id;
                        return itemTags.includes(tagId);
                    });

                    if (isVisible) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            }
        }
    }
};



// // ITEM REMOVAL ANIMATION
// // Function to remove a flex item with animation
// function removeFlexItemWithAnimation(container, item) {
//     const oldFlexItemsInfo = getFlexItemsInfo(container);
//     container.removeChild(item);
//     const newFlexItemsInfo = getFlexItemsInfo(container);

//     animateFlexItems(oldFlexItemsInfo, newFlexItemsInfo);
// }
// // Function to get information about flex items (position, size)
// function getFlexItemsInfo(container) {
//     return Array.from(container.children).map(item => {
//         const rect = item.getBoundingClientRect();
//         return {
//             element: item,
//             x: rect.left,
//             y: rect.top,
//             width: rect.right - rect.left,
//             height: rect.bottom - rect.top,
//         };
//     });
// }
// // Function to animate flex items
// function animateFlexItems(oldFlexItemsInfo, newFlexItemsInfo) {
//     newFlexItemsInfo.forEach(newFlexItemInfo => {
//         const oldFlexItemInfo = oldFlexItemsInfo.find(
//             itemInfo => itemInfo.element === newFlexItemInfo.element
//         );

//         const translateX = oldFlexItemInfo.x - newFlexItemInfo.x;
//         const translateY = oldFlexItemInfo.y - newFlexItemInfo.y;
//         const scaleX = oldFlexItemInfo.width / newFlexItemInfo.width;
//         const scaleY = oldFlexItemInfo.height / newFlexItemInfo.height;

//         newFlexItemInfo.element.animate(
//             [
//                 {
//                     transform: `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`,
//                 },
//                 { transform: 'none' },
//             ],
//             {
//                 duration: 250,
//                 easing: 'ease-out',
//             }
//         );
//     });
// }
// // Adding click event listeners to each grid item
// const gridItems = document.querySelectorAll('.grid-projects-item');
// gridItems.forEach(item => {
//     item.addEventListener('click', () => {
//         removeFlexItemWithAnimation(document.querySelector('.grid-projects-container'), item);
//     });
// });

