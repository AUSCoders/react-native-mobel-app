// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import { Link } from 'expo-router';
// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-3xl">Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <Link href="/profile" className=' text-rose-950'>go Profile</Link>
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const questions = [
    {keys:1, questionText: 'What is the capital of France?', answerOptions: ['Paris', 'Berlin', 'London', 'Rome'], correctAnswer: 'Paris' },
    {keys:2, questionText: 'Who wrote "To Kill a Mockingbird"?', answerOptions: ['George Orwell', 'J.K. Rowling', 'Harper Lee', 'Stephen King'], correctAnswer: 'Harper Lee' },
    // Add more questions as needed!
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (answer) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`Quiz finished! You scored ${score} out of ${questions.length}`);
    }
  };

  return (
    <View >
      <Text>{questions[currentQuestion].questionText}</Text>
      {questions[currentQuestion].answerOptions.map((answerOption) => (
        <Button key={keys} title={answerOption} onPress={() => handleAnswerOptionClick(answerOption)} />
      ))}
    </View>
  );
};

export default App;