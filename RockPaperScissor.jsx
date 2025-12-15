import React, { useState } from 'react';

export default function RockPaperScissor() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0, draws: 0 });

  const choices = ['Rock', 'Paper', 'Scissors'];
  const choiceEmojis = {
    Rock: '🪨',
    Paper: '📄',
    Scissors: '✂️'
  };

  const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return 'Draw';
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'Win';
    }
    return 'Lose';
  };

  const handlePlay = (choice) => {
    const computer = getComputerChoice();
    const gameResult = determineWinner(choice, computer);

    setPlayerChoice(choice);
    setComputerChoice(computer);
    setResult(gameResult);

    // Update score
    setScore((prev) => ({
      ...prev,
      player: gameResult === 'Win' ? prev.player + 1 : prev.player,
      computer: gameResult === 'Lose' ? prev.computer + 1 : prev.computer,
      draws: gameResult === 'Draw' ? prev.draws + 1 : prev.draws
    }));
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <div
        style={{
          width: 600,
          background: 'white',
          borderRadius: 24,
          boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            padding: 40,
            textAlign: 'center',
            color: 'white'
          }}
        >
          <h1 style={{ margin: 0, fontSize: 32, fontWeight: 'bold' }}>
            Rock Paper Scissors
          </h1>
          <p style={{ margin: '8px 0 0 0', fontSize: 14, opacity: 0.9 }}>
            Play against the computer
          </p>
        </div>

        {/* Score Section */}
        <div
          style={{
            padding: 30,
            display: 'flex',
            justifyContent: 'space-around',
            borderBottom: '1px solid #e5e7eb',
            backgroundColor: '#f9fafb'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#667eea' }}>
              {score.player}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
              Wins
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#764ba2' }}>
              {score.draws}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
              Draws
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: '#dc2626' }}>
              {score.computer}
            </div>
            <div style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>
              Losses
            </div>
          </div>
        </div>

        {/* Game Section */}
        <div style={{ padding: 40 }}>
          {/* Choices Display */}
          {playerChoice && computerChoice && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginBottom: 30,
                gap: 20
              }}
            >
              {/* Player Choice */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 80,
                    marginBottom: 8,
                    background: '#e0e7ff',
                    width: 120,
                    height: 120,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {choiceEmojis[playerChoice]}
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
                  Your choice
                </p>
              </div>

              {/* VS */}
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#9ca3af'
                }}
              >
                VS
              </div>

              {/* Computer Choice */}
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 80,
                    marginBottom: 8,
                    background: '#fce7f3',
                    width: 120,
                    height: 120,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {choiceEmojis[computerChoice]}
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
                  Computer choice
                </p>
              </div>
            </div>
          )}

          {/* Result */}
          {result && (
            <div
              style={{
                background:
                  result === 'Win'
                    ? '#d1fae5'
                    : result === 'Lose'
                      ? '#fee2e2'
                      : '#fef3c7',
                border:
                  result === 'Win'
                    ? '2px solid #10b981'
                    : result === 'Lose'
                      ? '2px solid #ef4444'
                      : '2px solid #f59e0b',
                borderRadius: 12,
                padding: 16,
                marginBottom: 24,
                textAlign: 'center'
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 'bold',
                  color:
                    result === 'Win'
                      ? '#10b981'
                      : result === 'Lose'
                        ? '#ef4444'
                        : '#f59e0b'
                }}
              >
                {result === 'Win' && '🎉 You Won!'}
                {result === 'Lose' && '😢 You Lost!'}
                {result === 'Draw' && '🤝 It\'s a Draw!'}
              </p>
            </div>
          )}

          {/* Play Buttons */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
            {choices.map((choice) => (
              <button
                key={choice}
                onClick={() => handlePlay(choice)}
                style={{
                  flex: 1,
                  padding: 16,
                  fontSize: 16,
                  fontWeight: 'bold',
                  border: 'none',
                  borderRadius: 12,
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
                  transform: playerChoice === choice ? 'scale(0.95)' : 'scale(1)'
                }}
                onMouseOver={(e) => {
                  e.target.style.boxShadow =
                    '0px 10px 15px -3px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.boxShadow =
                    '0px 4px 6px -4px rgba(0, 0, 0, 0.1)';
                }}
              >
                {choiceEmojis[choice]} {choice}
              </button>
            ))}
          </div>

          {/* Reset Button */}
          {playerChoice && (
            <button
              onClick={resetGame}
              style={{
                width: '100%',
                padding: 12,
                fontSize: 14,
                fontWeight: 'bold',
                border: '2px solid #e5e7eb',
                borderRadius: 12,
                background: 'white',
                color: '#6b7280',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.background = '#f9fafb';
                e.target.borderColor = '#d1d5db';
              }}
              onMouseOut={(e) => {
                e.target.background = 'white';
                e.target.borderColor = '#e5e7eb';
              }}
            >
              Play Again
            </button>
          )}

          {/* Instructions */}
          {!playerChoice && (
            <div
              style={{
                background: '#f3f4f6',
                borderRadius: 12,
                padding: 16,
                textAlign: 'center',
                color: '#6b7280',
                fontSize: 14
              }}
            >
              <p style={{ margin: 0 }}>👇 Choose your move to start the game</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
