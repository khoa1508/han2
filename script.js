const state = {
    currentView: 'view-home',
    currentLessonId: null,
    currentGrammarId: null,
    currentExerciseType: null,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    isDarkMode: false,
    showPinyin: true
};

// DOM Elements
const views = {
    home: document.getElementById('view-home'),
    lesson: document.getElementById('view-lesson'),
    'exercise-type': document.getElementById('view-exercise-type'),
    exercise: document.getElementById('view-exercise'),
    result: document.getElementById('view-result')
};

const elements = {
    btnBack: document.getElementById('btn-back'),
    btnTheme: document.getElementById('btn-theme'),
    btnPinyin: document.getElementById('btn-pinyin'),
    lessonList: document.getElementById('lesson-list'),
    grammarPointsList: document.getElementById('grammar-points-list'),
    lessonTitle: document.getElementById('lesson-title'),
    lessonDesc: document.getElementById('lesson-desc'),
    grammarPointTitle: document.getElementById('grammar-point-title'),
    exTypeCards: document.querySelectorAll('.ex-type-card'),
    exerciseContent: document.getElementById('exercise-content'),
    questionCounter: document.getElementById('question-counter'),
    scoreCounter: document.getElementById('score-counter'),
    progressBar: document.getElementById('progress-bar'),
    feedbackPanel: document.getElementById('feedback-panel'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackDesc: document.getElementById('feedback-desc'),
    btnNextQuestion: document.getElementById('btn-next-question'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    btnRetry: document.getElementById('btn-retry'),
    btnBackHome: document.getElementById('btn-back-home')
};

// Initialize App
function init() {
    // Check local storage for theme
    const savedTheme = localStorage.getItem('hsk2-theme');
    if (savedTheme === 'dark') {
        toggleTheme();
    }

    const savedPinyin = localStorage.getItem('hsk2-pinyin');
    if (savedPinyin === 'false') {
        state.showPinyin = false;
        elements.btnPinyin.style.opacity = '0.5';
    }

    renderHome();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    elements.btnBack.addEventListener('click', handleBack);
    elements.btnTheme.addEventListener('click', toggleTheme);
    elements.btnPinyin.addEventListener('click', togglePinyin);

    elements.exTypeCards.forEach(card => {
        card.addEventListener('click', () => {
            const type = card.dataset.type;
            startExercise(type);
        });
    });

    elements.btnNextQuestion.addEventListener('click', handleNextQuestion);
    elements.btnRetry.addEventListener('click', () => {
        elements.feedbackPanel.classList.add('hidden');
        startExercise(state.currentExerciseType);
    });
    elements.btnBackHome.addEventListener('click', () => navigateTo('view-home'));
}

// Navigation
function navigateTo(viewId) {
    // Hide all views
    Object.values(views).forEach(v => v.classList.add('hidden'));

    // Show target view
    views[viewId.replace('view-', '')].classList.remove('hidden');
    views[viewId.replace('view-', '')].classList.add('active');

    state.currentView = viewId;

    // Handle back button visibility
    if (viewId === 'view-home' || viewId === 'view-result') {
        elements.btnBack.classList.add('hidden');
    } else {
        elements.btnBack.classList.remove('hidden');
    }
}

function handleBack() {
    if (state.currentView === 'view-lesson') navigateTo('view-home');
    else if (state.currentView === 'view-exercise-type') navigateTo('view-lesson');
    else if (state.currentView === 'view-exercise') navigateTo('view-exercise-type');
}

function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    if (state.isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        elements.btnTheme.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('hsk2-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
        elements.btnTheme.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('hsk2-theme', 'light');
    }
}

function togglePinyin() {
    state.showPinyin = !state.showPinyin;
    localStorage.setItem('hsk2-pinyin', state.showPinyin);
    if (state.showPinyin) {
        elements.btnPinyin.style.opacity = '1';
    } else {
        elements.btnPinyin.style.opacity = '0.5';
    }

    // Re-render currently active exercise
    if (state.currentView === 'view-exercise' && state.questions.length > 0) {
        renderQuestion();
    }
}

function withPinyin(text) {
    if (!state.showPinyin || typeof pinyinPro === 'undefined') return text;
    let result = '';
    for (const char of text) {
        if (/[\u4e00-\u9fa5]/.test(char)) {
            const pySymbol = pinyinPro.pinyin(char);
            result += `<ruby>${char}<rt>${pySymbol}</rt></ruby>`;
        } else {
            result += char;
        }
    }
    return result;
}

// View Rendering
function renderHome() {
    elements.lessonList.innerHTML = '';
    hskData.forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'interactive-card';
        card.innerHTML = `
            <div class="card-icon"><i class="fas fa-book-open"></i></div>
            <h3>${lesson.title}</h3>
            <p>${lesson.desc}</p>
        `;
        card.addEventListener('click', () => {
            state.currentLessonId = lesson.id;
            renderLesson(lesson);
            navigateTo('view-lesson');
        });
        elements.lessonList.appendChild(card);
    });
}

function renderLesson(lesson) {
    elements.lessonTitle.textContent = lesson.title;
    elements.lessonDesc.textContent = lesson.desc;
    elements.grammarPointsList.innerHTML = '';

    lesson.grammarPoints.forEach((gp, index) => {
        const card = document.createElement('div');
        card.className = 'interactive-card list-card';
        card.innerHTML = `
            <div class="list-icon">${index + 1}</div>
            <div class="list-content">
                <h3>${gp.title}</h3>
                <p>20 câu bài tập (Trắc nghiệm & Sắp xếp từ)</p>
            </div>
            <i class="fas fa-chevron-right list-arrow"></i>
        `;
        card.addEventListener('click', () => {
            state.currentGrammarId = gp.id;
            elements.grammarPointTitle.textContent = gp.title;
            navigateTo('view-exercise-type');
        });
        elements.grammarPointsList.appendChild(card);
    });
}

// Exercise Logic
function startExercise(type) {
    state.currentExerciseType = type;
    const lesson = hskData.find(l => l.id === state.currentLessonId);
    const grammarPoint = lesson.grammarPoints.find(g => g.id === state.currentGrammarId);

    state.questions = grammarPoint.exercises[type] || [];
    // Shuffle questions slightly for variety, but keep to 10 max
    state.questions = state.questions.sort(() => 0.5 - Math.random()).slice(0, 10);

    state.currentQuestionIndex = 0;
    state.score = 0;

    if (state.questions.length === 0) {
        alert("Dữ liệu bài tập đang được cập nhật!");
        return;
    }

    elements.feedbackPanel.classList.add('hidden');
    renderQuestion();
    navigateTo('view-exercise');
}

function renderQuestion() {
    const q = state.questions[state.currentQuestionIndex];
    elements.exerciseContent.innerHTML = '';

    // Update Progress
    elements.questionCounter.textContent = `Câu ${state.currentQuestionIndex + 1}/${state.questions.length}`;
    elements.scoreCounter.textContent = `Điểm: ${state.score}`;
    elements.progressBar.style.width = `${((state.currentQuestionIndex) / state.questions.length) * 100}%`;

    // Render Question Text
    const qText = document.createElement('div');
    qText.className = 'question-text';
    qText.innerHTML = withPinyin(q.question);
    elements.exerciseContent.appendChild(qText);

    if (q.vietnamese) {
        const viText = document.createElement('p');
        viText.className = 'text-center text-muted mb-4';
        viText.style.marginBottom = '24px';
        viText.textContent = q.vietnamese;
        elements.exerciseContent.appendChild(viText);
    }

    if (state.currentExerciseType === 'multiple-choice') {
        renderMultipleChoice(q);
    } else {
        renderWordOrdering(q);
    }
}

function renderMultipleChoice(q) {
    const grid = document.createElement('div');
    grid.className = 'options-grid';

    // Shuffle options while tracking the original index
    let optionsWithIndices = q.options.map((opt, index) => ({
        text: opt,
        originalIndex: index
    }));

    // Randomize array
    optionsWithIndices = optionsWithIndices.sort(() => 0.5 - Math.random());

    // Find where the correct answer ended up
    const newCorrectIndex = optionsWithIndices.findIndex(o => o.originalIndex === q.correctIndex);

    optionsWithIndices.forEach((optData, newIndex) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${String.fromCharCode(65 + newIndex)}. ${withPinyin(optData.text)}</span>`;

        btn.addEventListener('click', () => handleMCQAnswer(btn, newIndex, newCorrectIndex, q.explanation));
        grid.appendChild(btn);
    });

    elements.exerciseContent.appendChild(grid);
}

function handleMCQAnswer(btn, selectedIndex, correctIndex, explanation) {
    // Disable all options
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.style.pointerEvents = 'none');

    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
        btn.classList.add('correct');
        btn.innerHTML += ' <i class="fas fa-check-circle"></i>';
        state.score++;
        showFeedback(true, explanation);
    } else {
        btn.classList.add('wrong');
        btn.innerHTML += ' <i class="fas fa-times-circle"></i>';
        // highlight correct one
        btns[correctIndex].classList.add('correct');
        showFeedback(false, explanation);
    }
}

function renderWordOrdering(q) {
    // q.words contains the word array
    // q.correctAnswer contains the correct string

    // Shuffle words using Fisher-Yates algorithm
    const shuffledWords = [...q.words];
    for (let i = shuffledWords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledWords[i], shuffledWords[j]] = [shuffledWords[j], shuffledWords[i]];
    }

    const dropZone = document.createElement('div');
    dropZone.className = 'drop-zone';
    dropZone.id = 'drop-zone';

    const wordBank = document.createElement('div');
    wordBank.className = 'word-bank';

    // State for this question
    let currentOrder = [];

    shuffledWords.forEach((word, index) => {
        const chip = document.createElement('button');
        chip.className = 'word-chip';
        chip.innerHTML = withPinyin(word);
        chip.dataset.index = index;

        chip.addEventListener('click', () => {
            // Move to drop zone
            if (!chip.classList.contains('used')) {
                chip.classList.add('used');
                currentOrder.push({ word, index });

                const dropChip = document.createElement('button');
                dropChip.className = 'word-chip';
                dropChip.innerHTML = withPinyin(word);
                dropChip.addEventListener('click', () => {
                    // Remove from drop zone
                    currentOrder = currentOrder.filter(item => item.index !== index);
                    dropZone.removeChild(dropChip);
                    chip.classList.remove('used');
                    checkIfFilled();
                });

                dropZone.appendChild(dropChip);
                checkIfFilled();
            }
        });

        wordBank.appendChild(chip);
    });

    function checkIfFilled() {
        if (currentOrder.length > 0) dropZone.classList.add('filled');
        else dropZone.classList.remove('filled');
    }

    elements.exerciseContent.appendChild(dropZone);
    elements.exerciseContent.appendChild(wordBank);

    const verifyBtnContainer = document.createElement('div');
    verifyBtnContainer.className = 'verify-btn-container';
    const verifyBtn = document.createElement('button');
    verifyBtn.className = 'btn btn-primary';
    verifyBtn.textContent = 'Kiểm tra';
    verifyBtn.onclick = () => {
        const answerStr = currentOrder.map(item => item.word).join('');
        const isCorrect = answerStr === q.correctAnswer;

        // Disable interaction
        wordBank.style.pointerEvents = 'none';
        dropZone.style.pointerEvents = 'none';
        verifyBtn.style.display = 'none';

        if (isCorrect) {
            dropZone.style.borderColor = 'var(--success-color)';
            dropZone.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
            state.score++;
            showFeedback(true, q.explanation);
        } else {
            dropZone.style.borderColor = 'var(--error-color)';
            dropZone.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            showFeedback(false, q.explanation || `Đáp án đúng: ${q.correctAnswer}`);
        }
    };
    verifyBtnContainer.appendChild(verifyBtn);
    elements.exerciseContent.appendChild(verifyBtnContainer);
}

function showFeedback(isCorrect, explanation) {
    elements.feedbackPanel.className = `feedback-panel mt-6 ${isCorrect ? 'success' : 'error'}`;
    elements.feedbackTitle.textContent = isCorrect ? 'Chính xác!' : 'Chưa chính xác!';
    elements.feedbackDesc.textContent = explanation || (isCorrect ? 'Làm tốt lắm!' : 'Cố gắng lên nhé!');
    elements.feedbackPanel.classList.remove('hidden');
    elements.scoreCounter.textContent = `Điểm: ${state.score}`;
}

function handleNextQuestion() {
    elements.feedbackPanel.classList.add('hidden');
    state.currentQuestionIndex++;

    if (state.currentQuestionIndex < state.questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    elements.progressBar.style.width = '100%';
    elements.finalScore.textContent = state.score;

    const ratio = state.score / state.questions.length;
    if (ratio === 1) {
        elements.resultMessage.textContent = 'Hoàn hảo! Bạn đã nắm vững điểm ngữ pháp này xuất sắc!';
    } else if (ratio >= 0.8) {
        elements.resultMessage.textContent = 'Rất tốt! Bạn làm chủ cấu trúc này rất khá.';
    } else if (ratio >= 0.5) {
        elements.resultMessage.textContent = 'Khá tốt, nhưng hãy ôn tập thêm nhé.';
    } else {
        elements.resultMessage.textContent = 'Đừng nản chí! Hãy xem lại lý thuyết và thử sức lần nữa.';
    }

    navigateTo('view-result');
}

// Start
document.addEventListener('DOMContentLoaded', init);
