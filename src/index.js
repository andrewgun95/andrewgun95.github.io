// STORY COMPONENTS

function selectStory(number, textNumber, roleNumber) {
  const storyElements = document.querySelectorAll('[id^="story"]');
  for (const storyElement of storyElements) {
    if (storyElement.id.includes(number)) {
      storyElement.classList.add("story__select");
      selectStyleById(
        storyElement,
        '[id^="story-text"]',
        textNumber,
        "story__select-text"
      );
    } else {
      storyElement.classList.remove("story__select");
    }
  }
}

function selectStyleById(targetElement, targetSelector, selectId, selectStyle) {
  targetElement.querySelectorAll(targetSelector).forEach((element) => {
    if (element.id.includes(selectId)) {
      element.classList.add(selectStyle);
    } else {
      element.classList.remove(selectStyle);
    }
  });
}
