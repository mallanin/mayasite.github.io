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
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* --- ANIMATED MESH GRADIENT BACKGROUND --- */
.gradient-bg {
    position: fixed; /* Fixed to cover screen even on scroll */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fceceb;
    z-index: -1;
    overflow: hidden;
}

.gradients-container {
    filter: blur(80px);
    width: 100%;
    height: 100%;
    position: relative;
}

/* Moving blobs */
.g1, .g2, .g3, .g4 {
    position: absolute;
    border-radius: 50%;
    opacity: 0.8;
    animation: move 20s infinite alternate;
}

.g1 {
    background: radial-gradient(circle, #ffafbd 0%, #ffc3a0 100%);
    width: 80%; height: 80%;
    top: -10%; left: -10%;
    animation-duration: 18s;
}

.g2 {
    background: radial-gradient(circle, #cc2b5e 0%, #753a88 100%);
    width: 60%; height: 60%;
    top: 20%; right: -10%;
    opacity: 0.6;
    animation-duration: 25s;
    animation-direction: alternate-reverse;
}

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

/* --- GLASS UI --- */
.glass-panel {
    /* Minimal glass background for the container itself */
    background: rgba(255, 255, 255, 0.1); 
    padding: 20px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
}

.centered-panel {
    /* Only applied to login page to center it perfectly */
    position: absolute;
}

/* --- INPUT & BUTTON STYLES (SHARED) --- */
/* This style is now shared by the password box and the back button */
input, #back-btn {
    width: 280px;
    padding: 15px 20px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    font-size: 1.1rem;
    color: #333;
    outline: none;
    transition: 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
    cursor: pointer; /* Cursor for button */
}

/* Remove default button styling for back button to match input */
#back-btn {
    display: inline-block;
    color: #444;
    font-weight: 500;
}

/* Focus / Hover States */
input:focus, #back-btn:hover {
    background: rgba(255, 255, 255, 0.55);
    border-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
    transform: scale(1.02);
}

/* Arrow Button inside Input */
.input-group {
    position: relative;
}

#enter-btn {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.2s;
}

#enter-btn:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
}

/* Error Message */
#error-msg {
    color: #a50e0e;
    margin-top: 15px;
    font-weight: 500;
    font-size: 0.9rem;
    
    /* Hidden by default */
    visibility: hidden; 
    opacity: 0;
    transform: translateY(-5px);
    transition: all 0.3s;
    height: 20px; /* Reserve height to prevent jumping */
}

#error-msg.visible {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
}

/* Shake Animation */
.shake {
    animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
}

/* --- PAGE 2 SPECIFICS --- */
.hidden {
    display: none !important;
}

#content-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.nav-container {
    margin-bottom: 30px;
}

.glass-panel-large {
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    padding: 40px;
    width: 80%;
    max-width: 600px;
    max-height: 60vh;
    overflow-y: auto;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
}

.test-text {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #444;
    word-spacing: 5px;
}
