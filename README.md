💬 Feedback Form

Welcome to the Feedback Form project! 🌟
This is a simple and elegant web app built using Node.js, Express, and HTML/CSS that allows users to share their feedback — stored safely inside a local feedback.json file 📝

🧱 Tech Stack
Technology	Purpose
⚙️ Node.js	Backend runtime environment
🚀 Express.js	Web framework for handling routes and requests
🎨 HTML5 & CSS3	Frontend form and styling
💾 JSON	For storing submitted feedback locally
🌈 Features

✅ Responsive feedback form
✅ Stores all submissions in feedback.json
✅ Redirects to a Thank You page after submission
✅ Clean and simple UI design
✅ Optional confetti animation on submission 🎉

🗂️ Project Structure
feedback-form/
│
├── server.js           # Node + Express backend
├── feedback.json       # Stores all user feedback
└── public/
    ├── index.html      # Feedback form page
    ├── thankyou.html   # After-submission page
    ├── style.css       # Frontend styling
    └── script.js       # (Optional) for animations or fetch API

⚙️ How to Run

Clone the repository

git clone https://github.com/your-username/feedback-form.git
cd feedback-form


Install dependencies

npm install express


Start the server

node server.js


Open your browser and visit 👉
http://localhost:4000

🧾 Example Output (feedback.json)

After a few submissions, your file might look like this 👇

[
  {
    "name": "Sandra",
    "email": "ashnikkob001@gmail.com",
    "feedback": "Loved the design!",
    "date": "10/28/2025, 9:40:12 PM"
  }
]

🌟 Future Enhancements

📨 Send feedback data to a database (MongoDB / Firebase)

📧 Add email notifications for admin

💡 Add dark/light theme toggle

🌐 Deploy online using Render or Vercel
