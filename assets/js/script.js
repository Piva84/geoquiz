// Define questions array with questions, alternatives, and correct answers
const questions = [
  {
      question: "Which mountain range stretches across several countries in North Africa, including Morocco and Algeria?",
      alternatives: {
          a: "Kilimanjaro Range",
          b: "Drakensberg Mountains",
          c: "Atlas Mountains", // Correct answer
          d: "Rwenzori Mountains"
      },
      correctAlternative: "c"
  },
  {
      question: "What is the longest river in Asia, known as the 'Father of Rivers'?",
      alternatives: {
          a: "Yangtze River",
          b: "Mekong River",
          c: "Ganges River", // Correct answer
          d: "Yellow River"
      },
      correctAlternative: "c"
  },
  {
      question: "Which U.S. state is often referred to as the 'Lone Star State'?",
      alternatives: {
          a: "California",
          b: "Texas", // Correct answer
          c: "Florida",
          d: "New York"
      },
      correctAlternative: "b"
  },
  {
      question: "What is the capital city of New Zealand?",
      alternatives: {
          a: "Sydney",
          b: "Auckland",
          c: "Wellington", // Correct answer
          d: "Melbourne"
      },
      correctAlternative: "c"
  },
  {
      question: "Mount Kilimanjaro, Africa's highest peak, is located in which country?",
      alternatives: {
          a: "Kenya",
          b: "Tanzania", // Correct answer
          c: "Uganda",
          d: "Ethiopia"
      },
      correctAlternative: "b"
  },
  {
      question: "The Yangtze River is the longest river in Asia and the third-longest in the world. It flows through which country?",
      alternatives: {
          a: "India",
          b: "China", // Correct answer
          c: "Vietnam",
          d: "Thailand"
      },
      correctAlternative: "b"
  },
  {
      question: "Which U.S. state is known as the 'Empire State'?",
      alternatives: {
          a: "California",
          b: "Texas",
          c: "Florida",
          d: "New York" // Correct answer
      },
      correctAlternative: "d"
  },
  {
      question: "What is the capital city of Fiji?",
      alternatives: {
          a: "Suva", // Correct answer
          b: "Apia",
          c: "Port Moresby",
          d: "Nuku'alofa"
      },
      correctAlternative: "a"
  },
  {
      question: "The Rwenzori Mountains, also known as the 'Mountains of the Moon,' are located on the border of Uganda and which other country?",
      alternatives: {
          a: "Kenya",
          b: "Tanzania",
          c: "Democratic Republic of the Congo", // Correct answer
          d: "Rwanda"
      },
      correctAlternative: "c"
  },
  {
      question: "Which river, known as the Brahmaputra in India, flows through Tibet, India, and Bangladesh before emptying into the Bay of Bengal?",
      alternatives: {
          a: "Indus River",
          b: "Irrawaddy River",
          c: "Brahmaputra River", // Correct answer
          d: "Salween River"
      },
      correctAlternative: "c"
  },
  {
      question: "Which U.S. state is often referred to as the 'Granite State'?",
      alternatives: {
          a: "Vermont",
          b: "New Hampshire", // Correct answer
          c: "Maine",
          d: "Rhode Island"
      },
      correctAlternative: "b"
  },
  {
      question: "What is the capital city of Papua New Guinea?",
      alternatives: {
          a: "Port Moresby", // Correct answer
          b: "Honiara",
          c: "Suva",
          d: "Nuku'alofa"
      },
      correctAlternative: "a"
  },
  {
      question: "The Nile River, the longest river in the world, flows through which continent?",
      alternatives: {
          a: "South America",
          b: "Africa", // Correct answer
          c: "Europe",
          d: "Asia"
      },
      correctAlternative: "b"
  },
  {
      question: "Which Asian country is known as the 'Land of the Rising Sun'?",
      alternatives: {
          a: "China",
          b: "Japan", // Correct answer
          c: "India",
          d: "South Korea"
      },
      correctAlternative: "b"
  },
  {
      question: "Which U.S. state is often called the 'Golden State'?",
      alternatives: {
          a: "California", // Correct answer
          b: "Texas",
          c: "Florida",
          d: "New York"
      },
      correctAlternative: "a"
  },
  {
      question: "What is the capital city of Australia?",
      alternatives: {
          a: "Sydney",
          b: "Melbourne",
          c: "Canberra", // Correct answer
          d: "Brisbane"
      },
      correctAlternative: "c"
  },
  {
      question: "Victoria Falls, one of the largest waterfalls in the world, is located on the border of Zambia and which other country?",
      alternatives: {
          a: "Zimbabwe", // Correct answer
          b: "Tanzania",
          c: "Angola",
          d: "Mozambique"
      },
      correctAlternative: "a"
  },
  {
      question: "Mount Everest, the highest peak in the world, is located in which mountain range?",
      alternatives: {
          a: "Himalayas", // Correct answer
          b: "Andes",
          c: "Rockies",
          d: "Alps"
      },
      correctAlternative: "a"
  },
  {
      question: "Which U.S. state is known as the 'Sunshine State'?",
      alternatives: {
          a: "California",
          b: "Florida", // Correct answer
          c: "Texas",
          d: "Hawaii"
      },
      correctAlternative: "b"
  },
  {
      question: "What is the capital city of New Caledonia?",
      alternatives: {
          a: "Nouméa", // Correct answer
          b: "Papeete",
          c: "Port Vila",
          d: "Majuro"
      },
      correctAlternative: "a"
  },
  {
      question: "Lake Victoria, the largest lake in Africa, is bordered by which three countries?",
      alternatives: {
          a: "Uganda, Tanzania, and Kenya", // Correct answer
          b: "Kenya, Ethiopia, and Somalia",
          c: "Tanzania, Rwanda, and Burundi",
          d: "Uganda, Sudan, and South Sudan"
      },
      correctAlternative: "a"
  },
  {
      question: "Which river, known as the 'Yellow River,' is often referred to as the cradle of Chinese civilization?",
      alternatives: {
          a: "Yangtze River",
          b: "Mekong River",
          c: "Yellow River", // Correct answer
          d: "Pearl River"
      },
      correctAlternative: "c"
  },
  {
      question: "Which U.S. state is known as the 'Land of Enchantment'?",
      alternatives: {
          a: "Arizona",
          b: "New Mexico", // Correct answer
          c: "Colorado",
          d: "Utah"
      },
      correctAlternative: "b"
  },
  {
      question: "What is the capital city of Vanuatu?",
      alternatives: {
          a: "Honiara",
          b: "Port Moresby",
          c: "Suva",
          d: "Port Vila" // Correct answer
      },
      correctAlternative: "d"
  },
  {
      question: "The Sahara Desert, the largest hot desert in the world, is located on which continent?",
      alternatives: {
          a: "Asia",
          b: "Africa", // Correct answer
          c: "South America",
          d: "Australia"
      },
      correctAlternative: "b"
  },
  {
      question: "Which country is located at the crossroads of Europe and Asia?",
      alternatives: {
          a: "China",
          b: "India",
          c: "Russia", // Correct answer
          d: "Turkey"
      },
      correctAlternative: "d"
  },
  {
      question: "Which U.S. state is known as the 'Peach State'?",
      alternatives: {
          a: "Georgia", // Correct answer
          b: "Florida",
          c: "Louisiana",
          d: "Alabama"
      },
      correctAlternative: "a"
  },
  {
      question: "What is the capital city of Fiji?",
      alternatives: {
          a: "Suva", // Correct answer
          b: "Apia",
          c: "Port Moresby",
          d: "Nuku'alofa"
      },
      correctAlternative: "a"
  },
  {
      question: "What is the highest mountain in Africa?",
      alternatives: {
          a: "Mount Kenya",
          b: "Mount Kilimanjaro", // Correct answer
          c: "Mount Elgon",
          d: "Mount Meru"
      },
      correctAlternative: "b"
  },
  {
      question: "Which river is the longest river entirely within Russia?",
      alternatives: {
          a: "Amur River",
          b: "Ob River",
          c: "Lena River", // Correct answer
          d: "Yenisei River"
      },
      correctAlternative: "c"
  },
  {
      question: "What is the capital city of France?",
      alternatives: {
          a: "Madrid",
          b: "Rome",
          c: "Paris", // Correct answer
          d: "Berlin"
      },
      correctAlternative: "c"
  },
  {
      question: "Which European country is known for its fjords, stunning landscapes, and midnight sun during summer?",
      alternatives: {
          a: "Norway", // Correct answer
          b: "Sweden",
          c: "Iceland",
          d: "Finland"
      },
      correctAlternative: "a"
  },
  {
      question: "The Danube River, the second-longest river in Europe, flows through which capital city?",
      alternatives: {
          a: "Budapest",
          b: "Vienna", // Correct answer
          c: "Prague",
          d: "Warsaw"
      },
      correctAlternative: "b"
  },
  {
      question: "Which South American country is home to the world's largest rainforest, the Amazon Rainforest?",
      alternatives: {
          a: "Brazil", // Correct answer
          b: "Argentina",
          c: "Colombia",
          d: "Peru"
      },
      correctAlternative: "a"
  },
  {
      question: "What is the highest waterfall in the world, located in Venezuela?",
      alternatives: {
          a: "Iguazu Falls",
          b: "Angel Falls", // Correct answer
          c: "Victoria Falls",
          d: "Niagara Falls"
      },
      correctAlternative: "b"
  },
  {
      question: "The Andes, the longest continental mountain range in the world, run through several South American countries. Which of these countries does not have the Andes within its borders?",
      alternatives: {
          a: "Argentina",
          b: "Colombia",
          c: "Brazil", // Correct answer
          d: "Chile"
      },
      correctAlternative: "c"
  },
  {
      question: "What is the capital city of Italy?",
      alternatives: {
          a: "Paris",
          b: "Rome", // Correct answer
          c: "Madrid",
          d: "Athens"
      },
      correctAlternative: "b"
  },
  {
      question: "The Black Forest, known for its dense, dark woods, is located in which European country?",
      alternatives: {
          a: "Switzerland",
          b: "Germany", // Correct answer
          c: "Austria",
          d: "France"
      },
      correctAlternative: "b"
  },
  {
      question: "Which South American country is known for the iconic Machu Picchu ruins?",
      alternatives: {
          a: "Peru", // Correct answer
          b: "Chile",
          c: "Ecuador",
          d: "Bolivia"
      },
      correctAlternative: "a"
  },
  {
      question: "What is the capital city of Argentina?",
      alternatives: {
          a: "Santiago",
          b: "Rio de Janeiro",
          c: "Buenos Aires", // Correct answer
          d: "Lima"
      },
      correctAlternative: "c"
  },
  {
      question: "The Matterhorn, one of the highest peaks in the Alps, straddles the border between Switzerland and which other country?",
      alternatives: {
          a: "Italy", // Correct answer
          b: "Austria",
          c: "France",
          d: "Germany"
      },
      correctAlternative: "a"
  },
  {
      question: "Which South American country is home to the largest salt flat in the world, the Salar de Uyuni?",
      alternatives: {
          a: "Bolivia", // Correct answer
          b: "Venezuela",
          c: "Paraguay",
          d: "Chile"
      },
      correctAlternative: "a"
  }
];


// Initialize question index and counters
let questionIndex = 0;
let correctAnswers = 0;
let questionsLeft = questions.length;

// Function to display next question
function nextQuestion() {
  if (questionIndex < questions.length) {
    const currentQuestion = questions[questionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    document.getElementById('alternative-a').textContent = currentQuestion.alternatives.a;
    document.getElementById('alternative-b').textContent = currentQuestion.alternatives.b;
    document.getElementById('alternative-c').textContent = currentQuestion.alternatives.c;
    document.getElementById('alternative-d').textContent = currentQuestion.alternatives.d;
    questionIndex++;
    updateCounters();
  } else {
    // Handle end of questions
    alert("End of questions!");
  }
}

// Function to check answer
function checkAnswer(selectedAlternative) {
  const currentQuestion = questions[questionIndex - 1];
  if (selectedAlternative === currentQuestion.correctAlternative) {
    correctAnswers++;
  }
  // Move to the next question
  nextQuestion();
}

// Function to update counters
function updateCounters() {
  questionsLeft = questions.length - questionIndex;
  document.getElementById('correct-count').textContent = correctAnswers;
  document.getElementById('questions-count').textContent = questionsLeft;
}

// Function to quit and display a popup window
function quit() {
  // Display a popup window with the message
  alert("Thank you for participating!");
}

// Attach event listeners to alternatives
document.getElementById('alternative-a').addEventListener('click', function() {
  checkAnswer('a');
});

document.getElementById('alternative-b').addEventListener('click', function() {
  checkAnswer('b');
});

document.getElementById('alternative-c').addEventListener('click', function() {
  checkAnswer('c');
});

document.getElementById('alternative-d').addEventListener('click', function() {
  checkAnswer('d');
});

// Call nextQuestion when the page loads
nextQuestion();