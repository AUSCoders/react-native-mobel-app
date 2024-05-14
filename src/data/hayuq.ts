import { Question, Test } from "./types";

export const HayuqTest: Test = {
  id: "id:test/flag",
  title: "Ha-Yo'q",
  testName: "ha-yo'q",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://assets.weforum.org/article/image/large_BG0pfzM90_bsl3pWCLD2ZvvspIYSUwrhYlc5QyRO96E.jpg",
    alt: "Flags",
  },
};

export const HayuqQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Which country does the flag with a red maple leaf belong to?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",
      alt: "Canada",
    },
    options: [
      { id: "id:option/0", text: "Ha", isCorrect: true },
      { id: "id:option/1", text: "Yo'q", isCorrect: false },
    ],
    answerDescription:
      "Correct! The flag with a red maple leaf belongs to Canada.",
    hint: "This country is known for its vast natural beauty and is located in North America.",
  },
  {
    id: "id:question/1",
    question:
      "Which country does the flag with a yellow star and a red background belong to?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png",
      alt: "Vietnam",
    },
    options: [
      { id: "id:option/2", text: "Ha", isCorrect: true },
      { id: "id:option/3", text: "Yo'q", isCorrect: false },
    ],
    answerDescription:
      "Correct! The flag with a yellow star and red background is the flag of Vietnam.",
    hint: "This country is located in Southeast Asia and is known for its rich history.",
  },
  {
    id: "id:question/2",
    question:
      "Identify the country by its flag with a white cross on a blue background.",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png",
      alt: "Greece",
    },
    options: [
      { id: "id:option/4", text: "Yo'q", isCorrect: false },
      { id: "id:option/5", text: "Ha", isCorrect: true },
    ],
    answerDescription:
      "Correct! The flag with a white cross on a blue background is the flag of Greece.",
    hint: "This Mediterranean country is known for its ancient history and cultural contributions.",
  },
  {
    id: "id:question/3",
    question:
      "To which country does the flag with a red circle on a white background belong?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
      alt: "Japan",
    },
    options: [
      { id: "id:option/6", text: "Yo'q", isCorrect: false },
      { id: "id:option/7", text: "Ha", isCorrect: true },
    ],
    answerDescription:
      "Correct! The flag with a red circle on a white background is the flag of Japan.",
    hint: "This East Asian country is known for its unique blend of tradition and modernity.",
  },
  {
    id: "id:question/4",
    question:
      "Which country's flag features a green field with a white crescent and star?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-large.png",
      alt: "Pakistan",
    },
    options: [
      { id: "id:option/8", text: "Yo'q", isCorrect: false },
      { id: "id:option/9", text: "Ha", isCorrect: true },
    ],
    answerDescription:
      "Correct! The flag with a green field, white crescent, and star is the flag of Pakistan.",
    hint: "This South Asian country is known for its diverse landscapes and rich cultural heritage.",
  },
  {
    id: "id:question/5",
    question:
      "Identify the country by its flag with horizontal stripes of yellow, blue, and red.",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",
      alt: "Colombia",
    },
    options: [
      { id: "id:option/10", text: "Yo'q", isCorrect: false },
      { id: "id:option/11", text: "Ha", isCorrect: true },
    ],
    answerDescription:
      "Correct! The flag with horizontal stripes of yellow, blue, and red belongs to Colombia.",
    hint: "This South American country is known for its diverse culture and landscapes.",
  },
  {
    id: "id:question/6",
    question:
      "To which country does the flag with a white cross on a red background belong?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png",
      alt: "Switzerland",
    },
    options: [
      { id: "id:option/12", text: "Yo'q", isCorrect: false },
      { id: "id:option/13", text: "Ha", isCorrect: true },
    ],
    answerDescription:
      "Correct! The flag with a white cross on a red background is the flag of Switzerland.",
    hint: "This European country is known for its neutrality and picturesque landscapes.",
  },
  {
    id: "id:question/7",
    question:
      "Which country's flag features a white star and crescent on a red background?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-large.png",
      alt: "Turkey",
    },
    options: [
      { id: "id:option/14", text: "Ha", isCorrect: true },
      { id: "id:option/15", text: "Yo'q", isCorrect: false },
    ],
    answerDescription:
      "Correct! The flag with a white star and crescent on a red background is the flag of Turkey.",
    hint: "This transcontinental country is known for its unique blend of Eastern and Western influences.",
  },
  {
    id: "id:question/8",
    question:
      "Identify the country by its flag with a yellow cross on a blue background.",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/sweden-flag-png-large.png",
      alt: "Sweden",
    },
    options: [
      { id: "id:option/16", text: "Yo'q", isCorrect: false },
      { id: "id:option/17", text: "Ha", isCorrect: true },
    ],
    answerDescription:
      "Correct! The flag with a yellow cross on a blue background belongs to Sweden.",
    hint: "This Scandinavian country is known for its modern design and innovation.",
  },
  {
    id: "id:question/9",
    question:
      "Which country does the flag with horizontal stripes of black, red, and gold belong to?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png",
      alt: "Germany",
    },
    options: [
      { id: "id:option/18", text: "Ha", isCorrect: true },
      { id: "id:option/19", text: "Yo'q", isCorrect: false },
    ],
    answerDescription:
      "Correct! The flag with horizontal stripes of black, red, and gold belongs to Germany.",
    hint: "This European country is known for its rich cultural history and economic strength.",
  },
];
