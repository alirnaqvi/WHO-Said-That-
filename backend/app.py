from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

MODEL_PATH = "covid_fake_news_svm_tfidf.pkl"
pipe = joblib.load(MODEL_PATH)                 # ← make sure .pkl is here

app = Flask(__name__)
CORS(app)   # allow React dev-server (localhost:3000) to call us

def layman_reason(text, top_k=4):
    tfidf = pipe.named_steps["tfidf"]
    clf   = pipe.named_steps["clf"]
    coef  = clf.coef_.ravel()
    row   = tfidf.transform([text])
    idxs  = row.nonzero()[1]
    pairs = [(tfidf.get_feature_names_out()[j], row[0, j] * coef[j]) for j in idxs]
    pairs.sort(key=lambda x: abs(x[1]), reverse=True)
    words = [tok for tok, _ in pairs[:top_k]]
    return ", ".join(words)

@app.route("/api/verify", methods=["POST"])
def verify():
    data = request.get_json(silent=True) or {}
    text = data.get("text", "").strip()
    if not text:
        return jsonify({"error": "No text provided"}), 400

    label  = pipe.predict([text])[0]             # 'fake' or 'real'
    margin = float(pipe.decision_function([text])[0])
    return jsonify({
        "label": label,
        "score": margin,
        "why": f"Key words: {layman_reason(text)}"
    })

@app.route("/")
def home():
    return "Fake-News API up!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
