/* VARIABLES */

const skillBar = {
  size: 160,
  barColor: "#B9B6B3",
  scaleLength: 0,
  lineWidth: 15,
  trackColor: "transparent",
  lineCap: "circle",
  animate: 5000,
};

/* NAVIGATION */

function selectNavigation(number) {
  document.querySelectorAll('[id^="navigation"]').forEach((element) => {
    if (element.id.includes(number)) {
      element.classList.toggle("navigation__select");

      /* SKILLS BAR */
      if (element.href != null && element.href.includes("section-services")) {
        $(".skill__chart").easyPieChart(skillBar);
      }
    }
  });
}

/* STORY */

function selectStory(number, textNumber) {
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

/* PROJECT MAIN */

function openProject(number) {
  const projectListElement = document.querySelector("[id=project-list");
  projectListElement.classList.add("project__list-exit");
  projectListElement.classList.remove("project__list-enter");

  selectStyleById(
    document,
    '[id^="project-main"]',
    number,
    "project__main-enter"
  );
}

function closeProject(number) {
  const projectListElement = document.querySelector("[id=project-list");
  projectListElement.classList.add("project__list-enter");
  projectListElement.classList.remove("project__list-exit");

  const projectMainElement = document.getElementById("project-main-" + number);
  projectMainElement.classList.remove("project__main-enter");
}

/* PROJECT PREVIEW */

function selectPreview(parent, number, scroll) {
  const parentElement = document.querySelector("[id=" + parent + "]");

  const previewElement = parentElement.querySelector(".project__preview");
  const previewScrollWidth = previewElement.scrollWidth;
  const previewScrollStart = previewElement.scrollLeft;

  previewElement.scrollTo(previewScrollStart + scroll * previewScrollWidth, 0);

  selectStyleById(
    parentElement,
    '[id^="project-preview"]',
    number,
    "project__preview-nav-button-select"
  );
}

/* PROJECT PAGE */

function nextPage(parent, from, to) {
  const parentElement = document.querySelector("[id=" + parent + "]");

  const fromElement = parentElement.querySelector("[id=" + from + "]");
  fromElement.classList.add("project__exit-page");
  fromElement.classList.remove("project__enter-page");

  const toElement = parentElement.querySelector("[id=" + to + "]");
  toElement.classList.add("project__enter-page");
  toElement.classList.remove("project__exit-page");
}
