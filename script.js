(function() {
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");
    let innerWidth, innerHeight;
    canvas.width = innerWidth = window.innerWidth;
    canvas.height = innerHeight = window.innerHeight;
    const SunRadius = 100;
    const sunOrbitRadius = 200;
    const sunCordinate = { x: innerWidth / 2, y: innerHeight / 2 };
    const sunOrbitCordinate = { x: innerWidth / 2, y: innerHeight / 2 };
    const earthOrbit = 60;
    const earhOrbitCordinate = {};
    let testX, testY;
    let testXAngle = 0;
    let moonX, moonY;
    let moonAngle = 0.9;

    const draw = () => {
        context.clearRect(0, 0, innerWidth, innerHeight);
        requestAnimationFrame(draw);
        testX = innerWidth / 2 + Math.cos(testXAngle) * sunOrbitRadius;
        testY = innerHeight / 2 + Math.sin(testXAngle) * sunOrbitRadius;

        moonX = testX + Math.cos(moonAngle) * 70;
        moonY = testY + Math.sin(moonAngle) * 70;
        // draw sun

        context.fillStyle = "#f3f311";
        context.beginPath();
        context.arc(sunCordinate.x, sunCordinate.y, SunRadius, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();

        //draw sun orbit
        // context.strokeStyle = "grey";
        // context.beginPath();
        // context.arc(testX, testY, 70, 0, Math.PI * 2, false);
        // context.stroke();
        // context.closePath();

        // context.strokeStyle = "grey";
        // context.beginPath();
        // context.arc(sunCordinate.x, sunCordinate.y, sunOrbitRadius, 0, Math.PI * 2, false);
        // context.stroke();
        // context.closePath();

        context.fillStyle = "grey";
        context.beginPath();
        context.arc(moonX, moonY, 20, 0, Math.PI * 2, false);
        context.fill();
        context.closePath();

        // test for moon;
        context.fillStyle = "#44c6ff";
        context.beginPath();
        context.arc(testX, testY, 40, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();

        // the moon

        testXAngle += 0.001;
        moonAngle += 0.01;
    };

    draw();
})();
