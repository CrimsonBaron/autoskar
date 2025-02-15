import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  count: number;
}

export const Counter: React.FC<CounterProps> = ({ count }) => {
  const digitRefs = useRef<HTMLDivElement[]>([]);
  const [displayedCount, setDisplayedCount] = useState(count);

  useEffect(() => {
    setDisplayedCount(count);
  }, [count]);

  useEffect(() => {
    const updateDisplay = () => {
      const countString = String(displayedCount).padStart(6, '0');
      const digits = countString.split('');

      digits.forEach((digit, index) => {
        if (digitRefs.current[index]) {
          const digitColumn = digitRefs.current[index];
          const digitValue = parseInt(digit, 10);

          // Apply transition *before* changing the transform
          digitColumn.style.transition = 'transform 0.3s ease-in-out'; // Add transition here

          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            digitColumn.style.transform = `translateY(${-digitValue * 100}%)`;
          });
        }
      });
    };

    updateDisplay();
  }, [displayedCount]);

  return (
    <div className='flex flex-row overflow-hidden h-6 '>
      {String(displayedCount).padStart(6, '0').split('').map((char, index) => (
        <div
          key={`counter-${index}`}
          className='w-8 h-8 text-center text-4xl relative'
          ref={el => {
            digitRefs.current[index] = el!;
          }}
        >
          <div className="digit-container absolute top-0 left-0 w-full h-full"> {/* Container for digits */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <div key={num} className="digit flex items-center justify-center h-8">
                {num}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};