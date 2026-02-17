let captchaText = '';

// Initialize CAPTCHA after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if CAPTCHA elements exist before initializing
    if (document.getElementById('captcha')) {
        generateCaptcha();
    }
});

function generateCaptcha() {
    try {
        const canvas = document.getElementById('captcha');
        const ctx = canvas.getContext('2d');
        
        // Clear previous CAPTCHA
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Generate random string (more secure with mixed characters)
        const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // Removed confusing characters like 0,1,I,O
        captchaText = Array(6).fill()
            .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
            .join('');

        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#f0f0f0');
        gradient.addColorStop(1, '#e0e0e0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Add noise lines
        for (let i = 0; i < 5; i++) {
            drawNoiseLine(ctx, canvas.width, canvas.height);
        }

        // Draw CAPTCHA text
        drawCaptchaText(ctx, captchaText, canvas.width, canvas.height);

    } catch (error) {
        console.error('Error generating CAPTCHA:', error);
    }
}

function drawNoiseLine(ctx, width, height) {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${Math.random() * 100},${Math.random() * 100},${Math.random() * 100},0.2)`;
    ctx.lineWidth = 1;
    
    let x = 0;
    let y = Math.random() * height;
    ctx.moveTo(x, y);
    
    for(x = 0; x < width; x += 10) {
        y = y + Math.random() * 10 - 5;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

function drawCaptchaText(ctx, text, width, height) {
    ctx.font = 'bold 30px Arial';
    ctx.fillStyle = 'rgb(4, 65, 112)';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    
    const chars_array = text.split('');
    chars_array.forEach((char, i) => {
        const x = (width / 6) * (i + 0.5);
        const y = height / 2;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.3); // Reduced rotation for better readability
        ctx.fillText(char, 0, 0);
        ctx.restore();
    });
}

function validateCaptcha() {
    try {
        const userInput = document.getElementById('captchaInput').value.toUpperCase();
        if (!userInput) {
            alert('Please enter the CAPTCHA code');
            return false;
        }
        
        if (userInput === captchaText) {
            alert('CAPTCHA verified successfully!');
            return true;
        } else {
            alert('Invalid CAPTCHA! Please try again.');
            generateCaptcha();
            document.getElementById('captchaInput').value = '';
            return false;
        }
    } catch (error) {
        console.error('Error validating CAPTCHA:', error);
        return false;
    }
}
