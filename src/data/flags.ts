import { Question, Test } from "./types";

export const FlagTest: Test = {
  id: "id:test/flag",
  title: "Bayroq",
  testName: "bayroq",
  numOfQuestions: 10,
  duration: 10,
  image: {
    uri: "https://assets.weforum.org/article/image/large_BG0pfzM90_bsl3pWCLD2ZvvspIYSUwrhYlc5QyRO96E.jpg",
    alt: "Bayroq",
  },
};

export const flagQuestions: Question[] = [
  {
    id: "id:question/0",
    question: "Qizil chinor bargi tasvirlangan bayroq qaysi davlatga tegishli?",
    image: {
      uri: "https://www.countryflags.com/wp-con?tent/uploads/canada-flag-png-large.png",
      alt: "Canada",
    },
    options: [
      { id: "id:option/0", text: "France", isCorrect: false },
      { id: "id:option/1", text: "United Kingdom", isCorrect: false },
      { id: "id:option/2", text: "Canada", isCorrect: true },
      { id: "id:option/3", text: "Japan", isCorrect: false },
    ],
    answerDescription:
      "To'g'ri! Qizil chinor barglari tushirilgan bayroq Kanadaga tegishli.",
    hint: "Bu mamlakat o'zining ulkan tabiiy go'zalligi bilan mashhur va Shimoliy Amerikada joylashgan.",
  },
  
  {
    id: "id:question/1",
    question:
      "Sariq yulduzli va qizil fonli bayroq qaysi davlatga tegishli?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png",
      alt: "Vietnam",
    },
    options: [
      { id: "id:option/4", text: "South Korea", isCorrect: false },
      { id: "id:option/5", text: "China", isCorrect: false },
      { id: "id:option/6", text: "Vietnam", isCorrect: true },
      { id: "id:option/7", text: "Thailand", isCorrect: false },
    ],
    answerDescription:
      "To'g'ri! Sariq yulduzli va qizil fonli bayroq Vetnam bayrog'idir.",
    hint: "Bu mamlakat Janubi-Sharqiy Osiyoda joylashgan va o'zining boy tarixi bilan mashhur.",
  },
  {
    id: "id:question/2",
    question:
      "Mamlakatni ko'k fonda oq xoch bilan bayrog'i bilan aniqlang.?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png",
      alt: "Greece",
    },
    options: [
      { id: "id:option/8", text: "Italy", isCorrect: false },
      { id: "id:option/9", text: "Greece", isCorrect: true },
      { id: "id:option/10", text: "Switzerland", isCorrect: false },
      { id: "id:option/11", text: "Norway", isCorrect: false },
    ],
    answerDescription:
      "To'g'ri! Moviy fonda oq xoch tasvirlangan bayroq Gretsiya bayrog'i hisoblanadi.",
    hint: "Bu O'rta er dengizi mamlakati o'zining qadimiy tarixi va madaniy hissasi bilan mashhur.",
  },

  {
    id: "id:question/3",
    question:
      "Oq fonda qizil doira tasvirlangan bayroq qaysi davlatga tegishli?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png",
      alt: "Japan",
    },
    options: [
      { id: "id:option/12", text: "China", isCorrect: false },
      { id: "id:option/13", text: "Japan", isCorrect: true },
      { id: "id:option/14", text: "South Korea", isCorrect: false },
      { id: "id:option/15", text: "Indonesia", isCorrect: false },
    ],
    answerDescription:
      "To'g'ri! Oq fonda qizil doira bo'lgan bayroq Yaponiya bayrog'i hisoblanadi.",
    hint: "Ushbu Sharqiy Osiyo mamlakati an'ana va zamonaviylikning o'ziga xos uyg'unligi bilan mashhur.",
  },

  {
    id: "id:question/4",
    question:
      "Qaysi davlat bayrog'ida oq yarim oy va yulduzli yashil maydon tasvirlangan?",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-large.png",
      alt: "Pakistan",
    },
    options: [
      { id: "id:option/16", text: "Saudi Arabia", isCorrect: false },
      { id: "id:option/17", text: "Turkey", isCorrect: false },
      { id: "id:option/18", text: "Pakistan", isCorrect: true },
      { id: "id:option/19", text: "Malaysia", isCorrect: false },
    ],
    answerDescription:
      "To'g'ri! Yashil maydon, oq yarim oy va yulduzli bayroq Pokiston bayrog'idir.",
    hint: "Ushbu Janubiy Osiyo mamlakati o'zining rang-barang landshaftlari va boy madaniy merosi bilan mashhur.",
  },
  // 5
  {
    id: "id:question/5",
    question:
      "Sariq, ko'k va qizil gorizontal chiziqlar bilan bayrog'i bilan mamlakatni aniqlang.",
    image: {
      uri: "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",
      alt: "Colombia",
    },
    options: [
      { id: "id:option/20", text: "Ecuador", isCorrect: false },
      { id: "id:option/21", text: "Colombia", isCorrect: true },
      { id: "id:option/22", text: "Venezuela", isCorrect: false },
      { id: "id:option/23", text: "Peru", isCorrect: false },
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
      { id: "id:option/24", text: "Austria", isCorrect: false },
      { id: "id:option/25", text: "Denmark", isCorrect: false },
      { id: "id:option/26", text: "Norway", isCorrect: false },
      { id: "id:option/27", text: "Switzerland", isCorrect: true },
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
      { id: "id:option/28", text: "Algeria", isCorrect: false },
      { id: "id:option/29", text: "Morocco", isCorrect: false },
      { id: "id:option/30", text: "Turkey", isCorrect: true },
      { id: "id:option/31", text: "Tunisia", isCorrect: false },
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
      { id: "id:option/32", text: "Denmark", isCorrect: false },
      { id: "id:option/33", text: "Norway", isCorrect: false },
      { id: "id:option/34", text: "Finland", isCorrect: false },
      { id: "id:option/35", text: "Sweden", isCorrect: true },
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
      { id: "id:option/36", text: "Italy", isCorrect: false },
      { id: "id:option/37", text: "Belgium", isCorrect: false },
      { id: "id:option/38", text: "Germany", isCorrect: true },
      { id: "id:option/39", text: "Netherlands", isCorrect: false },
    ],
    answerDescription:
      "Correct! The flag with horizontal stripes of black, red, and gold belongs to Germany.",
    hint: "This European country is known for its rich cultural history and economic strength.",
  },
];
