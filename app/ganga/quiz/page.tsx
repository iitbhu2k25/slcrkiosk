'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Clock, PlayCircle } from 'lucide-react';

// MCQ questions from the actual quiz
const mcqQuestions = [
    {
        question: "Where does the River Ganga originate?",
        options: ["Siachen Glacier", "Gangotri Glacier", "Yamunotri Glacier", "Mansarovar Lake"],
        correctAnswer: 1
    },
    {
        question: "What is the approximate length of the Ganga River?",
        options: ["1,000 km", "2,525 km", "5,000 km", "3,200 km"],
        correctAnswer: 1
    },
    {
        question: "What is the largest contributor to Ganga pollution?",
        options: ["Rainwater", "Mountain soil", "Municipal sewage", "Snowmelt"],
        correctAnswer: 2
    },
    {
        question: "Which programme focuses on rejuvenation of Ganga?",
        options: ["Jal Jeevan Mission", "Swachh Ganga Abhiyan", "Namami Gange Programme", "Clean Basin Mission"],
        correctAnswer: 2
    },
    {
        question: "Which year marked the start of major sewage-treatment infrastructure expansion under NMCG?",
        options: ["2011", "2014", "2017", "2020"],
        correctAnswer: 2
    },
    {
        question: "According to the infographic, pH levels now meet which criterion at all locations?",
        options: ["Drinking-water standard", "Industrial standard", "Bathing-water standard", "Irrigation-water standard"],
        correctAnswer: 2
    },
    {
        question: "What has mainly improved due to NMCG efforts?",
        options: ["River bank cleanliness", "Water quality parameters", "Glacier melting rate", "Rainfall patterns"],
        correctAnswer: 1
    },
    {
        question: "What does Nirmal Ganga focus on?",
        options: ["Biodiversity", "Pollution abatement", "Flood management", "Tourism"],
        correctAnswer: 1
    },
    {
        question: "Which new high-tech facility was launched in 2024 for river monitoring?",
        options: ["National Water Lab", "Nature Lab", "Smart Laboratory on Clean Rivers", "Basin Innovation Hub"],
        correctAnswer: 2
    },
    {
        question: "According to the presentation, where does most contamination actually come from?",
        options: ["Mid-stream river water", "Snow melt", "Deep groundwater", "Activities on the river banks"],
        correctAnswer: 3
    }
];

// One-word answer questions
const oneWordQuestions = [
    {
        question: "Where does Ganga originate?",
        correctAnswer: "Gangotri",
        acceptedAnswers: ["gangotri", "Gangotri", "gangotri glacier", "Gangotri Glacier"]
    },
    {
        question: "What is the length of the Ganga (in km)?",
        correctAnswer: "2525",
        acceptedAnswers: ["2525", "2,525"]
    },
    {
        question: "Name the flagship programme for rejuvenation of Ganga.",
        correctAnswer: "Namami Gange",
        acceptedAnswers: ["namami gange", "Namami Gange", "namami ganga", "Namami Ganga"]
    },
    {
        question: "Which waste contributes the most to Ganga pollution?",
        correctAnswer: "Sewage",
        acceptedAnswers: ["sewage", "Sewage", "municipal sewage", "Municipal Sewage"]
    },
    {
        question: "In which year was Namami Gange launched?",
        correctAnswer: "2014",
        acceptedAnswers: ["2014"]
    },
    {
        question: '"Aviral Ganga" focuses on uninterrupted _______.',
        correctAnswer: "Flow",
        acceptedAnswers: ["flow", "Flow"]
    },
    {
        question: "What is the newly launched scientific lab for river rejuvenation called?",
        correctAnswer: "SLCR",
        acceptedAnswers: ["slcr", "SLCR", "Smart Laboratory on Clean Rivers"]
    },
    {
        question: "The Ganga basin covers how many Indian states?",
        correctAnswer: "11",
        acceptedAnswers: ["11", "eleven", "Eleven"]
    },
    {
        question: "Biological water quality in 2025 improved to which category?",
        correctAnswer: "Good",
        acceptedAnswers: ["good", "Good"]
    },
    {
        question: "The river water is improving, but what remains polluted?",
        correctAnswer: "Banks",
        acceptedAnswers: ["banks", "Banks", "river banks", "River Banks"]
    }
];

const QUIZ_TIME = 10 * 60; // 10 minutes in seconds

export default function QuizPage() {
    const [quizStarted, setQuizStarted] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(QUIZ_TIME);
    const [mcqAnswers, setMcqAnswers] = useState<{ [key: number]: number }>({});
    const [wordAnswers, setWordAnswers] = useState<{ [key: number]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Timer effect
    useEffect(() => {
        if (quizStarted && !isSubmitted && timeRemaining > 0) {
            timerRef.current = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1) {
                        handleTimeUp();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [quizStarted, isSubmitted, timeRemaining]);

    const handleStartQuiz = () => {
        setQuizStarted(true);
        setTimeRemaining(QUIZ_TIME);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTimeUp = () => {
        setIsSubmitted(true);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMcqSelect = (questionIndex: number, optionIndex: number) => {
        if (!isSubmitted) {
            setMcqAnswers({
                ...mcqAnswers,
                [questionIndex]: optionIndex
            });
        }
    };

    const handleWordAnswer = (questionIndex: number, answer: string) => {
        if (!isSubmitted) {
            setWordAnswers({
                ...wordAnswers,
                [questionIndex]: answer
            });
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setQuizStarted(false);
        setMcqAnswers({});
        setWordAnswers({});
        setIsSubmitted(false);
        setTimeRemaining(QUIZ_TIME);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const calculateMcqScore = () => {
        let correct = 0;
        mcqQuestions.forEach((q, index) => {
            if (mcqAnswers[index] === q.correctAnswer) {
                correct++;
            }
        });
        return correct;
    };

    const calculateWordScore = () => {
        let correct = 0;
        oneWordQuestions.forEach((q, index) => {
            const userAnswer = wordAnswers[index]?.trim() || '';
            if (q.acceptedAnswers.some(ans => ans.toLowerCase() === userAnswer.toLowerCase())) {
                correct++;
            }
        });
        return correct;
    };

    const isWordAnswerCorrect = (questionIndex: number) => {
        const userAnswer = wordAnswers[questionIndex]?.trim() || '';
        const question = oneWordQuestions[questionIndex];
        return question.acceptedAnswers.some(ans => ans.toLowerCase() === userAnswer.toLowerCase());
    };

    const allAnswered = () => {
        return Object.keys(mcqAnswers).length === mcqQuestions.length &&
            Object.keys(wordAnswers).length === oneWordQuestions.length &&
            Object.values(wordAnswers).every(ans => ans.trim() !== '');
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div
            className="min-h-screen relative"
            style={{
                backgroundImage: "url('/new/gangavns3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Page Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white text-center mb-4 drop-shadow-lg"
                    >
                        Ganga Quiz
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/90 text-center mb-2 drop-shadow-lg"
                    >
                        Test your knowledge about the Namami Gange Programme
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-md text-white/80 text-center mb-8 drop-shadow-lg"
                    >
                        Note: Answer all questions. Each question carries 1 mark. No negative marking.
                        <br />
                        <strong>Total: 20 Marks | Time: 10 Minutes</strong>
                    </motion.p>

                    {/* Start Quiz Screen */}
                    <AnimatePresence>
                        {!quizStarted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center justify-center min-h-[50vh]"
                            >
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 text-center max-w-md">
                                    <Clock className="w-24 h-24 text-primary mx-auto mb-6" />
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start?</h2>
                                    <p className="text-gray-600 mb-8">
                                        You will have <strong>10 minutes</strong> to complete 20 questions.
                                        <br />The quiz will auto-submit when time expires.
                                    </p>
                                    <button
                                        onClick={handleStartQuiz}
                                        className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 mx-auto"
                                    >
                                        <PlayCircle className="w-6 h-6" />
                                        Start Quiz
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Quiz Content */}
                    {quizStarted && (
                        <>
                            {/* Timer Display */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="sticky top-4 z-20 mb-8"
                            >
                                <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 flex items-center justify-center gap-3 border-4 ${timeRemaining < 60 ? 'border-red-500 animate-pulse' : 'border-primary'
                                    }`}>
                                    <Clock className={`w-6 h-6 ${timeRemaining < 60 ? 'text-red-600' : 'text-primary'}`} />
                                    <span className={`text-2xl font-bold ${timeRemaining < 60 ? 'text-red-600' : 'text-gray-800'}`}>
                                        Time Remaining: {formatTime(timeRemaining)}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Score Display (after submission) */}
                            {isSubmitted && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 mb-8 text-center border-4 border-green-500"
                                >
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                        {timeRemaining === 0 ? "Time's Up! Quiz Auto-Submitted" : "Quiz Completed!"}
                                    </h2>
                                    <div className="space-y-2">
                                        <p className="text-xl font-bold text-blue-600">
                                            MCQ Score: {calculateMcqScore()} / {mcqQuestions.length}
                                        </p>
                                        <p className="text-xl font-bold text-purple-600">
                                            One-Word Score: {calculateWordScore()} / {oneWordQuestions.length}
                                        </p>
                                        <p className="text-3xl font-bold text-green-600 mt-4">
                                            Total: {calculateMcqScore() + calculateWordScore()} / {mcqQuestions.length + oneWordQuestions.length}
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            {/* MCQ Section */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                                    Part A: Multiple Choice Questions (10 Questions)
                                </h2>

                                <div className="space-y-6">
                                    {mcqQuestions.map((q, qIndex) => (
                                        <motion.div
                                            key={qIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.05 * qIndex }}
                                            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20"
                                        >
                                            <h3 className="text-lg font-bold text-gray-800 mb-4">
                                                {qIndex + 1}. {q.question}
                                            </h3>

                                            <div className="space-y-3">
                                                {q.options.map((option, oIndex) => {
                                                    const isSelected = mcqAnswers[qIndex] === oIndex;
                                                    const isCorrect = oIndex === q.correctAnswer;
                                                    const showCorrect = isSubmitted && isCorrect;
                                                    const showWrong = isSubmitted && isSelected && !isCorrect;

                                                    return (
                                                        <button
                                                            key={oIndex}
                                                            onClick={() => handleMcqSelect(qIndex, oIndex)}
                                                            disabled={isSubmitted}
                                                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${isSubmitted
                                                                    ? showCorrect
                                                                        ? 'border-green-500 bg-green-50'
                                                                        : showWrong
                                                                            ? 'border-red-500 bg-red-50'
                                                                            : 'border-gray-200 bg-white'
                                                                    : isSelected
                                                                        ? 'border-primary bg-primary/10'
                                                                        : 'border-gray-200 bg-white hover:border-primary/50 hover:bg-gray-50'
                                                                } ${isSubmitted ? 'cursor-default' : 'cursor-pointer'}`}
                                                        >
                                                            <span className={`${showCorrect ? 'text-green-700 font-semibold' :
                                                                    showWrong ? 'text-red-700' :
                                                                        isSelected ? 'text-primary font-semibold' :
                                                                            'text-gray-700'
                                                                }`}>
                                                                {String.fromCharCode(65 + oIndex)}. {option}
                                                            </span>

                                                            {showCorrect && <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />}
                                                            {showWrong && <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* One-Word Answer Section */}
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
                                <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-lg">
                                    Part B: One-Word Answer Questions (10 Questions)
                                </h2>

                                <div className="space-y-6">
                                    {oneWordQuestions.map((q, qIndex) => {
                                        const userAnswer = wordAnswers[qIndex] || '';
                                        const isCorrect = isWordAnswerCorrect(qIndex);

                                        return (
                                            <motion.div
                                                key={qIndex}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.05 * qIndex }}
                                                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20"
                                            >
                                                <h3 className="text-lg font-bold text-gray-800 mb-4">
                                                    {qIndex + 11}. {q.question}
                                                </h3>

                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={userAnswer}
                                                        onChange={(e) => handleWordAnswer(qIndex, e.target.value)}
                                                        disabled={isSubmitted}
                                                        placeholder="Type your answer here..."
                                                        className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${isSubmitted
                                                                ? isCorrect
                                                                    ? 'border-green-500 bg-green-50'
                                                                    : 'border-red-500 bg-red-50'
                                                                : 'border-gray-300 focus:border-primary focus:outline-none'
                                                            } ${isSubmitted ? 'cursor-default' : ''}`}
                                                    />
                                                    {isSubmitted && (
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                                            {isCorrect ? (
                                                                <CheckCircle className="w-6 h-6 text-green-600" />
                                                            ) : (
                                                                <XCircle className="w-6 h-6 text-red-600" />
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                {isSubmitted && !isCorrect && (
                                                    <p className="mt-2 text-sm text-green-700">
                                                        Correct answer: <span className="font-semibold">{q.correctAnswer}</span>
                                                    </p>
                                                )}
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Submit/Reset Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 text-center pb-8"
                            >
                                {!isSubmitted ? (
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!allAnswered()}
                                        className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${allAnswered()
                                                ? 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Submit Quiz
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleReset}
                                        className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-200"
                                    >
                                        Try Again
                                    </button>
                                )}

                                {!isSubmitted && !allAnswered() && (
                                    <p className="text-white/80 mt-3 text-sm drop-shadow">
                                        Please answer all questions before submitting
                                    </p>
                                )}
                            </motion.div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
