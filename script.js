/* --- RESET & FONTS --- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif;
}

body {
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* Prevents scrollbars on the main window */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* --- ANIMATED MESH GRADIENT BACKGROUND --- */
.gradient-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fceceb; /* Fallback */
    z-index: -1;
    overflow: hidden;
}

.gradients-container {
    filter: blur(80px); /* This blends the colors together smoothly */
    width: 100%;
    height: 100%;
}

/* We create 4 moving blobs of color */
.g1, .g2, .g3, .g4 {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    animation: move 20s infinite alternate;
}

/* Orange/Red */
.g1 {
    background: radial-gradient(circle, #ffafbd 0%, #ffc3a0 100%);
    width: 80%; height: 80%;
    top: -10%; left: -10%;
    animation-duration: 18s;
}

/* Purple/Blue */
.g2 {
    background: radial-gradient(circle, #cc2b5e 0%, #753a88 100%);
    width: 60%; height: 60%;
    top: 20%; right: -10%;
    opacity: 0.6;
    animation-duration: 25s;
    animation-direction: alternate-reverse;
}

/* Yellow/Green mix */
.g3 {
    background: radial-gradient(circle, #fce38a 0%, #f38181 100%);
    width: 50%; height: 50%;
    bottom: -10%; left: 10%;
    animation-duration: 22s;
}

@keyframes move {
    from { transform: translate(-10%, -10%) rotate(0deg); }
    to { transform: translate(10%, 10%) rotate(20deg); }
}

/* --- GLASSMORPHISM UI --- */
.glass-panel {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 24px;
    padding: 50px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
    transition: all 0.4s ease;
}

.title {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 30px;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.input-group {
    position: relative;
    width: 100%;
}

input {
    width: 100%;
    padding: 15px 20px;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.6);
    font-size: 1.1rem;
    color: #333;
    outline: none;
    transition: 0.3s;
}

input:focus {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

#enter-btn {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 40px;
    width: 40px;
    border-radius: 12px;
    border: none;
    background: #333;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
}

#enter-btn:hover {
    transform: scale(1.05);
}

#error-msg {
    color: #890b0b;
    margin-top: 15px;
    font-weight: 600;
    font-size: 0.9rem;
    opacity: 0; /* Hidden by default */
    transform: translateY(-5px);
    transition: all 0.3s;
}

#error-msg.visible {
    opacity: 1;
    transform: translateY(0);
}

/* SHAKE ANIMATION */
.shake {
    animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
}

/* --- PAGE 2 CONTENT --- */
.hidden {
    display: none !important;
}

#content-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px; /* Space for nav */
}

.glass-nav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 800px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(15px);
    padding: 15px 25px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: #333;
    z-index: 10;
}

#back-btn {
    background: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    color: #333;
}

.glass-panel-large {
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(30px);
    border-radius: 24px;
    padding: 40px;
    width: 90%;
    max-width: 800px;
    height: 80vh;
    overflow-y: auto; /* Allows scrolling */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 10px;
    color: #222;
}

/* IMAGE HANDLING */
.image-gallery {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.gallery-img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.placeholder-box {
    width: 100%;
    height: 200px;
    border: 2px dashed rgba(0,0,0,0.2);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0,0,0,0.5);
    font-weight: 500;
}

textarea {
    width: 100%;
    height: 150px;
    margin-top: 20px;
    background: rgba(255,255,255,0.5);
    border: none;
    padding: 20px;
    border-radius: 12px;
    font-size: 1rem;
    resize: none;
    outline: none;
}
