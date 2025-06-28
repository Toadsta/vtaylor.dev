document.addEventListener("DOMContentLoaded", () => {
    const snowflakesContainer = document.querySelector('.snowflakes');

    // var & const
    const maxSnowflakes = 100;

    const minSnowSize = 2;
    const maxSnowSize = 4;

    const minAniDur = 10;
    const maxAniDur = 15;

    const d = new Date();
    let month = d.getMonth();


    //snow

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (month === 10 || month === 11) {
        function createSnowflake() {
            if (snowflakesContainer.children.length >= maxSnowflakes) {
                snowflakesContainer.removeChild(snowflakesContainer.firstChild);
            }

            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            // Randomise snowflake's horizontal position, animation duration, and size
            const xPosition = Math.random() * window.innerWidth;
            const animationDuration = getRandomNumber(minAniDur, maxAniDur);
            const snowflakeSize = getRandomNumber(minSnowSize, maxSnowSize);

            const startPosition = Math.random() * 100;
            snowflake.style.left = `${xPosition}px`;
            snowflake.style.top = `-${startPosition}px`;

            snowflake.style.width = `${snowflakeSize}px`;
            snowflake.style.height = `${snowflakeSize}px`;

            // Apply animation properties
            snowflake.style.animationDuration = `${animationDuration}s`;
            snowflake.style.animationTimingFunction = 'ease-in';
            snowflake.style.animationIterationCount = 'infinite'; // Ensure it repeats infinitely

            // Append snowflake to the container
            snowflakesContainer.appendChild(snowflake);

            // Remove snowflake after it falls off the screen
            snowflake.addEventListener('animationend', () => {
                snowflake.remove();
            });
        }

        setInterval(createSnowflake, 700);
    }
});
