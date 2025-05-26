# 🧠 WHO Said That?

**WHO Said That?** is an AI-powered fake news detection app built using modern web technologies. Users can input any claim or statement, and the app will verify its authenticity using a trained machine learning model hosted via a Flask backend API.

---

## 🖥️ System Specs

| Feature           | Description                                         |
|------------------|-----------------------------------------------------|
| 💻 OS             | Windows 11 Home                                     |
| 🧠 Processor      | Intel® Core™ i5-8365U CPU @ 1.60GHz (1.90GHz Turbo) |
| 🔋 Installed RAM  | 16 GB (15.7 GB usable)                              |
| 💾 Storage        | SSD (recommended for faster `node_modules`)        |

---

## 🛠️ Tech Stack

| Category     | Tech                           |
|--------------|--------------------------------|
| Frontend     | **Next.js 15 (App Router)**    |
| Styling      | TailwindCSS 3 + CSS Modules    |
| Language     | TypeScript                     |
| Fonts        | Google Fonts (`Poppins`, `Poor Story`) |
| UI/UX        | Radix UI, Lucide Icons         |
| Animation    | tailwindcss-animate            |
| Backend      | Flask (Python 3)               |
| ML Model     | `.pkl` Fake News Classifier    |
| Hosting      | Localhost (or optional Vercel) |

---

## 📸 App Preview

> ![App Preview](public/who-said-that.png)

---

## 📁 Project Structure

```
WHO-SAID-THAT/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   └── header.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── background.png
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
├── app.py (Flask backend)
├── model.pkl (ML model)
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/WHO-SAID-THAT.git
cd WHO-SAID-THAT
```

### 2. Install frontend dependencies

```
npm install
```

### 3. Start Flask Backend

> Run this in a **separate terminal**:

```
cd WHO-SAID-THAT
cd backend
python app.py
```

- Make sure Flask runs at `http://localhost:5000`
- Ensure `model.pkl` exists and is correctly loaded inside `app.py`

### 4. Start the Frontend (Next.js)

> Open another terminal:

```
cd app
npm run dev
```

- Visit [http://localhost:3000](http://localhost:3000)

---

## 🔍 How It Works

1. **User enters a claim** in the text field on the website.
2. **Frontend (Next.js)** sends the input to Flask backend (`/api/verify`) using a `POST` request.
3. Flask loads the **fake news detection model** from `model.pkl`.
4. The model processes the input and returns a prediction.
5. **Frontend displays the result**: whether the statement is likely **fake** or **real**.

---

## ⚙️ Backend (Flask)

### app.py (simplified structure)

```python
from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)
model = joblib.load('model.pkl')

@app.route('/api/verify', methods=['POST'])
def verify():
    data = request.json['text']
    prediction = model.predict([data])[0]
    return jsonify({'result': prediction})
```

- Flask must run on **port 5000**
- Accepts JSON with a `text` key
- Returns prediction like `{ "result": "FAKE" }`

---

## 🧪 Troubleshooting

| Issue                             | Solution                                                       |
|----------------------------------|----------------------------------------------------------------|
| 🚫 Background image not found    | Ensure `background.png` exists in the `/public` folder         |
| 🔴 Tailwind/Fonts not applied    | Check your `globals.css` and `tailwind.config.ts`              |
| ❌ Prediction not returning      | Check if Flask is running and `model.pkl` path is correct      |
| ⚠️ ESLint: `no-unescaped-entities` | Use `&apos;` or disable the rule in `.eslintrc`                |
| 🧩 Dependency conflicts          | Use `npm install --legacy-peer-deps`                           |

---

## 🌐 Deployment (Optional)

- Frontend can be deployed on **Vercel**.
- Backend can be hosted via **Render**, **Railway**, or a local server with port exposure.

---

## 📦 Production Build

```
npm run build
npm run start
```

- Be sure your backend is running before starting the frontend.

---

## 🔐 .gitignore

```
/node_modules
/.next
/out
.env
/build
.DS_Store
*.pem
*.tsbuildinfo
```

---

## 🤖 Contribution

Pull requests are welcome! Please open an issue to discuss new features or ideas.

---

## 📊 Model Training & Evaluation

You can explore the complete notebook for:
- Data Preprocessing
- Model Training
- Classifier Comparison

📎 [Open Colab Notebook](https://colab.research.google.com/drive/1NGY_sUyRY2vYaFDJ7ps26tfUewL9fvqC?usp=sharing)

---

## 📄 License

MIT © Qurat-ul-ain — 2025