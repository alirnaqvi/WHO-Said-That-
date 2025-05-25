# backend/app.py
# ---------------------------------------------------------
# Universal COVID-19 fake-news API
# – Works with *either* a linear model (SVM / Logistic Reg.)
#   or a Naïve-Bayes model (MultinomialNB/BernoulliNB)
# ---------------------------------------------------------

from pathlib import Path

from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

# ------------------------------------------------------------------
# 1.  Load trained pipeline
# ------------------------------------------------------------------
MODEL_PATH = Path("covid_fake_news_nb.pkl")  # ⇦ put your *.pkl here
pipe = joblib.load(MODEL_PATH)               # Pipeline(tfidf , clf)

app = Flask(__name__)
CORS(app)  # allow http://localhost:3000 (Next.js) to call us

# ------------------------------------------------------------------
# 2.  Utility: explain in lay-language the top-influential tokens
# ------------------------------------------------------------------
def layman_reason(text: str, top_k: int = 4) -> str:
    """Return the K tokens that contributed most to the prediction."""
    tfidf = pipe.named_steps["tfidf"]
    clf   = pipe.named_steps["clf"]

    # --- get a per-token weight vector --------------------------------
    if hasattr(clf, "coef_"):                      # linear SVM / LogReg
        coef = clf.coef_.ravel()
    elif hasattr(clf, "feature_log_prob_"):        # MultinomialNB, etc.
        # difference between log-prob for class 1 vs class 0
        coef = clf.feature_log_prob_[1] - clf.feature_log_prob_[0]
    else:
        return "N/A"

    row   = tfidf.transform([text])
    idxs  = row.nonzero()[1]
    pairs = [(tfidf.get_feature_names_out()[j], row[0, j] * coef[j]) for j in idxs]
    pairs.sort(key=lambda x: abs(x[1]), reverse=True)
    words = [tok for tok, _ in pairs[:top_k]]
    return ", ".join(words) if words else "N/A"

# ------------------------------------------------------------------
# 3.  API endpoint
# ------------------------------------------------------------------
@app.route("/api/verify", methods=["POST"])
def verify():
    data = request.get_json(silent=True) or {}
    text = (data.get("text") or "").strip()
    if not text:
        return jsonify({"error": "No text provided"}), 400

    label = pipe.predict([text])[0]                      # 'fake' / 'real'

    # --- confidence ---------------------------------------------------
    if hasattr(pipe, "decision_function"):
        margin = float(pipe.decision_function([text])[0])
    else:  # NB, etc. → use log-probability of predicted class
        probs  = pipe.predict_log_proba([text])[0]
        cls_id = pipe.classes_.tolist().index(label)
        margin = float(probs[cls_id])

    return jsonify(
        label = label,
        score = margin,                      # margin (>0 real, <0 fake) or log-prob
        why   = f"Key words: {layman_reason(text)}"
    )

# ------------------------------------------------------------------
# 4.  Simple health-check
# ------------------------------------------------------------------
@app.route("/")
def home():
    return "Fake-News API up!"

# ------------------------------------------------------------------
# 5.  Run (dev mode)
# ------------------------------------------------------------------
if __name__ == "__main__":
    # accessible from browser on http://127.0.0.1:5000  (and LAN address)
    app.run(host="0.0.0.0", port=5000, debug=True)
